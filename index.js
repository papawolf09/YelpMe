//====================
//SET UP
//====================
var express 		= require("express"),
	app 			= express(),
	bodyParser 		= require("body-parser"),
	$ 				= require("jquery"),
	mongoose 		= require("mongoose");

mongoose.connect("mongodb://localhost/yelpme", {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static("public"));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected~!!
});

//SCHEMA SETUP
var mygroundSchema = new mongoose.Schema({
	name: String,
	url: String
});


var Myground = mongoose.model("Myground", mygroundSchema);

// var mygrounds2 = [
// 	{name:"multiplayer", url:"https://static.starcraft2.com/dist/images/content/f2p-cards/img-f2p-multiplayer.jpg"},
// 	{name:"coop", url:"https://static.starcraft2.com/dist/images/content/f2p-cards/img-f2p-coop.jpg"},
// 	{name:"campaign", url:"https://static.starcraft2.com/dist/images/content/f2p-cards/img-f2p-campaign.jpg"},
// 	{name:"terran", url:"https://static.starcraft2.com/dist/images/content/intro-panels/img-mode-tile--coop.jpg"},
// 	{name:"zerg", url:"https://static.starcraft2.com/dist/images/content/intro-panels/img-mode-tile--multiplayer.jpg"},
// 	{name:"protoss", url:"https://static.starcraft2.com/dist/images/content/intro-panels/img-mode-tile--campaign.jpg"},
// ];

// Myground.create(mygrounds, function(err, ground) {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log(ground);
// 	}
// });


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


app.get("/mygrounds", function(req, res) {
	Myground.find({}, function(err, grounds) {
		if (err) {
			console.log(err);
		} else {
			console.log(grounds);
			// eval(require('locus'));
			res.render("mygrounds", {mygrounds:grounds})
		}
	});
});

//ROUTE : post, add picture into mygrounds 
app.post("/mygrounds", function(req, res) {
	var name = req.body.name;
	var url = req.body.url;
	var mygroundsnew = {}
	mygroundsnew["name"] = name;
	mygroundsnew["url"] = url;
	mygrounds.push(mygroundsnew);
	res.redirect("/mygrounds");
});

app.get("/mygrounds/new", function(req, res) {
	res.render("mygroundsnew");
})

app.listen(process.env.PORT || 3000, function() {
	console.log("YELPCAMP SERVER HAS BEEN LOADED!!!")
});