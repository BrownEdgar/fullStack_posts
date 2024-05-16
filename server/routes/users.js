const express = require('express');
const multer = require('multer');

const router = express.Router();

const UsersController = require('../controllers/UsersController');
const storage = require('../constants/multerStorage');
const controller = new UsersController();

const upload = multer({ storage: storage });

router.get('/', controller.getAllUsers);
router.post('/', upload.single('avatar'), controller.addUser);

module.exports = router;