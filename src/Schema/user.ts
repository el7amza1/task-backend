import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  history: [
  
     { type: Schema.Types.ObjectId, ref: 'History' }
    
  ],
});

const User = model("User", userSchema);
export default User;
