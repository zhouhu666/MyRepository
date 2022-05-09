var express = require('express');
var router = express.Router();
/* GET home page.susu02 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express susu02 branch, do you know?' });
});

module.exports = router;
