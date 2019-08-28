var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    playerName: 
    {
        type: String,
        required: true,
    },
    position: 
    {
        type: String,
        // enum:['GK', 'DEF', 'CAM', 'FW']
    },
    age: 
    {
        type: Number,
        min: 16,
        max: 50,
    },
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