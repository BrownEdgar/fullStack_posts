const express = require('express');
const router = express.Router();

const PostsController = require ('../controllers/PostsController');
const controller = new PostsController()

router.get('/', controller.getAllPosts);

module.exports = router;