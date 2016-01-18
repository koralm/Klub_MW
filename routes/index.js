var express = require('express');
var router = express.Router();

var db = require('../models/db');
var db_save = require('../models/db_save');
var db_get = require('../models/db_get');

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
router.post('/add', function(req, res){
  var  WS_data = req.body;
  db_save.WS_add(WS_data);
  res.send(req.body);
});

/* GET settings/add page. */
router.get('/list', function(req, res, next) {
  db.karty_pracy.find().exec(function (err, karty_pracy) {
    res.render('settings/worksheet/list', karty_pracy);
    //console.log(karty_pracy)
  });
});

/* GET settings/add page. */
router.get('/scheduler', function(req, res, next) {
    res.render('settings/worksheet/scheduler', { title: 'Klub Młodego Wynalazcy'});
});

module.exports = router;

