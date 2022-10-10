import { logger, morganStream } from '@utils';
import express from 'express';
import morgan from 'morgan';
import { IRoutes } from '@interfaces';
import { authMiddleware, errorMiddleware } from '@middlewares';
class App {
  public app: express.Application;
  public env: string;
  public port: number | string;
  constructor(routes: IRoutes[]) {
    this.app = express();
    this.env = process.env.NODE_ENV || 'development';
    this.port = process.env.PORT || 3001;
    this.initMiddlewares();
    this.initRoutes(routes);
    this.initErrorHandling()
  }

  private initMiddlewares() {
    this.app.use(express.json());
    this.app.use(
      morgan('combined', {
        stream: morganStream,
      })
    );
  }
  private initRoutes(routes: IRoutes[]) {
    for (const route of routes) {
      this.app.use('/', route.router);
    }
  }
  private initErrorHandling() {
    this.app.use(errorMiddleware)
  }
  public startServer() {
    this.app.listen(this.port, () => {
      logger.info(`Server listening on port ${this.port}`);
    });
  }
}

export default App;
