import BaseError from "../handlers/BaseError.js";
import { logger } from "./logger.js";

export const errorResponse = (err, req, res, next) => {
  const { message, statusCode } = err;
  const error = new BaseError(message, statusCode);

  logger.error(`${message} - Status: ${statusCode}`);

  return res.status(statusCode | 500).jsonp({
    success: false,
    message: error.message
  });
};
