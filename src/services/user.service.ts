import { IUser } from '@interfaces';
import { UserRepository } from '@repositories';
import { autoInjectable } from 'tsyringe';
import { BaseService } from './base.service';
@autoInjectable()
export class UserService extends BaseService<IUser> {
  constructor(repository: UserRepository) {
    super(repository);
  }
  async createUser(userData: IUser) {
    return this.repository.create(userData);
  }

  async getUserById(id: string) {
    return this.repository.findOne(id);
  }
}
