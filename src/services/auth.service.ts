import { autoInjectable } from 'tsyringe';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { IUser, IUserJWTPayload } from '@interfaces';
import { logger } from '@utils';
import { UserRepository } from '@repositories';
import { BaseService } from './base.service';
import { UserService } from './user.service';
import Config from '@config';
@autoInjectable()
export class AuthService extends BaseService<IUser> {
  constructor(repository: UserRepository, private userService: UserService) {
    super(repository);
  }

  /**
   *
   * @param userData
   * @returns resolves `jwtToken` or rejects with an `Error`
   */
  async login(
    userData: Pick<IUser, 'email' | 'password'>
  ): Promise<string | Error> {
    return new Promise(async (resolve, reject) => {
      const user = await this.userService.getUser({ email: userData.email });
      if (!user.password) {
        return reject(new Error('Credentials not found'));
      }

      bcrypt
        .compare(userData.password, user.password)
        .then((isMatched) => {
          if (isMatched) {
            const jwtToken = jwt.sign(
              { userId: user._id, userType: user.userType },
              Config.jwtSecret
            );
            resolve(jwtToken);
          } else {
            reject(new Error('Invalid email or password'));
          }
        })
        .catch((err) => {
          reject(new Error('Invalid email or password'));
        });
    });
  }
}
