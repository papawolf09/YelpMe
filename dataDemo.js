var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/commander", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//doesn't see commander
//set Schema

var CommanderSchema = mongoose.Schema({
	name : String,
	isExist : Boolean,
	level : Number
})

var Commander = mongoose.model("Commander", CommanderSchema);

// console.log(typeof Commanders)

// 1st deprecated
// var rayner = new Commander({
// 	name : "Nova",
// 	isExist : true,
// 	level : 1
// });

// 2nd deprecated 
// rayner.save();

//dbs commander is appeared

Commander.find({}, function(err, commanders) {
	if (err) {
		console.log("oh no err : " + err);
	} else {
		console.log("\n Commanders are \n " + commanders);
	}
});//111

Commander.create({
	name : "Nova",
	isExist : true,
	level : 1
}, function(err, commander) {
	if (err) {
		console.log("oh no err : " + err);
	} else {
		console.log("\n added Commander is \n " + commander.name);
	}
})//444

Commander.deleteOne({name: "Nova"}, function(err, docs) {
	if (err) {
		console.log("oh no err : " + err);
	} else {
		console.log(docs + " is removed");
	}
});//222 

Commander.find({}, function(err, commanders) {
	if (err) {
		console.log("oh no err : " + err);
	} else {
		console.log("\n Commanders are zzzz \n " + commanders);
	}
});//333