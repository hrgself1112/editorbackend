const express = require("express")
const router = express.Router()

const ArticleRegistrationsModel  = require("../models/register")

const GetRegisterArticle = async (req, res) => {
    res.send("you are having an get req")
}






const PostArticleRegister = async (req, res) => {
    console.log(req.body);
    try {
        const {title,description,keywords,url,h1,content,imageurl,imagealt,path,faq,faqlasttext,if_not_lang,processedContentNAMP,processedContentAMP,processedFaqNAMP,processedFaqAMP,AuthorProfile,schemaProfile}  = req.body
       
    const newUser = new ArticleRegistrationsModel({
                title:title,
                description:description,
                keywords:keywords,
                url:url,
                h1:h1,
                content:content,
                imageurl:imageurl,
                imagealt:imagealt,
                path:path,
                faq:faq,
                faqlasttext:faqlasttext,
                if_not_lang:if_not_lang,
                processedContentNAMP:processedContentNAMP,
                processedContentAMP:processedContentAMP,
                processedFaqNAMP:processedFaqNAMP,
                processedFaqAMP:processedFaqAMP,
                AuthorProfile:AuthorProfile,
                schemaProfil:schemaProfile
      });
  
      // Save the user to the Rdatabase
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' }); 
         
    }
}

module.exports = {
    PostArticleRegister, GetRegisterArticle
}