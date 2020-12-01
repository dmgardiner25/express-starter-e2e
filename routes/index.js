var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Harald\'s Codespace Test' });
});

router.get('/test', function(req, res, next) {
  res.render('index', { title: 'E2E test route' });
});

module.exports = router;
