var db = require('../models/db');

var all_WS = "dupa";

exports.WS_load = function WS_load() {
    db.karty_pracy.find().exec(function (err, karty_pracy) {
        exports.dupa = karty_pracy;
        console.log(karty_pracy)
        console.log(karty_pracy.instrukcja)
    });
}
