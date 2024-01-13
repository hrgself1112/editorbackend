const mongoose = require("mongoose")
const ArticleRegistrationsSchema = require("../schemas/articles")

const ArticleRegistrationsModel = require("Articles"  , ArticleRegistrationsSchema)

module.exports = {
    ArticleRegistrationsModel
}