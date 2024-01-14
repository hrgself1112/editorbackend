const express = require("express")
const router = express.Router()
const path  = require("path")
const fs  = require("fs")
const archiver = require("archiver")

const ejs = require('ejs');
const ArticleRegistrationsModel = require("../models/register")

const GetRegisterArticle = async (req, res) => {
    const users = await ArticleRegistrationsModel.find()
    res.json(users);
}

const GetRegisterArticlebyID = async (req, res) => {
    const id = "65a2bc6ff24bfb9dbe196fcd";
    try {
        const user = await ArticleRegistrationsModel.findById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const PostArticleRegister = async (req, res) => {
    console.log(req.body);
    try {
        const { title, description, keywords, url, h1, content, imageurl, imagealt, path, faq, faqlasttext, if_not_lang, processedContentNAMP, processedContentAMP, processedFaqNAMP, processedFaqAMP, AuthorProfile, schemaProfile } = req.body

        const newUser = new ArticleRegistrationsModel({
            title: title,
            description: description,
            keywords: keywords,
            url: url,
            h1: h1,
            content: content,
            imageurl: imageurl,
            imagealt: imagealt,
            path: path,
            faq: faq,
            faqlasttext: faqlasttext,
            if_not_lang: if_not_lang,
            processedContentNAMP: processedContentNAMP,
            processedContentAMP: processedContentAMP,
            processedFaqNAMP: processedFaqNAMP,
            processedFaqAMP: processedFaqAMP,
            AuthorProfile: AuthorProfile,
            schemaProfil: schemaProfile
        });

        // Save the user to the Rdatabase
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });

    }
}

const DeleteRegisterArticlesByID = async (req, res) => {
    const ids  = req.params.id.split(",")
    console.log(ids);
    try {
        // Find and remove articles by multiple IDs
        const deletedArticles = await ArticleRegistrationsModel.deleteMany({ _id: { $in: ids } });

        if (!deletedArticles.deletedCount) {
            return res.status(404).json({ error: 'No articles found for the provided IDs' });
        }

        res.json({ message: 'Articles deleted successfully', deletedArticles });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



const DownloadRegisterArticlesByID = async (req, res) => {
  
    const ids  = req.params.id.split(",")


  const jsonData = await ArticleRegistrationsModel.find({ _id: { $in: ids } });

  const outputDirectory = path.join(__dirname, 'generatedFiles');
  const outputDirectoryAMP = path.join(__dirname, 'generatedFiles', 'amp');

  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  if (!fs.existsSync(outputDirectoryAMP)) {
    fs.mkdirSync(outputDirectoryAMP, { recursive: true });
  }

  const archive = archiver('zip', {
    zlib: { level: 9 }
  });

  archive.on('error', (err) => {
    res.status(500).send({ error: err.message });
  });

  res.attachment('generatedFiles.zip');
  archive.pipe(res);

  for (let i = 0; i < jsonData.length; i++) {

    const data = jsonData[i];
    
    console.log(data)
    
    const filename = data.url.replace(/[^\w\s.-]/gi, '');

    // Render the EJS template with data
    const renderedHTML = await ejs.renderFile(path.join(__dirname, '../views/creation/template.ejs'), data);
    const renderedHTMLAMP = await ejs.renderFile(path.join(__dirname, '../views/creation/amptemplate.ejs'), data);

    // Write the rendered HTML content to ASP files with the correct extension
    fs.writeFileSync(path.join(outputDirectory, `${filename}.asp`), renderedHTML);
    fs.writeFileSync(path.join(outputDirectoryAMP, `${filename}.asp`), renderedHTMLAMP);

    // Add ASP files to the ZIP archive
    archive.file(path.join(outputDirectory, `${filename}.asp`), { name: `generatedFiles/${filename}` });
    archive.file(path.join(outputDirectoryAMP, `${filename}.asp`), { name: `generatedFiles/amp/${filename}` });
  }

  archive.finalize();
};


module.exports = {
    PostArticleRegister, GetRegisterArticle , GetRegisterArticlebyID , DeleteRegisterArticlesByID,DownloadRegisterArticlesByID
}


