const express  = require("express")
const router = express.Router()


const ArticleRegister = async (req, res) =>{
    const data = req.body;
  console.log(data);
} 

const GetRegisterArticle = async  (req, res) =>{
    res.send("you are having an get req")

}

module.exports={
    ArticleRegister   , GetRegisterArticle
}