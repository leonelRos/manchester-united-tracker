// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
// var Team = require('../models/team')
// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_SECRET,
//     callbackURL: process.env.GOOGLE_CALLBACK
// },
//     function(accessToken, refreshToken, profile, cb) {
//         Team.findOne({googleId: profile.id}, function(err, team){
//             if(err) return cb(err);
//             if(team) {
//                 cb(null, team);
//             } else {
//                 var newTeam = new Team({
                     
//                 });
//             }
//         } );
//     }
// ));