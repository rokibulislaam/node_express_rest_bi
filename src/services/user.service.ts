import { IUser } from '@interfaces';
import { BaseService } from './base.service';

export class UserService extends BaseService<IUser> {
  async createUser(userData: IUser) {
    return this.repository.create(userData);
  }

  async getUserById(id: string) {
    return this.repository.findOne(id);
  }
}