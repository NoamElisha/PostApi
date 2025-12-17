const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;
