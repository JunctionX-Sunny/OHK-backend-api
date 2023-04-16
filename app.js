import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import { logger } from "./utils/logger.js";
import Router from "./routers/index.js";
import connectDB from "./configs/database.js";

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: ".env" });
} else if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".production.env" });
}

// environment variables
const PORT = process.env.PORT | 5000;
const HOST = process.env.HOST | "localhost";

const app = express();

Router(app);

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/", (req, res, next) => {
  return res.jsonp({
    message: "Mental Health",
    success: true
  });
});

app.listen(PORT, HOST, async () => {
  try {
    connectDB(process.env.MONGODB_URI);
    logger.info(`Connecting database successfully!`);
    logger.info(`Connecting server on port ${PORT}!`);
  } catch (error) {
    process.exit(1);
  }
});
