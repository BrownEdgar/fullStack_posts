var express = require('express');
var router = express.Router();
const multer = require('multer')
const path = require('path')
const UsersAuthController = require ('../controllers/UsersAuthController');
const controller = new UsersAuthController()

const storage = multer.diskStorage({
destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix+path.extname(file.originalname))
    }
})
  
const upload = multer({ storage: storage})

router.post('/', upload.single('avatar'),controller.addUser)

module.exports = router;