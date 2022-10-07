import { Schema, model, connect } from 'mongoose';
import { Types } from 'mongoose';

interface User {
    userType: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    age: number;
    phone: number;
    sessions: Types.ObjectId;
    courses: String[];
    tokens:  String[];
}

//  Create a Schema corresponding to the document interface.
const userSchema  = new Schema<User>({
    userType :   {
        type : String , 
        required : true,
    },
    firstName:   {
        type : String , 
        required : true,
    },
    lastName:   {
        type : String , 
        required : true,
    },
    gender  :  {
        type : String , 
        required : true,
    },
    email : {
      type : String, 
      required : true
    },
    age: {
        type : Number, 
        required : true
      },
    phone : {
        type : Number, 
        required : true
    },
    sessions : { 
        type: Schema.Types.ObjectId,
        ref: 'Session'
    },
    courses: {
        type: [String],
        default: []
    },
    tokens: {
        type: [String],
        default: []
    }
});

//  Create a Model and exporting it.
module.exports  = model<User>('User', userSchema);