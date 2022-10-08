import { Types } from 'mongoose';

interface IUser {
  userType: 'student' | 'coach';
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  age: number;
  phone: String;
  sessions: Types.ObjectId;
  courses: String[];
  tokens: String[];
}

export { IUser };
