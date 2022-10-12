import { autoInjectable } from 'tsyringe';
import { IUser } from '@interfaces';
import { userModel } from '@models';
import { BaseRepository } from './base.repository';

// export class UserRepository extends BaseRepository<typeof userModel> {
@autoInjectable()
export class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(userModel);
  }
}
