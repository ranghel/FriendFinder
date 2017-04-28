// DEPENDENCIES
// Required modules
var express = require("express");
var bodyParser = require("body-parser");

// Express configuration
var app = express();

// Set port
var PORT = process.env.PORT || 3000;

// Setup data parsing
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true} ));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Point server to route files
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// Start listener
app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
});