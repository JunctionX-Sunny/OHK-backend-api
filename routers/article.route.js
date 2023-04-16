import express from "express";

const router = express.Router();

import ArticleController from "../controllers/ArticleController.js";

const { listVideo, listDocument, loadDocument } = new ArticleController();

router.get("/document", listDocument);
router.get("/video", listVideo);
router.get("/load/document", loadDocument);

export default router;
