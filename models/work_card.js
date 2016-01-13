var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;

//CONNECTION TEST
//Error to db connect
db.on('error', console.error.bind(console, 'connection error:'));

//IF connected
db.once('open', function() {
    console.log("DB OK - connected")
});

var work_template = new Schema({
    uzytkownik: String,
    labolatorium: String,
    temat_doswiadczenia: String,
    sub_temat_doswiadczenia: String,
    odczynniki: String,
    sprzęt: String,
    akcesoria: String,
    instrukcja: String});

var dosw1 = mongoose.model('dosw1', work_template);
var dosw1 = new dosw1({
    zytkownik: 'User1',
    labolatorium: "Genetyki",
    temat_doswiadczenia: "Wykrywanie soli kwasu",
    odczynniki: "A, B, C",
    sprzęt: "X, Y, Z",
    akcesoria: "O, N, T",
    instrukcja: "W dwóch zestawach ponumerowanych (od 1 do 3) probówek znajdują się wodne roztwory soli: Na2CO3, NaCl i NaNO3.  Do jednego zestawu probówek (od 1 do 3) dodać kilka kropel "});

dosw1.save(function(err, dosw1) {
    if (err) return console.error(err);
    //console.dir(User1);
});