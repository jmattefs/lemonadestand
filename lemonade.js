"use strict";

function genWeather() {
	var weatherToday;
	var weather;
	weather = ["Sunny", "Cloudy", "Snowy"];
	for (var i = 0; i < weather.length; i++) {
		weatherToday = weather[Math.floor(Math.random() * weather.length)];
		return weatherToday;
		
    }
}
function genTemperature(weather) { !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	var temperatureToday
	weather = genWeather();
	if (weather = "Sunny") {
		temperatureToday = Math.floor((Math.random() * 41) + 60);
		return temperatureToday
	} else if (weather = "Cloudy") {
		temperatureToday = Math.floor((Math.random() * 41) + 30);
		return temperatureToday
	} else if (weather = "Snowy") {
		temperatureToday = Math.floor((Math.random() * 41) + 0);
		return temperatureToday
	}
}
function calcForecast(weather, temperature) {
	var forecast
	weather = genWeather();
	temperature = genTemperature();
	forecast = console.log("Today's weather will be " + temperature + " and " + weather);
	return forecast
}
calcForecast();
function buyCups() {
	var total = 20;
	var cups
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
	var cupPrompt = prompt("How many cups would you like to purchase? 25, 50, or 100")
	if (cupPrompt === "25") {
		console.log("25 cups")
		return pCupsOne
	} else if (cupPrompt === "50") {
		console.log("50 cups")
		return pCupsTwo;
	} else if (cupPrompt === "100") {
		console.log("100 cups")
		return pCupsThree;
	} else {
		
	}
}

function buyLemons() {
	var qLemonsOne;
	var qLemonsTwo;
	var qLemonsThree;
	var pLemonsOne;
	var pLemonsTwo;
	var pLemonsThree;
	
	qLemonsOne = 10;
	qLemonsTwo = 30;
	qLemonsThree = 75;
	pLemonsOne = .60;
	pLemonsTwo = 1.70;
	pLemonsThree = 3.30;
	
	var lemonPrompt = prompt("How many lemons would you like to purchase?  10, 30, or 75")
	if (lemonPrompt === "10") {
		console.log("10 lemons")
		return pLemonsOne
	} else if (lemonPrompt === "30") {
		console.log("30 lemons")
		return pLemonsTwo;
	} else if (lemonPrompt === "75") {
		console.log("75 lemons")
		return pLemonsThree;
	} else {
		
	}
}

function buySugar() {
	var total = 20;
	var sugar;
	var qSugarOne;
	var qSugarTwo;
	var qSugarThree;
	var pSugarOne;
	var pSugarTwo;
	var pSugarThree;
	
	qSugarOne = 8;
	qSugarTwo = 20;
	qSugarThree = 48;
	pSugarOne = .65;
	pSugarTwo = 1.70;
	pSugarThree = 3.35;
	
	var sugarPrompt = prompt("How many units of sugar would you like to purchase?  8, 20, or 48")
	if (sugarPrompt === "8") {
		console.log("8 units of sugar")
		return pSugarOne;
	} else if (sugarPrompt === "20") {
		console.log("20 units of sugar")
		return pSugarTwo;
	} else if (sugarPrompt === "48") {
		console.log("48 units of sugar")
		return pSugarThree;
	} else {
		
	}
}

function buyIce() {
	var pIceOne;
	var pIceTwo;
	var pIceThree;
	
	pIceOne = .90;
	pIceTwo = 2.10;
	pIceThree = 3.75;
	
	var icePrompt = prompt("How many ice cubes would you like to purchase? 100, 250, or 500")
	if (icePrompt === "100") {
		console.log("100 ice cubes")
		return pIceOne;
	} else if (icePrompt === "250") {
		console.log("250 ice cubes")
		return pIceTwo;
	} else if (icePrompt === "500") {
		console.log("500 ice cubes")
		return pIceThree;
	} else {
		
	}
}

function calcExpenses(cups, lemons, sugar, ice) {
    var initialMoney = 20;
	var expenses;
	var total
	cups = buyCups();
	lemons = buyLemons();
	sugar = buySugar();
	ice = buyIce();
	expenses = cups + lemons + sugar + ice;
	total = initialMoney - expenses;
	console.log("You have $" + total +" remaining.");
	return total;
}



	

