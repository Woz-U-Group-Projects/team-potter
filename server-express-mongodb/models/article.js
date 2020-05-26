"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
},
article: {
    type: String,
    required: true
},
authorname: {
    type: String,
    required: true
  },
timestamp: {type: Date, default: Date.now},
category: {
  type: String,
  required: true
}
});

// Duplicate the ID field.
ArticleSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ArticleSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("Article", ArticleSchema);
