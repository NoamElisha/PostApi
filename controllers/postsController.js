const postsModel = require('../model/postsModel');
//const post = require('../model/postsModel');

// Create a new post
const createPost = async (req, res) => {
    const obj = req.body;
    try {
        const post = await postsModel.create(obj);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};

// Get all posts
const getAllPosts = async (req, res) => {
    try {
        const sender = req.query.sender;
        if (sender) {
            const postsBySender = await postsModel.find({ sender: sender });
            return res.status(200).json(postsBySender);
        }   
        const posts = await postsModel.find();
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }  
};

// Get post by ID
const getPostById = async (req, res) => {
    const postId = req.params.id;
    console.log("Fetching post with ID:", postId);
    try {
        const post = await postsModel.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch post' });
    }
};

// Update post by ID
const updatePostById = async (req, res) => {
    const postId = req.params.id;
    const updateData = req.body;
    try {
        const updatedPost = await postsModel.findByIdAndUpdate(postId, updateData, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
    }
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePostById
};