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

module.exports = {
    createPost
};