import { ISession } from '@interfaces';
import mongoose from 'mongoose';
const { Schema } = mongoose;
const sessionSchema = new Schema<ISession>({
  startTime: Date,
  endTime: Date,
  status: String,
});

const sessionModel = mongoose.model<ISession>('Session', sessionSchema);
export { sessionModel };
