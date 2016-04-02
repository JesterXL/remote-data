var fs = require("fs");
fs.unlink('./test.txt', function(error)
{
	if(error)
	{
		console.log("failed to delete:", error);
		return;
	}
	console.log("Deleted text file, broooooooosef");
});