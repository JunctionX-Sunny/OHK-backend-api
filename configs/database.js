import mongoose from "mongoose";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function connectDB(uri) {
  try {
    mongoose.connect(uri, {
      tlsCAFile: path.join(__dirname, `rds-combined-ca-bundle.pem`)
    });
  } catch (err) {
    console.log(error);
  }
}
