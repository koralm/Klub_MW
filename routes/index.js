var express = require('express');
var router = express.Router();

var db_get = require('../models/db_get');
var db = require('../models/db');
var db_save = require('../models/db_save');
var db_remove = require('../models/db_remove');
var db_update = require('../models/db_update');
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
    db.karty_pracy.find().exec(function (err, karty_pracy) {
        res.render('settings/worksheet/list', { title: 'Klub Młodego Wynalazcy', WS_data: karty_pracy});
    });
});

/*POST LIST REMOVE*/
router.post('/list', function(req, res){
    var row_data = req.body;
    db_remove.remove_row(row_data._id);
    db_get.WS_load();
    res.send(req.body);
});

router.post('/list_update', function(req, res){
    var update_data = req.body;
    db_update.WS_update(update_data);
    res.send(req.body);
});


var multer  = require('multer')
var upload = multer({ dest: 'uploads/WS_pictures' })


/*>>>>>>>>>>>>>>ADD<<<<<<<<<<<<<<<*/
router.post('/add_pic', upload.single( 'file' ), function(req, res){
  db_get.WS_load();
  console.log(JSON.stringify(req.file.filename));
  res.send(JSON.stringify(req.file.filename));
});


/*>>>>>>>>>>>>>>ADD<<<<<<<<<<<<<<<*/
router.post('/add', function(req, res){
    var WS_data = req.body.WS_data;
    db_save.WS_add(WS_data);
    db_get.WS_load();
    res.send(req.body);
});



/* GET settings/add page. */
router.get('/calendar', function(req, res, next) {
    res.render('settings/worksheet/calendar', { title: 'Klub Młodego Wynalazcy'});
});

/* GET settings/add page. */
router.get('/scheduler', function(req, res, next) {
    res.render('settings/worksheet/scheduler', { title: 'Klub Młodego Wynalazcy'});
});

/* LAB BIO GET */
router.get('/BioChemD', function(req, res, next) {
    db.karty_pracy.find({$and: [{ labolatorium: "BioChem Duże" }, {stan_aktywnosci: "1"}]}).exec(function (err, karty_pracy) {
        res.render('labolatory/PracGen', { title: 'Klub Młodego Wynalazcy', WS_data: karty_pracy});
    });
});

/* LAB BIOM GET */
router.get('/BioChemM', function(req, res, next) {
    db.karty_pracy.find({$and: [{ labolatorium: "BioChem Małe" }, {stan_aktywnosci: "1"}]}).exec(function (err, karty_pracy) {
        res.render('labolatory/PracGen', { title: 'Klub Młodego Wynalazcy', WS_data: karty_pracy});
    });
});

/* LAB FIZCHEM GET */
router.get('/FizChem', function(req, res, next) {
    db.karty_pracy.find({$and: [{ labolatorium: "FizChem PCA" }, {stan_aktywnosci: "1"}]}).exec(function (err, karty_pracy) {
        res.render('labolatory/PracGen', { title: 'Klub Młodego Wynalazcy', WS_data: karty_pracy});
    });
});

/* LAB EL_CYB GET */
router.get('/Elektr_Cyber', function(req, res, next) {
    db.karty_pracy.find({$and: [{ labolatorium: "Elektr-Cyber" }, {stan_aktywnosci: "1"}]}).exec(function (err, karty_pracy) {
        res.render('labolatory/PracGen', { title: 'Klub Młodego Wynalazcy', WS_data: karty_pracy});
    });
});

/* LAB DM GET */
router.get('/Dziec', function(req, res, next) {
    db.karty_pracy.find({$and: [{ labolatorium: "Dzieci Młodsze" }, {stan_aktywnosci: "1"}]}).exec(function (err, karty_pracy) {
        res.render('labolatory/PracGen', { title: 'Klub Młodego Wynalazcy', WS_data: karty_pracy});
    });
});

/* LAB BIOM GET */
router.get('/Fiz_OZE', function(req, res, next) {
    db.karty_pracy.find({$and: [{ labolatorium: "Fizyki i OZE" }, {stan_aktywnosci: "1"}]}).exec(function (err, karty_pracy) {
        res.render('labolatory/PracGen', { title: 'Klub Młodego Wynalazcy', WS_data: karty_pracy});
    });
});

/* PRAC GENETYKI GET*/
router.get('/PracGen', function(req, res, next) {
    db.karty_pracy.find({$and: [{ labolatorium: "Prac Genetyki" }, {stan_aktywnosci: "1"}]}).exec(function (err, karty_pracy) {
        res.render('labolatory/PracGen', { title: 'Klub Młodego Wynalazcy', WS_data: karty_pracy});
    });
});

/* LAB BIOM GET */
router.get('/RK_INV', function(req, res, next) {
    db.karty_pracy.find({$and: [{ labolatorium: "Prac RK_INV" }, {stan_aktywnosci: "1"}]}).exec(function (err, karty_pracy) {
        res.render('labolatory/PracGen', { title: 'Klub Młodego Wynalazcy', WS_data: karty_pracy});
    });
});

var AWS_data;

router.post('/WS_load', function(req, res){
    AWS_data = req.body;
    res.send(req.body);
});

router.get('/Karta_pracy', function(req, res, next) {
    res.render('actual_WS', { title: 'Klub Młodego Wynalazcy', WS_data: AWS_data});
});



/*
router.post('/BioChemD', upload.single( 'file' ), function(req, res){
    //console.log(req.body);
    //console.log(req.files);
    res.send(req.body);
});*/

module.exports = router;

