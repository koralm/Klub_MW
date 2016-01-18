var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;

//CONNECTION TEST
//Error to db connect
db.on('error', console.error.bind(console, 'connection error:'));

//IF connected
db.once('open', function() {
    console.log("DB OK - connected")
})



var karta_pracy = new Schema({
    temat_doswiadczenia: String,
    sub_temat_doswiadczenia: String,
    odczynniki: String,
    sprzęt: String,
    akcesoria: String,
    instrukcja: String,
    uzytkownik: String,
    labolatorium: String,
    czas_trwania: Number,
    stan_aktywnosci: { type: Number, default: 0 },
    updated: { type: Date, default: Date.now},
});

var karty_pracy = mongoose.model('karty_prac', karta_pracy);

exports.karty_pracy = karty_pracy;