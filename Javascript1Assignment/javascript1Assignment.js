
var array = [1, 2, 3, 4, 5, 6];


var randomNumber1 = function calcRandomNumber1 (n) {
	var randNum1 = Math.round(Math.random() * n);
	return randNum1;
};
var theRandomNumber1 = randomNumber1(5);
var arrayAnswer1 = array[theRandomNumber1]


var randomNumber2 = function calcRandomNumber2 (n) {
	var randNum2 = Math.round(Math.random() * n);
	return randNum2;
};
var theRandomNumber2 = randomNumber2(5);
var arrayAnswer2 = array[theRandomNumber2]


var randomNumber3 = function calcRandomNumber3 (n) {
	var randNum3 = Math.round(Math.random() * n);
	return randNum3;
};
var theRandomNumber3 = randomNumber3(5);
var arrayAnswer3 = array[theRandomNumber3]


var randomNumber4 = function calcRandomNumber4 (n) {
	var randNum4 = Math.round(Math.random() * n);
	return randNum4;
};
var theRandomNumber4 = randomNumber4(5);
var arrayAnswer4 = array[theRandomNumber4]

var el1 = document.getElementById("first");
el1.textContent = arrayAnswer1;

var el2 = document.getElementById("second");
el2.textContent = arrayAnswer2;

var el3 = document.getElementById("third");
el3.textContent = arrayAnswer3;

var el4 = document.getElementById("fourth");
el4.textContent = arrayAnswer4;
