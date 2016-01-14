"use strict";


var priceArray = [];
var revenueArray = [];
var cupArray = [];
var lemonArray = [];
var sugarArray = [];
var iceArray = [];
var buyersArray = [];
var moneyArray = [];
var finalRev = [];
var weatherArray = [];

function genWeather() {
	var weatherToday;
	var weather;
	weather = ["Sunny", "Cloudy", "Snowy"];
	for (var i = 0; i < weather.length; i++) {
		weatherToday = weather[Math.floor(Math.random() * weather.length)];
		weatherArray.push(weatherToday);
		console.log(weatherArray)
		return weatherToday;
		
    }
}
function genTemperature(weather) { 
	var temperatureToday
	weather = genWeather();
	console.log(weather)
	if (weather == "Sunny") {
		temperatureToday = Math.floor((Math.random() * 41) + 60);
		return temperatureToday;
	} else if (weather == "Cloudy") {
		temperatureToday = Math.floor((Math.random() * 41) + 30);
		return temperatureToday;
	} else if (weather == "Snowy") {
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
	var weather = weatherArray[0];
	if (weather === "Sunny") {
		impact = Math.floor(Math.random()* 1) + 1;
	} else if (weather === "Cloudy") {
		impact = Math.floor(Math.random()* 1) + 3;
	} else if (weather === "Snowy") {
		impact = Math.floor(Math.random()* 1) + 5;
	}
	weatherArray.pop();
	console.log(impact)
	return impact
}
function customerQ(Q) {
	var random;
	var regular;
	var temperature;
	temperature = genTemperature();
	weatherArray.pop();
	regular = 50;
	random = Math.floor(Math.random() * ((30-20)+1) +20);
	if (temperature > 70) {
		Q = regular + random;
	} else if (temperature < 30) {
		Q = regular - random;
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
	
	qCupsOne = 600;
	qCupsTwo = 850;
	qCupsThree = 1300;
	pCupsOne = 2.5;
	pCupsTwo = 3.75;
	pCupsThree = 5;
	var cupPrompt = prompt("How many cups would you like to purchase for the week? 600, 850, or 1300")
	if (cupPrompt === "600") {
		document.getElementById("cups").innerHTML = " 600 cups ";
		cupArray.push(qCupsOne)
		return pCupsOne
	} else if (cupPrompt === "850") {
		document.getElementById("cups").innerHTML =" 850 cups ";
		cupArray.push(qCupsTwo)
		return pCupsTwo;
	} else if (cupPrompt === "1300") {
		document.getElementById("cups").innerHTML =" 1300 cups ";
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
	qLemonsOne = 600;
	qLemonsTwo = 850;
	qLemonsThree = 1300 ;
	var lemonPrompt = prompt("How many lemons would you like to purchase for the week?  600, 850, or 1300")
	if (lemonPrompt === "600") {
		document.getElementById("lemons").innerHTML = " 600 lemons ";
		lemonArray.push(qLemonsOne)
		return pLemonsOne
	} else if (lemonPrompt === "850") {
		document.getElementById("lemons").innerHTML = " 850 lemons ";
		lemonArray.push(qLemonsTwo)
		return pLemonsTwo;
	} else if (lemonPrompt === "1300") {
		document.getElementById("lemons").innerHTML=" 1300 lemons ";
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
	
	qSugarOne = 600;
	qSugarTwo = 850;
	qSugarThree = 1300;
	pSugarOne = 2.5;
	pSugarTwo = 3.75;
	pSugarThree = 5;
	
	var sugarPrompt = prompt("How many cups of sugar would you like to purchase for the week?  600, 850, or 1300")
	if (sugarPrompt === "600") {
		document.getElementById("sugar").innerHTML = " 600 cups of sugar ";
		sugarArray.push(qSugarOne)
		return pSugarOne;
	} else if (sugarPrompt === "850") {
		document.getElementById("sugar").innerHTML =" 850 cups of sugar ";
		sugarArray.push(qSugarTwo)
		return pSugarTwo;
	} else if (sugarPrompt === "1300") {
		document.getElementById("sugar").innerHTML =" 1300 cups of sugar ";
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
	qIceOne= 1200
	qIceTwo= 1700
	qIceThree= 1100
	
	var icePrompt = prompt("How many ice cubes would you like to purchase for the week? 1200, 1700, or 2200")
	if (icePrompt === "1200") {
		document.getElementById("ice").innerHTML = " 1200 ice cubes";
		iceArray.push(qIceOne)
		return pIceOne;
	} else if (icePrompt === "1700") {
		document.getElementById("ice").innerHTML = " 1700 ice cubes";
		iceArray.push(qIceTwo)
		return pIceTwo;
	} else if (icePrompt === "2200") {
		document.getElementById("ice").innerHTML = " 2200 ice cubes";
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
	revenueArray.push(total);
	document.getElementById("money").innerHTML = "You have $" + total +" remaining.";
	return total;
}

function cupPrice(){
	var cupPrompt = prompt("How much will you sell a glass of lemonade for today?", "1")
	
	priceArray.push(cupPrompt);
	console.log(priceArray);
	return cupPrompt;
}

function priceMultiplier(multiplier){
	var price
	price = cupPrice();
	if (price > 1.5){
		multiplier = .25
	} else if (price < .3){
		multiplier = 1.5;
	} else {
		multiplier = 1
	}
	console.log(multiplier);
	return multiplier
}
function transicion(money){
	money = revenueArray[0]+revenueArray[1];
	console.log(money);
	moneyArray.push(money);
	document.getElementById("sm2").innerHTML = "Money: $ "+ money;
	return money
}
function transitionC(cups){
	cups = cupArray[0]- buyersArray[0];
	document.getElementById("cr2").innerHTML = "Remaining Cups: "+ cups;
	cupArray.push(cups);
	console.log(cupArray);
	return cups
}
function transitionL(lemons){
	lemons = lemonArray[0]- buyersArray[0];
	document.getElementById("lr2").innerHTML = "Remaining Lemons: " + lemons;
	lemonArray.push(lemons);
	console.log(lemonArray);
	return lemons
}
function transitionS(sugar){
	sugar = sugarArray[0]- buyersArray[0];
	document.getElementById("sr2").innerHTML = "Remaining Sugar: " + sugar;
	sugarArray.push(sugar);
	console.log(sugarArray);
	return sugar
}
function transitionI(ice, doubleice){
	doubleice = 2 * buyersArray[0];
	ice = iceArray[0] - doubleice;
	console.log(buyersArray);
	document.getElementById("ir2").innerHTML = "Remaining Ice: " + ice;
	iceArray.push(ice);
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
function transicionTwo(money){
	money = moneyArray[0]+revenueArray[2];
	console.log(money);
	moneyArray.push(money);
	document.getElementById("sm3").innerHTML = "Money: $ "+ money;
	return money
}
function transitionCtwo(cups){
	cups = cupArray[1]- buyersArray[1];
	document.getElementById("cr3").innerHTML = "Remaining Cups: "+ cups;
	cupArray.push(cups);
	console.log(cupArray);
	return cups
}
function transitionLtwo(lemons){
	lemons = lemonArray[1]- buyersArray[1];
	document.getElementById("lr3").innerHTML = "Remaining Lemons: " + lemons;
	lemonArray.push(lemons);
	console.log(lemonArray);
	return lemons
}
function transitionStwo(sugar){
	sugar = sugarArray[1]- buyersArray[1];
	document.getElementById("sr3").innerHTML = "Remaining Sugar: " + sugar;
	sugarArray.push(sugar);
	console.log(sugarArray);
	return sugar
}
function transitionItwo(ice, doubleice){
	doubleice = 2 * buyersArray[1];
	ice = iceArray[1] - doubleice;
	console.log(buyersArray);
	document.getElementById("ir3").innerHTML = "Remaining Ice: " + ice;
	iceArray.push(ice)
	return ice
}
function dayTwoTransition(money, cups, lemons, sugar, ice, weather){
	money= transicionTwo();
	cups= transitionCtwo();
	lemons= transitionLtwo();
	sugar= transitionStwo();
	ice= transitionItwo();
	weather= weatherPrompt();
}
function transicionThree(money){
	money = moneyArray[1]+revenueArray[3];
	console.log(money);
	moneyArray.push(money);
	document.getElementById("sm4").innerHTML = "Money: $ "+ money; 
	return money
}
function transitionCthree(cups){
	cups = cupArray[2]- buyersArray[2];
	document.getElementById("cr4").innerHTML = "Remaining Cups: "+ cups;
	cupArray.push(cups);
	console.log(cupArray);
	return cups
}
function transitionLthree(lemons){
	lemons = lemonArray[2]- buyersArray[2];
	document.getElementById("lr4").innerHTML = "Remaining Lemons: " + lemons;
	lemonArray.push(lemons);
	console.log(lemonArray);
	return lemons
}
function transitionSthree(sugar){
	sugar = sugarArray[2]- buyersArray[2];
	document.getElementById("sr4").innerHTML = "Remaining Sugar: " + sugar;
	sugarArray.push(sugar);
	console.log(sugarArray);
	return sugar
}
function transitionIthree(ice, doubleice){
	doubleice = 2 * buyersArray[2];
	ice = iceArray[2] - doubleice;
	console.log(buyersArray);
	document.getElementById("ir4").innerHTML = "Remaining Ice: " + ice;
	iceArray.push(ice);
	return ice
}
function dayThreeTransition(money, cups, lemons, sugar, ice, weather){
	money= transicionThree();
	cups = transitionCthree();
	lemons = transitionLthree();
	sugar = transitionSthree();
	ice = transitionIthree();
	weather= weatherPrompt();
}
function transicionFour(money){
	money = moneyArray[2]+revenueArray[4];
	console.log(money);
	moneyArray.push(money);
	document.getElementById("sm5").innerHTML = "Money: $ "+ money; 
	return money
}
function transitionCfour(cups){
	cups = cupArray[3]- buyersArray[3];
	document.getElementById("cr5").innerHTML = "Remaining Cups: "+ cups;
	cupArray.push(cups);
	console.log(cupArray);
	return cups
}
function transitionLfour(lemons){
	lemons = lemonArray[3]- buyersArray[3];
	document.getElementById("lr5").innerHTML = "Remaining Lemons: " + lemons;
	lemonArray.push(lemons);
	console.log(lemonArray);
	return lemons
}
function transitionSfour(sugar){
	sugar = sugarArray[3]- buyersArray[3];
	document.getElementById("sr5").innerHTML = "Remaining Sugar: " + sugar;
	sugarArray.push(sugar);
	console.log(sugarArray);
	return sugar
}
function transitionIfour(ice, doubleice){
	doubleice = 2 * buyersArray[3];
	ice = iceArray[3] - doubleice;
	console.log(buyersArray);
	document.getElementById("ir5").innerHTML = "Remaining Ice: " + ice;
	iceArray.push(ice);
	return ice
}
function dayFourTransition(money, cups, lemons, sugar, ice, weather){
	money= transicionFour();
	cups = transitionCfour();
	lemons = transitionLfour();
	sugar = transitionSfour();
	ice = transitionIfour();
	weather= weatherPrompt();
}
function transicionFive(money){
	money = moneyArray[3]+revenueArray[5];
	console.log(revenueArray);
	console.log(moneyArray);
	finalRev.push(money);
	console.log(finalRev);
	return money
}
function transitionCfive(cups){
	cups = cupArray[4]- buyersArray[4];
	document.getElementById("cr6").innerHTML = "Remaining Cups: "+ cups;
	cupArray.push(cups);
	console.log(cupArray);
	return cups
}
function transitionLfive(lemons){
	lemons = lemonArray[4]- buyersArray[4];
	document.getElementById("lr6").innerHTML = "Remaining Lemons: " + lemons;
	lemonArray.push(lemons);
	console.log(lemonArray);
	return lemons
}
function transitionSfive(sugar){
	sugar = sugarArray[4]- buyersArray[4];
	document.getElementById("sr6").innerHTML = "Remaining Sugar: " + sugar;
	sugarArray.push(sugar);
	console.log(sugarArray);
	return sugar
}
function transitionIfive(ice, doubleice){
	doubleice = 2 * buyersArray[4];
	ice = iceArray[4] - doubleice;
	console.log(buyersArray);
	document.getElementById("ir6").innerHTML = "Remaining Ice: " + ice;
	iceArray.push(ice);
	return ice
}
function dayFiveTransition(money, cups, lemons, sugar, ice){
	money= transicionFive();
	cups= transitionCfive();
	lemons= transitionLfive();
	sugar= transitionSfive();
	ice= transitionIfive();
	document.getElementById("day6rev").innerHTML = "Total Revenue: $" + money;
	var lastPrompt = prompt("The week is over.  You started with $20 and made $"+ money + "! Type yes if you would like to sell back your remaining lemons, sugar, and cups.")
	if (lastPrompt === "yes" || lastPrompt === "Yes") {
		buyback();
		document.getElementById("day6rev").innerHTML = "Total Revenue + Buyback: $" + finalRev[1];
		if(alert("Your new total is $ " + finalRev[1] + "!")){}
		else window.location.reload();
	} else window.location.reload();
}
function buybackLemons(lemons) {
	lemons = lemonArray[4] * .01;
	return lemons;
}
function buybackSugar(sugar) {
	sugar = sugarArray[4] * .01;
	return sugar;
}
function buybackCups(cups){
	cups = cupArray[4] * .01;
	return cups;
}
function buyback(lemons, sugar, cups, total, totalplus){
	lemons = buybackLemons();
	sugar = buybackSugar();
	cups = buybackCups();
	total = lemons + sugar + cups;
	totalplus = total + finalRev[0];
	document.getElementById("space6").innerHTML= "You sold these remaining cups, lemons, and sugar for $"+ Math.round(10*total)/10 + "!"
	finalRev.push(totalplus);
	
	
	return totalplus;
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



	

