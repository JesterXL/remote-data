var fs = require("fs");
fs.readFile("./parseme.txt", "utf8", function(error, data)
{
	if(error)
	{
		console.log("boomz:", error);
		return;
	}

	var personArray = data.split("\n");
	var cleanPersonArray = [];
	for(var i=0; i<personArray.length;i++)
	{
		var person = personArray[i].split(",");
		cleanPersonArray[i] = {
			firstName: person[0],
			lastName: person[1],
			job: person[2]
		};
	}
	console.log("cleanPersonArray:", cleanPersonArray);
});