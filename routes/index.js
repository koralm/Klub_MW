var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Klub Młodego Wynalazcy', dupa: 5 });
});

/* GET settings/options page. */
router.get('/options', function(req, res, next) {
  res.render('settings/options', { title: 'Klub Młodego Wynalazcy', dupa: 5 });
});

/* GET settings/options/add page. */
router.get('/add', function(req, res, next) {
  res.render('settings/worksheet/add', { title: 'Klub Młodego Wynalazcy', dupa: 5 });
});

module.exports = router;
