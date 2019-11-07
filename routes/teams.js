var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams')

/* GET users listing. */
router.get('/', teamsCtrl.index);
router.get('/new', isLoggedIn, teamsCtrl.new);
router.get('/:id', isLoggedIn, teamsCtrl.show);
router.post('/', isLoggedIn, teamsCtrl.create);
router.put('/:id', isLoggedIn, teamsCtrl.update)
router.delete('/:id', isLoggedIn, teamsCtrl.delete);



function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/teams');
  }
module.exports = router;
