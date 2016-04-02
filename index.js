var people = [
	{firstName: "Jesse", lastName: "Warden", job: "Chanter"},
	{firstName: "Brandy", lastName: "Fortune", job: "Mage"},
	{firstName: "Cow", lastName: "Moo", job: "Fighter"}
];

var fs = require("fs");
fs.writeFile("./test.txt", JSON.stringify(people), function(error)
{
	if(error)
	{
		console.error("boom, cannot write:", error);
		return;
	}
	console.log("We wrote it, yo!!!");
});