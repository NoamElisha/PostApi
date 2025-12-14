const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Route to create a new post
router.post('/', postsController.createPost);

// Route to get all posts or filter by sender
router.get('/', postsController.getAllPosts);


module.exports = router;