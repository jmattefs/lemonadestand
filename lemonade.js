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
	console.log(buyersArray)
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
	
	qCupsOne = 95;
	qCupsTwo = 150;
	qCupsThree = 200;
	pCupsOne = 2.5;
	pCupsTwo = 3.75;
	pCupsThree = 5;
	var cupPrompt = prompt("How many cups would you like to purchase for the week? 95, 150, or 200")
	if (cupPrompt === "95") {
		document.getElementById("cups").innerHTML = " 95 cups ";
		cupArray.push(qCupsOne)
		return pCupsOne
	} else if (cupPrompt === "150") {
		document.getElementById("cups").innerHTML =" 150 cups ";
		cupArray.push(qCupsTwo)
		return pCupsTwo;
	} else if (cupPrompt === "200") {
		document.getElementById("cups").innerHTML =" 200 cups ";
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
	pLemonsOne = 2.5;
	pLemonsTwo = 3.75;
	pLemonsThree = 5;
	qLemonsOne = 95
	qLemonsTwo = 150
	qLemonsThree = 200
	var lemonPrompt = prompt("How many lemons would you like to purchase for the week?  95, 150, or 200")
	if (lemonPrompt === "95") {
		document.getElementById("lemons").innerHTML = " 95 lemons ";
		lemonArray.push(qLemonsOne)
		return pLemonsOne
	} else if (lemonPrompt === "150") {
		document.getElementById("lemons").innerHTML = " 150 lemons ";
		lemonArray.push(qLemonsTwo)
		return pLemonsTwo;
	} else if (lemonPrompt === "200") {
		document.getElementById("lemons").innerHTML=" 200 lemons ";
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
	
	qSugarOne = 95;
	qSugarTwo = 150;
	qSugarThree = 200;
	pSugarOne = 2.5;
	pSugarTwo = 3.75;
	pSugarThree = 5;
	
	var sugarPrompt = prompt("How many units of sugar would you like to purchase for the week?  95, 150, or 200")
	if (sugarPrompt === "95") {
		document.getElementById("sugar").innerHTML = " 95 units of sugar ";
		sugarArray.push(qSugarOne)
		return pSugarOne;
	} else if (sugarPrompt === "150") {
		document.getElementById("sugar").innerHTML =" 150 units of sugar ";
		sugarArray.push(qSugarTwo)
		return pSugarTwo;
	} else if (sugarPrompt === "200") {
		document.getElementById("sugar").innerHTML =" 200 units of sugar ";
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
	pIceOne = 2.5;
	pIceTwo = 3.75;
	pIceThree = 5;
	var qIceOne
	var qIceTwo
	var qIceThree
	qIceOne= 190
	qIceTwo= 300
	qIceThree= 500
	
	var icePrompt = prompt("How many ice cubes would you like to purchase for the week? 190, 300, or 500")
	if (icePrompt === "190") {
		document.getElementById("ice").innerHTML = " 190 ice cubes";
		iceArray.push(qIceOne)
		return pIceOne;
	} else if (icePrompt === "300") {
		document.getElementById("ice").innerHTML = " 300 ice cubes";
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
	var cupPrompt = prompt("How much will you sell a glass of lemonade for today?", ".50")
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



	

