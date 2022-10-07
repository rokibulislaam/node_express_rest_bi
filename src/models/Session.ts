import mongoose from 'mongoose';
const { Schema } = mongoose;
interface Session {
    startTime : Date,
    endTime : Date , 
    status : String 
}
const sessionSchema = new Schema<Session>(
  {
    startTime : Date,
    endTime : Date , 
    status : String 
  }
);

module.exports = mongoose.model("Session", sessionSchema);
