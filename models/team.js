var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    name: String,
    email: String,
    favPlayer: [String],
    // googleId: String    
});

module.exports = mongoose.model('Team', teamSchema);