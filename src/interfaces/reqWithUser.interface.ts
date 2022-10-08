import { Request } from 'express';
import { IUserJWTPayload } from './jwt.interface';

export interface IReqWithUser extends Request {
  user: IUserJWTPayload;
}
