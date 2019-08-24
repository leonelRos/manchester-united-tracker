var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

// var db = mongoose.connection;

mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
   });
   
module.exports = mongoose;
