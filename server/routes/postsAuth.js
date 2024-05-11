const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const PostsAuthController = require ('../controllers/PostsAuthController');
const controller = new PostsAuthController();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        console.log(file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage});

router.post('/', upload.single('avatar'), controller.addPost);

module.exports = router;