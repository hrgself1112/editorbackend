const express = require("express")
const router = express.Router()

const { GetRegisterArticle, PostArticleRegister } = require("../controllers/register")



router.get("/" ,  GetRegisterArticle)
router.post("/" ,  PostArticleRegister)

module.exports = router