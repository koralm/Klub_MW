var db = require('../models/db');


exports.remove_row = function WS_add(row_id){
    console.log(row_id);
    db.karty_pracy.findById(row_id).remove().exec();
}










