var db = require('../models/db');


exports.WS_add = function WS_add(data){

    console.log(data)
    new db.karty_pracy({
        temat_doswiadczenia: data.WS_title,
        sub_temat_doswiadczenia: data.WS_subtitle,
        odczynniki: data.WS_reagent.split(','),
        sprzęt: data.WS_equipment.split(','),
        akcesoria: data.WS_accesories.split(','),
        instrukcja: data.WS_description,
        labolatorium: data.WS_labolatory,
        czas_trwania: data.WS_duration_time,
        obrazki: data.WS_pictures,
        uzytkownik: data.WS_author}).save()};