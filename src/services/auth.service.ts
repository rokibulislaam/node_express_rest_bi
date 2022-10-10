import { autoInjectable } from 'tsyringe';
import { IUser } from '@interfaces';
import { logger } from '@utils';
import { UserRepository } from '@repositories';
import { BaseService } from './base.service';
import { UserService } from './user.service';
@autoInjectable()
export class AuthService extends BaseService<IUser> {
  constructor(repository: UserRepository, private userService: UserService) {
    super(repository);
  }
  login() {
    logger.info('User has been logged in');
  }
}
