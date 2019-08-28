var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams')

/* GET users listing. */
router.get('/', teamsCtrl.index);
router.get('/new', teamsCtrl.new);
router.get('/:id', teamsCtrl.show);
router.post('/', teamsCtrl.create);


module.exports = router;
