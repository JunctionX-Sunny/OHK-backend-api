import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import { logger } from "./utils/logger.js";

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: ".env" });
} else if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".production.env" });
}

// environment variables
const PORT = process.env.PORT | 5000;
const HOST = process.env.HOST | "localhost";

const app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/", (req, res, next) => {
  return res.jsonp({
    message: "Mental Health",
    success: true
  });
});

app.listen(PORT, HOST, () => {
  logger.info(`Connecting server on port ${PORT}!`);
});
