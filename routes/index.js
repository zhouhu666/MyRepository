var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express susu01 susu01 susu01 susu02' });
});

module.exports = router;
