// SHOULD CONTAIN TWO ROUTES:
// A GET Route with the url "/api/friends". This will be used to display a JSON of all possible friends.
var friendsjs = require("app\data\friends.js");

module.exports = function (app) {
    app.get("", function (req, res) {
        res.json(friendsjs);
    });
}


// A POST routes "/api/friends". *This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic*
app.post("/api/friends", function (req, res) {
    console.log(req.body.scores);
    var user = req.body;

    for (var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }