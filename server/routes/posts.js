const express = require('express');
const multer = require('multer');
const router = express.Router();

const PostsController = require('../controllers/PostsController');
const storage = require('../constants/multerStorage');
const controller = new PostsController();

const upload = multer({ storage: storage });

router.get('/:id', controller.getPostById);
router.get('/', controller.getAllPosts);
router.post('/', upload.single('avatar'), controller.addPost);
router.delete('/:id', controller.deletePostById);

module.exports = router;