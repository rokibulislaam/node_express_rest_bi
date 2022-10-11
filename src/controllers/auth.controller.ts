import { Request, Response, NextFunction } from 'express';
import { autoInjectable } from 'tsyringe';
import _ from 'lodash';
import bcrypt from 'bcrypt'

import { BaseController } from './base.controller';
import { AuthService } from '@services';
import { HttpError } from '@errors';
import { IUser } from '@interfaces';
@autoInjectable()
export class AuthController extends BaseController {
  constructor(private authService: AuthService) {
    super(authService);
  }

  signup = async (req: Request, res: Response, next: NextFunction) => {
    const {
      age,
      email,
      firstName,
      gender,
      lastName,
      password,
      phone,
      userType,
    }: Omit<IUser, '_id' | 'sessions' | 'tokens' | 'courses'> = req.body;

    if (
      !_.some(
        [age, email, firstName, gender, lastName, password, phone, userType],
        _.isEmpty
      )
    ) {
      bcrypt.genSalt(10).then(salt => {
        bcrypt.hash(password, salt).then()
      })
      // this.authService.signup({age, firstName, lastName, email, pas})
    } else {
      next(new HttpError(400, 'Incomplete user data'));
    }
  };
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
        })
        .catch((err) => {
          next(new HttpError(401, err));
        });
    } else {
      next(new HttpError(400, `Invalid credentials`));
    }
  };
}
