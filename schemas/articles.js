const mongoose = require('mongoose');

// Define the User schema
const ArticleSchema = new mongoose.Schema({
  title:{type:String}
});

// Create a User model from the schema
const ArticleRegistrationsSchema = mongoose.model('Register', ArticleSchema);

// Export the ArticleRegistrationsSchema model
module.exports = ArticleRegistrationsSchema;
