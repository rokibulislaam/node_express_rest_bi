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

  async signup(userData: Partial<IUser>) {
    return this.repository.create(userData as IUser);
  }
  
  /**
   *
   * @param userData
   * @returns {string} resolves `jwtToken` or rejects with an `errorMessage`
   */
  async login(userData: Pick<IUser, 'email' | 'password'>): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const user = await this.userService.getUser({ email: userData.email });
      if (!user?.password) {
        return reject('Credentials not found');
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
            reject('Invalid email or password');
          }
        })
        .catch((err) => {
          reject('Invalid email or password');
        });
    });
  }
}
