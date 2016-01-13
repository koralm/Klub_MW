var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Klub Młodego Wynalazcy', dupa: 5 });
});

module.exports = router;
