var friendsArray = require("../data/friends");


var match = [];

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
    })
}