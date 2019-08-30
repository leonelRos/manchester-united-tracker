var Team = require('../models/team');
var User = require('../models/user');

module.exports = {
   create,
   new: newTeam,
   index,
   show,
   delete: deleteTeam,
   update
}
function update(req, res) {
    Team.findById(req.params.id, function(err, teams){
        teams.playerName = req.body.newName;
        teams.save(function(err){
            if (err) return res.redirect('/teams');
            res.redirect(`/teams/${req.params.id}`);
        })
    })
}
function deleteTeam(req, res, next) {
    Team.findOne({'comments._id': req.params.id}, function(err, team) {

        team.comments.id(req.params.id).remove();
        team.save(function(err) {
        res.render('teams/show', {header: 'Player Profile', team, user: req.user})
        });
    });
}

function show(req, res) {
    Team.findById(req.params.id, function(err, team){
        res.render('teams/show', {header: 'Player Profile', team, user: req.user})
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
        res.render('teams/index', {header: 'All Players', teams, user: req.user});
    });
}

function newTeam (req, res) {
    res.render('teams/new', {header: 'Add Players', user: req.user});
}
