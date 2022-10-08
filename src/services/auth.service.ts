import { IUser } from '@interfaces';
import { UserRepository } from 'repositories/user.repository';
import { BaseService } from './base.service';
import { UserService } from './user.service';

export class AuthService extends BaseService<IUser> {
  constructor(repository: UserRepository, private userService: UserService) {
    super(repository);
  }
  login() {
    
  }
}
