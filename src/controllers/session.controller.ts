import { Request, Response, NextFunction } from 'express';
import { autoInjectable } from 'tsyringe';
import _ from 'lodash';
import { BaseController } from './base.controller';
import { AuthService, SessionService } from '@services';
import { HttpError } from '@errors';
import { IUser } from '@interfaces';
import { IReqWithUser } from 'interfaces/reqWithUser.interface';
@autoInjectable()
export class SessionController extends BaseController {
  constructor(private sessionService: SessionService) {
    super(sessionService);
  }

  getLearnerSessions = async (
    req:  Request,
    res: Response,
    next: NextFunction
  ) => {
  };
}
