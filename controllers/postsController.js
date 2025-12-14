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


module.exports = {
    createPost,
    getAllPosts
};