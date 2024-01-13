const mongoose = require('mongoose');



const ArticleSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  keywords: { type: String },
  url: { type: String },
  h1: { type: String },
  content: { type: String },
  imageurl: { type: String },
  imagealt: { type: String },
  path: { type: String },
  faq: { type: String },
  faqlasttext: { type: String },
  if_not_lang: { type: String },
  processedContentNAMP: { type: String },
  processedContentAMP: { type: String },
  processedFaqNAMP: { type: String },
  processedFaqAMP: { type: String },
  AuthorProfile: { type: String },
  schemaProfile: { type: String }
});


// Export the ArticleRegistrationsSchema model
module.exports = { ArticleSchema };

