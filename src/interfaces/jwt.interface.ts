import { JwtPayload } from "jsonwebtoken";

export interface IJWTPayload extends JwtPayload {
  userType: 'student' | 'coach',
  userId: string
}