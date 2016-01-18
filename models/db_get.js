var db = require('../models/db');

var all_WS

exports.WS_load = function WS_load() {

    db.karty_pracy.find().exec(function (err, karty_pracy) {
        all_WS = karty_pracy;
    });
    return(all_WS)
}

