const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const urls_schema = new mongoose.Schema({
  OriginalUrl: {
    type: String,
    required: "url is required",
    unique: true,
  },
  ShortUrl: {
    type: String,
    required: "shorturl cannot be empty",
    unique: true,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

urls_schema.plugin(uniqueValidator);
module.exports = mongoose.model("Urls", urls_schema);
