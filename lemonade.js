"use strict";


var priceArray = [];
var revenueArray = [];
var cupArray = [];
var lemonArray = [];
var sugarArray = [];
var iceArray = [];
var buyersArray = [];
var moneyArray = [];

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
	document.getElementById("forecast").innerHTML ="The forecast for today is "+ temperature + " degrees and " + weather;
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
	if (temperature > 70) {
		Q = regular + twentysix;
	} else if (temperature < 30) {
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
	buyers= Math.round(q * multiplier / impact);
	buyersArray.push(buyers);
	return buyers
}

function revenue(buyers, price, total){
    buyers = sales();
	price = priceArray[0];
	total = buyers * price;
	alert("You have sold $"+ total + " of lemonade today.")
	document.getElementById("day1rev").innerHTML = "Monday's Revenue: $ "+ total
	revenueArray.push(total);
	console.log(buyers)
	console.log(price)
	return total;
}	
function revenueTwo (buyers, price, total){
    buyers = sales();
	price = priceArray[1];
	total = buyers * price;
	alert("You have sold $"+ total + " of lemonade today.")
	document.getElementById("day2rev").innerHTML = "Tuesday's Revenue: $ "+ total
	revenueArray.push(total);
	console.log(buyers)
	console.log(price)
	return total;
}	
function revenueThree (buyers, price, total){
    buyers = sales();
	price = priceArray[2];
	total = buyers * price;
	alert("You have sold $"+ total + " of lemonade today.")
	document.getElementById("day3rev").innerHTML = "Wednesday's Revenue: $ "+ total
	revenueArray.push(total);
	console.log(buyers)
	console.log(price)
	return total;
}
function revenueFour (buyers, price, total){
    buyers = sales();
	price = priceArray[3];
	total = buyers * price;
	alert("You have sold $"+ total + " of lemonade today.")
	document.getElementById("day4rev").innerHTML = "Thursday's Revenue: $ "+ total
	revenueArray.push(total);
	console.log(buyers)
	console.log(price)
	return total;
}
function revenueFive (buyers, price, total){
    buyers = sales();
	price = priceArray[4];
	total = buyers * price;
	alert("You have sold $"+ total + " of lemonade today.")
	document.getElementById("day5rev").innerHTML = "Friday's Revenue: $ "+ total
	revenueArray.push(total);
	console.log(buyers)
	console.log(price)
	return total;
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
		cupArray.push(qCupsOne)
		return pCupsOne
	} else if (cupPrompt === "50") {
		document.getElementById("cups").innerHTML =" 50 cups ";
		cupArray.push(qCupsTwo)
		return pCupsTwo;
	} else if (cupPrompt === "100") {
		document.getElementById("cups").innerHTML =" 100 cups ";
		cupArray.push(qCupsThree)
		return pCupsThree;
	} else {
		buyCups();
	}
}

