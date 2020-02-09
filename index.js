//====================
//SET UP
//====================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var $ = require("jquery");
var mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static("public"));


//====================
//DATABASE
//====================



//====================
//ROUTE
//====================


//root
app.get("/", function(req, res) {
	res.render("root")
});


var mygrounds = [
	{name:"multiplayer", image:"https://static.starcraft2.com/dist/images/content/f2p-cards/img-f2p-multiplayer.jpg"},
	{name:"coop", image:"https://static.starcraft2.com/dist/images/content/f2p-cards/img-f2p-coop.jpg"},
	{name:"campaign", image:"https://static.starcraft2.com/dist/images/content/f2p-cards/img-f2p-campaign.jpg"},
	{name:"terran", image:"https://static.starcraft2.com/dist/images/content/intro-panels/img-mode-tile--coop.jpg"},
	{name:"zerg", image:"https://static.starcraft2.com/dist/images/content/intro-panels/img-mode-tile--multiplayer.jpg"},
	{name:"protoss", image:"https://static.starcraft2.com/dist/images/content/intro-panels/img-mode-tile--campaign.jpg"},
];

app.get("/mygrounds", function(req, res) {
	res.render("mygrounds", {mygrounds:mygrounds})
});

//ROUTE : post, add picture into mygrounds 
app.post("/mygrounds", function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var mygroundsnew = {}
	mygroundsnew["name"] = name;
	mygroundsnew["image"] = image;
	mygrounds.push(mygroundsnew);
	res.redirect("/mygrounds");
});

app.get("/mygrounds/new", function(req, res) {
	res.render("mygroundsnew");
})

app.listen(process.env.PORT || 3000, function() {
	console.log("YELPCAMP SERVER HAS BEEN LOADED!!!")
});