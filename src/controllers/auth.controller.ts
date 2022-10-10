import { Request, Response, NextFunction } from 'express';
import { autoInjectable } from 'tsyringe';
import _ from 'lodash';
import { BaseController } from './base.controller';
import { AuthService } from '@services';
import { HttpError } from '@errors';

@autoInjectable()
export class AuthController extends BaseController {
  constructor(private authService: AuthService) {
    super(authService);
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (email && password) {
      this.authService
        .login({
          email,
          password,
        })
        .then((result) => {
          if (typeof result == 'string') {
            res.header('Authorization', `Bearer ${result}`);
            res.status(200).json({
              message: `Login successful`,
              token: result,
            });
          } else {
            next(new HttpError(401, `Authentication failed`));
          }
        });
    } else {
      next(new HttpError(400, `Invalid credentials`))
    }
  };
}
