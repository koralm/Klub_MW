var express = require('express');
var router = express.Router();

var db_get = require('../models/db_get');
var db = require('../models/db');
var db_save = require('../models/db_save');
db_get.WS_load()


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Klub Młodego Wynalazcy'});
});

/* GET settings/options page. */
router.get('/options', function(req, res, next) {
  res.render('settings/options', { title: 'Klub Młodego Wynalazcy'});
});

/* GET settings/add page. */
router.get('/add', function(req, res, next) {
  res.render('settings/worksheet/add', { title: 'Klub Młodego Wynalazcy'});
});



/* GET settings/add page. */
router.get('/list', function(req, res, next) {
  res.render('settings/worksheet/list', { title: 'Klub Młodego Wynalazcy', kon: db_get.WS_load()});
});

router.post('/add', function(req, res){
  var  WS_data = req.body;
  db_save.WS_add(WS_data);
  db_get.WS_load()
  res.send(req.body);
});

/* GET settings/add page. */
router.get('/calendar', function(req, res, next) {
    res.render('settings/worksheet/calendar', karty_pracy);
});

/* GET settings/add page. */
router.get('/scheduler', function(req, res, next) {
    res.render('settings/worksheet/scheduler', { title: 'Klub Młodego Wynalazcy'});
});

module.exports = router;

