
function generateWeather() {
	var days = [" Monday", " Tuesday", " Wednesday", " Thursday", " Friday", " Saturday", " Sunday"];
	var weather = [" Sunny", " Cloudy", " Snowy"];
	var forecast = []
	var weatherToday
	var weatherMultiplier
	for (var i = 0; i < days.length; i++) {
		weatherToday = weather[Math.floor(Math.random() * weather.length)];
	    forecast[i] = weatherToday;
	}
	if (weather = "Sunny")	{
		weatherMultiplier = 2;
	} else if (weather = "Cloudy") {
		weatherMultiplier = 1;
	} else if (weather = "Snowy") {
		weatherMultiplier = .5; 
	}
	document.getElementById("day").innerHTML = days;
	document.getElementById("weather").innerHTML = forecast;

}
