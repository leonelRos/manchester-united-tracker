var User = require('../models/user');

module.exports = {
 index
};
//var sortKey = req.query.sort || ‘name’;
function index(req, res) {
 res.render('/index', {
        //   user,
   user: req.user,
   name: req.query.name
   //   sortKey
 });
}
