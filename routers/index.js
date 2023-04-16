import express from "express";

import articleRouter from "./article.route.js";

const app = express();

export default function (app) {
  app.use("/api/article", articleRouter);
}
