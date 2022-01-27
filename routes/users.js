var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource, this is susu02 branch 002');
  res.send('respond with a resource, this is susu01 branch');
});

module.exports = router;
