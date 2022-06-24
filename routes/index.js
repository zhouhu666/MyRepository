var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express this is feature susu02' });
});

router.get('/feature', function(req, res, next) {
  res.render('index', { title: 'Express this is feature susu02' });
});
router.get('/feature', function(req, res, next) {
  res.render('index', { title: 'Express this is feature susu02' });
});

module.exports = router;
