import { JwtPayload } from "jsonwebtoken";
import { IUser } from "./user.interface";

export interface IUserJWTPayload extends JwtPayload {
  userType: IUser['userType'],
  userId: string
}