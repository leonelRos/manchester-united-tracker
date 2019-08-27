var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    playerName: String,
    position: String,
    age: Number,
    pace: 
    {
        type: Number,
        min: 10,
        max: 99
    }  
}, {
   timestamps: true 
});

module.exports = mongoose.model('Team', teamSchema);