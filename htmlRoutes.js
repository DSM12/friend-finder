// Should include 2 routes: A GET Route to "/survey" which should display the survey page.
var path = require("path");

module.exports = function (app) {

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "app\public\survey.html"));
  });

  // & A default, catch-all route that leads to "home.html" which displays the home page.
  app.use("*", function (req, res) {
    res.sendFile(path.join(__dirname, "app\public\home.html"));
  });

}; 