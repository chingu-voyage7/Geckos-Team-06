const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PodcastSchema = new Schema({
  name: {
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
  url: {
    type: String,
    required: true,
    trim: true
  },
  rss: {
    type: String,
    required: true,
    trim: true
  },
  episodes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Episode"
  }
});

module.exports = mongoose.model("Podcasts", PodcastSchema);
