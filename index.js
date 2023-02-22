// Importing node modules
const express = require("express");
const pug = require("pug");
const path = require("path");
 
// Starting the express app
const app = express();
 
// View engine to pug
app.set("view engine", "pug");
 
// Default views
app.set("views", __dirname + "/views");
 
// Serving public assets
app.use(express.static(
    path.join(__dirname + "/public")));
 
// Home page will render "index.pug"
app.get("/", (req, res) => {
    res.render("index");
});
 
// Listening our app on port 3500
app.listen(3500);