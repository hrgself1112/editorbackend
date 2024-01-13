const mongoose = require('mongoose');



const ArticleSchema = mongoose.Schema({
  title:{type:String}
});


// Export the ArticleRegistrationsSchema model
module.exports = {ArticleSchema};
