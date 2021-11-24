var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource,this is susu01 test 2021-11-24 15:13');
});

module.exports = router;
