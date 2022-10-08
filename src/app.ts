import { logger, morganStream } from '@utils';
import express from 'express';
import morgan from 'morgan';
import { IRoutes } from '@interfaces';
// app.get(
//   '/',
//   expressjwt({ secret: 'some_secret', algorithms: ['HS256'] }),
// );

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
  }

  private initMiddlewares() {
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
  public startServer() {
    this.app.listen(this.port, () => {
      logger.info(`Server listening on port ${this.port}`);
    });
  }
}

export default App;
