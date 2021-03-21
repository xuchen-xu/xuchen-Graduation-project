//router只负责写接口，并指定接口的处理函数

const express  = require('express');
const router = express.Router();
const news = require('../controller/news')

router.get("/news",news.getAllNews)
router.post("/comment",news.commitComment)

module.exports = router;