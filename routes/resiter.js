const express = require("express")
const router = express.Router()

const { GetRegisterArticle, ArticleRegister } = require("../controllers/register")



router.get("/" ,  GetRegisterArticle)
router.post("/" ,  ArticleRegister)

  module.exports = router