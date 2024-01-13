const express = require("express")
const router = express.Router()

const ArticleRegistrationsModel  = require("../models/register")

const GetRegisterArticle = async (req, res) => {
    res.send("you are having an get req")
}






const PostArticleRegister = async (req, res) => {
    try {
        const {title}  = req.body
       
    const newUser = new ArticleRegistrationsModel({
     title:title
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' }); 
         
    }
    // res.send(req.body)
}

module.exports = {
    PostArticleRegister, GetRegisterArticle
}