// Importing node modules
const express = require("express");
const pug = require("pug");
const path = require("path");
 
// Starting the express router
const router = express.Router();
 
// View engine to pug
router.set("view engine", "pug");
 
// Default views
router.set("views", __dirname + "/views");
 
// Serving public assets
router.use(express.static(
    path.join(__dirname + "/public")));
 
// Home page will render "index.pug"
router.get("/", (req, res) => {
    res.render("index");
});

//Creating contact
router.get('/', function(req, res, next){
    res.render('addcon', {title: 'Add Contact'});
});
 
// Listening our app on port 3500
router.listen(3500);

module.exports = router;