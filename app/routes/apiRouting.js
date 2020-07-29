// SHOULD CONTAIN TWO ROUTES:
// A GET Route with the url "/api/friends". This will be used to display a JSON of all possible friends.
var friendsjs = require("../data/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsjs);
    });



// A POST routes "/api/friends". *This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic*
app.post("/api/friends", function (req, res) {
    console.log(req.body.scores);
    
    var bestMatch = {
        name: "",
        photo: "",
        scores: 1000
    };

    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
        totalDifference = 0;

        for (var s = 0; s < friendsjs[i].scores[s]; s++) {
            totalDifference += Math.abs(parseInt(userScores[s]) - parseInt(friendsjs[i].scores[s]));
            if (totalDifference <= bestMatch.scores) {
                bestMatch.name = friendsjs[i].name;
                bestMatch.photo = friendsjs[i].photo;
                bestMatch.scores = totalDifference;
            }
        }
    }

    friendsjs.push(userData);
    res.json(bestMatch);

});
}
