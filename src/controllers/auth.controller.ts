import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import _ from 'lodash';
import { BaseController } from './base.controller';
import { AuthService } from '@services';

@autoInjectable()
export class AuthController extends BaseController {
  constructor(private authService: AuthService) {
    super(authService);
  }

  login = async (req: Request, res: Response) => {
    this.authService.login();
    res.status(200).json({
      message: 'Login successful',
    });
  };
}
