import mongoose from "mongoose";

const { Schema } = mongoose;

const User = new Schema(
  {
    username: {
      type: String,
      require: true
    },
    password: {
      type: String,
      select: -1
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("users", User);
