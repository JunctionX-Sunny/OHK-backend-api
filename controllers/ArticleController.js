import BaseError from "../handlers/BaseError.js";
import S3Service from "../cloud/S3Service.js";
import Article from "../models/Article.model.js";

export default class ArticleController {
  listDocument = async (req, res, next) => {
    try {
      const s3Service = new S3Service();
      const data = await s3Service.getData("datamovies", "MOCK_DATA.json");

      return res.status(200).jsonp({
        data: data,
        success: true,
        message: "Get list articles successfully."
      });
      // const article = await Article.find({});
      // return res.status(200).jsonp({
      //   success: true,
      //   message: "Get list articles successfully.",
      //   articles: article
      // });
    } catch (error) {
      next(new BaseError(error.message, 500));
    }
  };

  loadDocument = async (req, res, next) => {
    try {
      const s3Service = new S3Service();
      const data = await s3Service.getData("datamovies", "MOCK_DATA.json");
      const kindOf = ["NORMAL", "PTSD", "SCHIZOPHRENIA", "BIPOLAR", "ANXIETY"];
      const articles = [];

      for (let i = 0; i < data.length; ++i) {
        articles.push({
          title: data[i][0],
          description: data[i][1],
          content: data[i][2],
          tags: kindOf[Math.floor(Math.random() * kindOf)]
        });
      }
      await Article.insertMany(articles);
      return res.jsonp({
        message: "Load data successfully.",
        success: true
      });
    } catch (error) {
      next(new BaseError(error.message, 500));
    }
  };

  listVideo = async (req, res, next) => {
    try {
      const s3Service = new S3Service();
      const data = await s3Service.getData("datamovies", "movies.csv");

      return res.status(200).jsonp({
        data: data,
        success: true,
        message: "Get list articles successfully."
      });
    } catch (error) {
      next(new BaseError(error.message, 500));
    }
  };

  search = async (req, res, next) => {
    try {
      const { keyword } = req.query;
    } catch (error) {
      next(new BaseError(error.message, 500));
    }
  };
}
