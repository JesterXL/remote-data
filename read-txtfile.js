var fs = require("fs");
fs.readFile("./test.txt", "utf8", function(error, data)
{
	if(error)
	{
		console.log("boomz:", error);
		return;
	}

	var parsedData = JSON.parse(data);
	console.log(parsedData.length);
	console.log(parsedData);
});