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

  async getUserById(id: IUser['_id']) {
    return this.repository.findOne({ _id: id });
  }
  async updateUser(userData: Partial<IUser>) {}
  async getUser(userData: Partial<IUser>) {
    return this.repository.findOne(userData);
  }
}
