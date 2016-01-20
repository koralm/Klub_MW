var express = require('express');
var router = express.Router();

var db_get = require('../models/db_get');
var db = require('../models/db');
var db_save = require('../models/db_save');
var db_remove = require('../models/db_remove');
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


/*>>>>>>>>>>>>>>LIST<<<<<<<<<<<<<<<*/
/* GET LIST. */
router.get('/list', function(req, res, next) {
  db_get.WS_load();
  res.render('settings/worksheet/list', { title: 'Klub Młodego Wynalazcy', WS_data: db_get.WS_load()});
});

/*POST LIST REMOVE*/
router.post('/list', function(req, res){
    var row_data = req.body;
    db_remove.remove_row(row_data._id);
    res.send(req.body);
});


var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


/*>>>>>>>>>>>>>>ADD<<<<<<<<<<<<<<<*/
router.post('/add', upload.single( 'file' ), function(req, res){
  var  WS_data = req.body.WS_data;
  db_save.WS_add(WS_data);
  db_get.WS_load();
  console.log(WS_data);
  console.log(req.files);
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

/* GET settings/add page. */
router.get('/BioChemD', function(req, res, next) {
    res.render('labolatory/BioChemD', { title: 'Klub Młodego Wynalazcy'});
});


/*
router.post('/add', upload.single( 'file' ), function(req, res){
    console.log(req.body);
    console.log(req.files);
    res.send(req.body);
});*/

module.exports = router;

