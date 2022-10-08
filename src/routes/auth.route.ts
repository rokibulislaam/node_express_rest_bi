import { IRoutes } from '@interfaces';
import { AuthController } from 'controllers/auth.controller';
import { Router } from 'express';

class AuthRoute implements IRoutes {
  public router = Router();

  constructor(private authController: AuthController) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/login', this.authController.login);
    this.router.post('/logout', (req, res) => {});
    this.router.post('/signup', (req, res) => {});
  }
}

export { AuthRoute };
