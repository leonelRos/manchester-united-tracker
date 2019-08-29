var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams')

/* GET users listing. */
router.get('/', teamsCtrl.index);
router.get('/new', teamsCtrl.new);
router.get('/:id', teamsCtrl.show);
router.post('/', teamsCtrl.create);
router.delete('/:id', teamsCtrl.delete);
// router.put('/:id/edit', teamsCtrl.update)


module.exports = router;
