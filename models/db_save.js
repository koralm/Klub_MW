var db = require('../models/db');


exports.WS_add = function WS_add(data){

    console.log(data.WS_title)
    new db.karty_pracy({
        temat_doswiadczenia: data.WS_title,
        sub_temat_doswiadczenia: data.WS_subtitle,
        odczynniki: data.WS_reagent,
        sprzęt: data.WS_equipment,
        akcesoria: data.WS_accesories,
        instrukcja: data.WS_description,
        labolatorium: data.WS_labolatory,
        czas_trwania: data.WS_duration_time,
        uzytkownik: data.WS_author}).save()};