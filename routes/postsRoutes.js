const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Route to create a new post
router.post('/', postsController.createPost);


module.exports = router;