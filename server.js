// Set up required npm packages & path:

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + ""));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "" }));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require(path.join(__dirname, "./api"))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
