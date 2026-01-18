const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/commentsController');


router.post('/', commentsController.createComment);
router.get('/', commentsController.getAllComments);
router.get('/:id', commentsController.getCommentById);
router.put('/:id', commentsController.updateCommentById);
router.delete('/:id', commentsController.deleteCommentById);

module.exports = router;
