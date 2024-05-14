const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
  },
  description: {
    type: String,
    required: [true, "Please, short description!"],
  },
  longDesc: {
    type: String,
    required: [true, "Long description to post!"],
  },
  image: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model('post', postSchema);