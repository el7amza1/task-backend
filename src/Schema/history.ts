import mongoose from "mongoose";
const { Schema, model } = mongoose;

const historySchema = new Schema({
  valid: Boolean,
  local_format: String,
  intl_format: String,
  location: String,
  country: String,
  carrier: String,
  line_ype: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

const History = model("History", historySchema);
export default History;