function buyLemons() {
	var pLemonsOne;
	var pLemonsTwo;
	var pLemonsThree;
	var qLemonsOne;
	var qLemonsTwo;
	var qLemonsThree;
	pLemonsOne = .60;
	pLemonsTwo = 1.70;
	pLemonsThree = 3.30;
	qLemonsOne = 25
	qLemonsTwo = 50
	qLemonsThree = 100
	var lemonPrompt = prompt("How many lemons would you like to purchase?  25, 50, or 100")
	if (lemonPrompt === "25") {
		document.getElementById("lemons").innerHTML = " 25 lemons ";
		lemonArray.push(qLemonsOne)
		return pLemonsOne
	} else if (lemonPrompt === "50") {
		document.getElementById("lemons").innerHTML = " 50 lemons ";
		lemonArray.push(qLemonsTwo)
		return pLemonsTwo;
	} else if (lemonPrompt === "100") {
		document.getElementById("lemons").innerHTML=" 100 lemons ";
		lemonArray.push(qLemonsThree)
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
	
	qSugarOne = 25;
	qSugarTwo = 50;
	qSugarThree = 100;
	pSugarOne = .65;
	pSugarTwo = 1.70;
	pSugarThree = 3.35;
	
	var sugarPrompt = prompt("How many units of sugar would you like to purchase?  25, 50, or 100")
	if (sugarPrompt === "25") {
		document.getElementById("sugar").innerHTML = " 25 units of sugar ";
		sugarArray.push(qSugarOne)
		return pSugarOne;
	} else if (sugarPrompt === "50") {
		document.getElementById("sugar").innerHTML =" 50 units of sugar ";
		sugarArray.push(qSugarTwo)
		return pSugarTwo;
	} else if (sugarPrompt === "100") {
		document.getElementById("sugar").innerHTML =" 100 units of sugar ";
		sugarArray.push(qSugarThree)
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
	var qIceOne
	var qIceTwo
	var qIceThree
	qIceOne= 100
	qIceTwo= 250
	qIceThree= 500
	
	var icePrompt = prompt("How many ice cubes would you like to purchase? 100, 250, or 500")
	if (icePrompt === "100") {
		document.getElementById("ice").innerHTML = " 100 ice cubes";
		iceArray.push(qIceOne)
		return pIceOne;
	} else if (icePrompt === "250") {
		document.getElementById("ice").innerHTML = " 250 ice cubes";
		iceArray.push(qIceTwo)
		return pIceTwo;
	} else if (icePrompt === "500") {
		document.getElementById("ice").innerHTML = " 500 ice cubes";
		iceArray.push(qIceThree)
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
	revenueArray.push(total)
	document.getElementById("money").innerHTML = "You have $" + total +" remaining.";
	return total;
}

function cupPrice(){
	var cupPrompt = prompt("How much will you sell a glass of lemonade for?", ".50")
	document.getElementById("mr").innerHTML ="$ " +  cupPrompt;
	priceArray.push(cupPrompt)
	console.log(priceArray)
	return cupPrompt;
}

function priceMultiplier(multiplier){
	var price
	price = cupPrice()
	if (price > 1.25){
		multiplier = .25
	} else if (price < .5){
		multiplier = 2
	} else {
		multiplier = 1
	}
	console.log(multiplier)
	return multiplier
}
function transicion(money){
	money = revenueArray[0]+revenueArray[1];
	console.log(money)
	moneyArray.push(money)
	document.getElementById("sm2").innerHTML = "Money: $ "+ money;
	return money
}
function transitionC(cups){
	cups = cupArray[0]- buyersArray[0];
	document.getElementById("cr2").innerHTML = "Remaining Cups: "+ cups;
	console.log(cupArray)
	return cups
}
function transitionL(lemons){
	lemons = lemonArray[0]- buyersArray[0];
	document.getElementById("lr2").innerHTML = "Remaining Lemons: " + lemons;
	console.log(lemonArray)
	return lemons
}
function transitionS(sugar){
	sugar = sugarArray[0]- buyersArray[0];
	document.getElementById("sr2").innerHTML = "Remaining Sugar: " + sugar;
	console.log(sugarArray)
	return sugar
}
function transitionI(ice){
	ice = iceArray[0] - buyersArray[0];
	console.log(buyersArray)
	document.getElementById("ir2").innerHTML = "Remaining Ice: " + ice;
	return ice
}
function dayOneTransition(money, cups, lemons, sugar, ice, weather){
	money= transicion();
	cups = transitionC();
	lemons= transitionL();
	sugar= transitionS();
	ice = transitionI();
	weather = weatherPrompt();
}
function dayTwoTransition(money, weather){
	money= transicionTwo();
	weather= weatherPrompt();
}
function dayThreeTransition(money, weather){
	money= transicionThree();
	weather= weatherPrompt();
}
function dayFourTransition(money, weather){
	money= transicionFour();
	weather= weatherPrompt();
}
function dayFiveTransition(money){
	money= transicionFive();
	if(alert("The week is over. You started with $20 and now you have $ " + money + "!")){}
	else window.location.reload();
	
}
function transicionTwo(money){
	money = moneyArray[0]+revenueArray[2];
	console.log(money)
	moneyArray.push(money)
	document.getElementById("sm3").innerHTML = "Money: $ "+ money;
	return money
}
function transicionThree(money){
	money = moneyArray[1]+revenueArray[3];
	console.log(money);
	moneyArray.push(money);
	document.getElementById("sm4").innerHTML = "Money: $ "+ money; 
	return money
}
function transicionFour(money){
	money = moneyArray[2]+revenueArray[4];
	console.log(money);
	moneyArray.push(money);
	document.getElementById("sm5").innerHTML = "Money: $ "+ money; 
	return money
}
function transicionFive(money){
	money = moneyArray[3]+revenueArray[5];
	return money
}
function calcExpenses2(cups, lemons, sugar, ice){
	var currentMoney = moneyArray[0];
	var expenses
	var total
	cups = buyCups()
	lemons = buyLemons();
	sugar = buySugar();
	ice = buyIce();
	expenses = cups +lemons+sugar+ice;
	total = currentMoney - expenses
	revenueArray.push(total)
}
function main() {
	
	var calculateE
	var weather
	var dayOne
	var dayTwo
	var dayThree
	var dayFour
	var dayFive
	var revenueA
	var revenueB
	var revenueC
	var revenueD
	var revenueE
	
	calculateE = calcExpenses();
	weather = weatherPrompt();
	revenueA = revenue();
	
	dayOne = dayOneTransition();
	revenueB = revenueTwo();
    dayTwo = dayTwoTransition();
	revenueC = revenueThree();
	dayThree = dayThreeTransition();
	revenueD = revenueFour();
	dayFour = dayFourTransition();
	revenueE = revenueFive();
	dayFive = dayFiveTransition();	

}



	

