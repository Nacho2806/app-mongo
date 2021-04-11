const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    nombre:{
        type:String, 
        trim: true
    },
    apellido:{
        type:String, 
        trim: true
    },
    juego:{
        type:String, 
        trim: true
    },
});
module.exports = mongoose.model("Player", playerSchema);