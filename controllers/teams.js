var Team = require('../models/team');

module.exports = {
    create,
   new: newTeam,
   index
}

function create (req, res){
    var team = new Team(req.body);
    team.save(function(err){
        if(err) return res.render('teams/new');
        console.log(team);
        res.redirect('/teams');
    })
}
function index(req, res) {
   Team.find({}, function(err, teams){
       res.render('teams/index', {teams});
    });
}

function newTeam (req, res) {
    res.render('teams/new');
}