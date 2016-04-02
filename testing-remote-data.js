var request = require('request');

request.get({
	url: 'http://jessewarden.com/archives/people.json'
}, function(error, response, body)
{
	if(error)
	{
		console.log("error:", error);
		return;
	}
	var peopleArray = JSON.parse(body);
	console.log("peopleArray:", peopleArray);
	console.log("peopleArray.length:", peopleArray.length);
});