"use strict";

var lemon = {
	priceOne: .60,
	priceTwo: 1.70,
	priceThree: 3.30,
	qOne: 10,
	qTwo: 30,
	qThree: 75,
}
var cup = {
	priceOne: .80,
	priceTwo: 1.65,
	priceThree: 3.15,
	qOne: 25,
	qTwo: 50,
	qThree: 100,
}
var sugar = {
	priceOne: .65,
	priceTwo: 1.70,
	priceThree: 3.35,
	qOne: 8,
	qTwo: 20,
	qThree: 48,
}
var ice = {
	priceOne: .90,
	priceTwo: 2.10,
	priceThree: 3.75,
	qOne: 100,
	qTwo: 250,
	qThree: 500,
}

function genWeather() {
	var weatherToday;
	var weather;
	weather = ["Sunny", "Cloudy", "Snowy"];
	for (var i = 0; i < weather.length; i++) {
		weatherToday = weather[Math.floor(Math.random() * weather.length)];
		return weatherToday;
    }
}
function genTemperature(weather) { 
	var temperatureToday
	weather = genWeather();
	if (weather === "Sunny") {
		temperatureToday = Math.floor((Math.random() * 41) + 60);
		return temperatureToday;
	} else if (weather === "Cloudy") {
		temperatureToday = Math.floor((Math.random() * 41) + 30);
		return temperatureToday;
	} else if (weather === "Snowy") {
		temperatureToday = Math.floor((Math.random() * 41) + 0);
		return temperatureToday;
	}
}
function calcForecast(weather, temperature) {
	var forecast
	temperature = genTemperature();
	
	if (temperature > 60) {
		weather = "sunny";
	} else if (temperature < 40) {
		weather = "snowy";
	} else {
		weather = "cloudy";
	}
	forecast = alert("Today's weather will be " + temperature + " degrees and " + weather);
	return forecast
}
function weatherPrompt() {
	var weather = (calcForecast())
}
function weatherImpact(impact){
	var weather = genWeather()
	if (weather === "Sunny") {
		impact = Math.floor(Math.random()* 1) + 1;
	} else if (weather === "Cloudy") {
		impact = Math.floor(Math.random()* 1) + 3;
	} else if (weather === "Snowy") {
		impact = Math.floor(Math.random()* 1) + 5;
	}
	console.log(impact)
	return impact
}
function customerQ(Q) {
	var twentysix
	var regular;
	var temperature;
	temperature = genTemperature();
	regular = 50;
	twentysix = 26
	if (temperature > 65) {
		Q = regular + twentysix;
	} else if (temperature < 45) {
		Q = regular - twentysix;
	} else {
		Q = regular
	}
	console.log(Q)
	return Q
}
function sales(q, multiplier, impact){
	q= customerQ();
	multiplier= priceMultiplier();
	impact= weatherImpact();
	var buyers;
	buyers= q * multiplier / impact;
	return buyers
}

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
		document.getElementById("cups").innerHTML = " 25 cups ";
		return pCupsOne
	} else if (cupPrompt === "50") {
		document.getElementById("cups").innerHTML =" 50 cups ";
		return pCupsTwo;
	} else if (cupPrompt === "100") {
		document.getElementById("cups").innerHTML =" 100 cups ";
		return pCupsThree;
	} else {
		buyCups();
	}
}

function buyLemons() {
	var pLemonsOne;
	var pLemonsTwo;
	var pLemonsThree;
	
	pLemonsOne = .60;
	pLemonsTwo = 1.70;
	pLemonsThree = 3.30;
	
	var lemonPrompt = prompt("How many lemons would you like to purchase?  10, 30, or 75")
	if (lemonPrompt === "10") {
		document.getElementById("lemons").innerHTML = " 10 lemons ";
		return lemon.priceOne
	} else if (lemonPrompt === "30") {
		document.getElementById("lemons").innerHTML = " 30 lemons ";
		return pLemonsTwo;
	} else if (lemonPrompt === "75") {
		document.getElementById("lemons").innerHTML=" 75 lemons ";
		return pLemonsThree;
	} else {
		buyLemons();
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
		document.getElementById("sugar").innerHTML = " 8 units of sugar ";
		return pSugarOne;
	} else if (sugarPrompt === "20") {
		document.getElementById("sugar").innerHTML =" 20 units of sugar ";
		return pSugarTwo;
	} else if (sugarPrompt === "48") {
		document.getElementById("sugar").innerHTML =" 48 units of sugar ";
		return pSugarThree;
	} else {
		buySugar();
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
		document.getElementById("ice").innerHTML = " 100 ice cubes";
		return pIceOne;
	} else if (icePrompt === "250") {
		document.getElementById("ice").innerHTML = " 250 ice cubes";
		return pIceTwo;
	} else if (icePrompt === "500") {
		document.getElementById("ice").innerHTML = " 500 ice cubes";
		return pIceThree;
	} else {
		buyIce();
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
	document.getElementById("money").innerHTML = "You have $" + total +" remaining.";
	return total;
}
function recipeLemons(){
	var lemonPrompt = prompt("How many lemons do you want per pitcher?", "4")
	document.getElementById("lr").innerHTML = lemonPrompt + " lemons per pitcher";
	return lemonPrompt;
}
function recipeSugar(){
	var sugarPrompt = prompt("How many cups of sugar do you want per pitcher?", "4")
	document.getElementById("sr").innerHTML = sugarPrompt + " cups of sugar per pitcher";
	return sugarPrompt;
}
function recipeIce(){
	var icePrompt = prompt("How many ice cubes per glass?", "4")
	document.getElementById("ir").innerHTML = icePrompt +" ice cubes per glass";
	return icePrompt;
}
function cupPrice(){
	var cupPrompt = prompt("How much will you sell a glass of lemonade for?", ".50")
	document.getElementById("mr").innerHTML ="$ " +  cupPrompt;
	return cupPrompt;
}
function createRecipe(lemons, sugar, ice, cup){
	lemons = recipeLemons();
	sugar = recipeSugar();
	ice = recipeIce();
	cup = sales()
}
function priceMultiplier(multiplier){
	var price
	price = cupPrice()
	if (price > 1.25){
		multiplier = .5
	} else if (price < .5){
		multiplier = 2
	} else {
		multiplier = 1
	}
	console.log(multiplier)
	return multiplier
}


function main() {
	var lemons;
	lemons = 0;
	var sugar;
	sugar = 0;
	var ice;
	ice = 0;
	var cups
	cups = 0
	var recipe
	var calculateE
	var weather
	var tsales
	
	calculateE = calcExpenses();
	weather = weatherPrompt();
	recipe = createRecipe();
	
	console.log(sales())

	
	

}
main()


	

