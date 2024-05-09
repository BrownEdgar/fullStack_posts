var express = require('express');
var router = express.Router();


const users = ['Rachel Green', 'Monica Geller', 'Phoebe Buffay', 'Joey Tribbiani', 'Chandler Bing', 'Ross Geller'];

router.get('/', function (req, res, next) {
  res.json({ users })
});

module.exports = router;
