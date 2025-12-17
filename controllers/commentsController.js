const Comment = require('../model/commentsModel');
const Post = require('../model/postsModel');

const createComment = async (req, res) => {
  try {
    const { postId, content, sender } = req.body;

    const postExists = await Post.exists({ _id: postId });
    if (!postExists) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const comment = await Comment.create({ postId, content, sender });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create comment' });
  }
};


const getAllComments = async (req, res) => {
  try {
    const { postId } = req.query;

    if (postId) {
      const comments = await Comment.find({ postId });
      return res.status(200).json(comments);
    }

    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};


const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);

    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comment' });
  }
};

const updateCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updated = await Comment.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) return res.status(404).json({ error: 'Comment not found' });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update comment' });
  }
};

const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Comment.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Comment not found' });

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete comment' });
  }
};

const getCommentsByPostId = async (req, res) => {
  try {
    const { postId } = req.params;

   
    const postExists = await Post.exists({ _id: postId });
    if (!postExists) return res.status(404).json({ error: 'Post not found' });

    const comments = await Comment.find({ postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments for post' });
  }
};

module.exports = {
  createComment,
  getAllComments,
  getCommentById,
  updateCommentById,
  deleteCommentById,
  getCommentsByPostId,
};