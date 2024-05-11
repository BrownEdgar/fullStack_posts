var express = require('express');
var router = express.Router();

const UsersController = require ('../controllers/UsersController');
const controller = new UsersController()

router.get('/', controller.getAllUsers);

module.exports = router;