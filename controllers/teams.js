var Team = require('../models/team');

module.exports = {
   create,
   new: newTeam,
   index,
   show,
   delete: deleteTeam
}
function deleteTeam(req, res, next) {
    Team.findOne({'comments._id': req.params.id}, function(err, team) {
        team.comments.id(req.params.id).remove();
        team.save(function(err) {
        res.render('teams/show', {header: 'Player Profile', team})
        });
    });
}

function show(req, res) {
    Team.findById(req.params.id, function(err, team){
        res.render('teams/show', {header: 'Player Profile', team})
    });
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
        res.render('teams/index', {header: 'All Players', teams});
    });
}

function newTeam (req, res) {
    res.render('teams/new', {header: 'Add Players'});
}
