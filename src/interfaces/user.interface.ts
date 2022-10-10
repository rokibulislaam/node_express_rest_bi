import { Types } from 'mongoose';

interface IUser {
  _id: Types.ObjectId,
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
  password: string
}

export { IUser };
