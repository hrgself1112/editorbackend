const express = require("express")
const router = express.Router()

const { GetRegisterArticle, PostArticleRegister , GetRegisterArticlebyID ,DownloadRegisterArticlesByID, DeleteRegisterArticlesByID } = require("../controllers/register")



router.get("/" ,  GetRegisterArticle)
router.get("/:id" ,  GetRegisterArticlebyID)
router.get("/download/:id" ,  DownloadRegisterArticlesByID)
router.post("/" ,  PostArticleRegister)
router.delete("/:id" ,  DeleteRegisterArticlesByID)

module.exports = router