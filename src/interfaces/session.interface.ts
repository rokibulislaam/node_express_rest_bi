import mongoose from 'mongoose';

//create interface for online class session
interface ISession extends mongoose.Document {
  startTime: Date;
  endTime: Date;
  status: String;
  slots: Slot[];
  coachId: mongoose.Types.ObjectId,
}

interface Slot {
  time: Date;
}
export { ISession };
