var Team = require('../models/team');

module.exports = {
    create,
   new: newTeam
}

function create (req, res){
    var team = new Team(req.body);
    team.save(function(err){
        if(err) return res.render('teams/new');
        console.log(team);
        res.redirect('/teams/new');
    })
}
// function index(req, res, next) {
//     res.render('teams/index', {
//         teams,
//         user: req.user,
//         name: req.query.name,
//         sortkey
//     })
// }

function newTeam (req, res) {
    res.render('teams/new');
}