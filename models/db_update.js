var db = require('../models/db');

exports.WS_update = function WS_update(data) {


    db.karty_pracy.findById(data._id, function (err, find_WS) {
        if (err) throw err;

        find_WS.temat_doswiadczenia = data.WS_title;
        find_WS.sub_temat_doswiadczenia = data.WS_subtitle;
        find_WS.odczynniki = data.WS_reagent.split(','),
        find_WS.sprzęt = data.WS_equipment.split(','),
        find_WS.akcesoria = data.WS_accesories.split(','),
        find_WS.instrukcja = data.WS_description;
        find_WS.labolatorium = data.WS_labolatory;
        find_WS.czas_trwania = data.WS_duration_time;
        find_WS.stan_aktywnosci = data.WS_active;

        find_WS.save(function (err) {
            if (err) throw err;

        });

        db.karty_pracy.find().exec(function (err, karty_pracy) {
            all_WS = karty_pracy;
        });
    });
};
