var express = require('express');
var router = express.Router();
var passport = require('passport');
// var passport = require('passport');

router.get('/', function(req, res) {
  res.redirect('/teams');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/teams',
    failureRedirect : '/teams'
  }
));
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/teams');
});


module.exports = router;
