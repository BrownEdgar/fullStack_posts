const express = require('express');
const multer = require('multer');
const router = express.Router();

const PostsController = require('../controllers/PostsController');
const storage = require('../constants/multerStorage');
const controller = new PostsController()

const upload = multer({ storage: storage });

router.get('/', controller.getAllPosts);
router.post('/', upload.single('avatar'), controller.addPost);

module.exports = router;