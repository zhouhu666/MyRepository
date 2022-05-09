var express = require('express');
var router = express.Router();

/* GET users listing. susu04*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource, this is susu04 branch,do you know');
});

module.exports = router;
