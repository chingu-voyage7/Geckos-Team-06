const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema({
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
})

const Episode = mongoose.model('Episode', EpisodeSchema)

module.exports = Episode;