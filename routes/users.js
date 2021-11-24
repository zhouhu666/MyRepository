var express = require('express');
var router = express.Router();

/* GET users listing. 3443454 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource from susu 11-24 10:37');
});

module.exports = router;
