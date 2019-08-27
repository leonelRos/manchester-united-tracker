var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams')

/* GET users listing. */
router.get('/', teamsCtrl.index);
router.get('/new', teamsCtrl.new);
router.post('/', teamsCtrl.create);
// router.get('/new', function(req, res, next) {
//   res.render('teams');
// });

module.exports = router;
