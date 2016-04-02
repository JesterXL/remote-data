var fs = require("fs");
fs.readFile("./test.txt", "utf8", function(error, data)
{
	if(error)
	{
		console.log("boomz:", error);
		return;
	}

	var peopleArray = JSON.parse(data);
	console.log("before:", peopleArray);
	peopleArray.push(getRandomPerson());
	console.log("after:", peopleArray);

	fs.writeFile("./test.txt", JSON.stringify(peopleArray), function(error)
	{
		if(error)
		{
			console.error("boom, cannot write:", error);
			return;
		}
		console.log("We wrote it, yo!!!");
	});
});

function getRandomName()
{
	return "Cow" + Math.floor(Math.random() * 999) + "zzzzz"; 
}

function getRandomJob()
{
	var jobs = ["Plumber", "Cheesemuffin Maker", "Healer", "Jumper"];
	var randomJob = Math.floor(jobs.length * Math.random());
	return jobs[randomJob];
}

function getRandomPerson()
{
	return {
		firstName: getRandomName(),
		lastName: getRandomName(),
		job: getRandomJob()
	};
}

module.exports = {
	getRandomName: getRandomName,
	getRandomJob: getRandomJob,
	getRandomPerson: getRandomPerson
};