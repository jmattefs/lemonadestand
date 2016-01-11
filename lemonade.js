"use strict";

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
console.log (generateWeather());

function buyCups() {
	var total = 20;
	var qCupsOne;
	var pCupsOne;
	var qCupsTwo;
	var pCupsTwo;
	var qCupsThree;
	var pCupsThree;
	qCupsOne = 25;
	qCupsTwo = 50;
	qCupsThree = 100;
	pCupsOne = .80;
	pCupsTwo = 1.65;
	pCupsThree = 3.15;
	
	if (document.getElementById("cup1").checked == true) {
		
		return total -= pCupsOne;
	} else if (document.getElementById("cup2").checked == true) {
		return total -= pCupsTwo;
	} else if (document.getElementById("cup3").checked == true) {
		return total -= pCupsThree;
	}
console.log (total);
	
}



	
	
	

