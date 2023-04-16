import mongoose from "mongoose";

const { Schema } = mongoose;

const Article = new Schema(
  {
    title: {
      type: String,
      require: true
    },
    description: {
      type: String
    },
    content: {
      type: String,
      require: true
    },
    tags: {
      type: [
        {
          type: String,
          enum: ["NORMAL", "PTSD", "SCHIZOPHRENIA", "BIPOLAR", "ANXIETY"]
        }
      ],
      require: true,
      default: ["NORMAL"]
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("articles", Article);
