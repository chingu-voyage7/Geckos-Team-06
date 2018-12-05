const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  birth: {
    type: Date
  },
  image: {
    type: String
  },
  about: {
    type: String
  },
  podcastSubscribed: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Podcasts'
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema)