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
  create(item: IUser): Promise<IUser> {
    return new Promise((resolve, reject) => {
      console.log("user created")
      resolve({} as unknown as IUser);
    });
  }
}
