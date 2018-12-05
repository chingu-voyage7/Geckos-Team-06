const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  duration: {
    type: String
  },
  url: {
    type: String
  }
});

module.exports = mongoose.model("Episode", EpisodeSchema);
