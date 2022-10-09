import { IRoutes } from '@interfaces';
import { AuthController } from '@controllers';
import { Router } from 'express';
import {autoInjectable} from 'tsyringe'
@autoInjectable()
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
