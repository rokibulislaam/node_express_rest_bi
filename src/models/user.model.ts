import { Schema, model } from 'mongoose';
import { IUser } from '@interfaces';

const userSchema = new Schema<IUser>({
  userType: {
    type: String,
    enum: ['student', 'coach'],
    default: 'student',
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  sessions: {
    type: Schema.Types.ObjectId,
    ref: 'Session',
  },
  courses: {
    type: [String],
    default: [],
  },
  tokens: {
    type: [String],
    default: [],
  },
  password: {
    type: String,
    required: true
  }
});
// userSchema.pre('')
const userModel = model<IUser>('User', userSchema);
export { userModel };
