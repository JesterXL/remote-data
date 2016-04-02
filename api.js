var request = require("request");

function getTempatureInRichmondVirginia(callback)
{
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Richmond,VA&units=imperial&APPID=7eb6ad8806d1e0e5c7a7e5b68bf643cb";
	request.get({
		url: url
	}, function(error, response, body)
	{
		if(error)
		{
			console.log("error:", error);
			callback(error);
			return;
		}
		var weatherData = JSON.parse(body);
		callback(weatherData.main.temp);
	});
}

module.exports = {
	getTempatureInRichmondVirginia: getTempatureInRichmondVirginia
};