import { autoInjectable } from 'tsyringe';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { IUser, IUserJWTPayload } from '@interfaces';
import { hashPassword, logger } from '@utils';
import { UserRepository } from '@repositories';
import { BaseService } from './base.service';
import { UserService } from './user.service';
import { config } from '@config';
@autoInjectable()
export class SessionService extends BaseService<IUser> {
  constructor(repository: UserRepository, private userService: UserService) {
    super(repository);
  }
}
