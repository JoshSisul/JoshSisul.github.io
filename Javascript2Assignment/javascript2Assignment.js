
var randomNumber1 = function calcRandomNumber1 (n) {
	var randNum1 = Math.round(Math.random() * n);
	return randNum1;
};

var theRandomNumber1 = randomNumber1(10);

var randomNumber2 = function calcRandomNumber2 (m) {
	var randNum2 = Math.round(Math.random() * m);
	return randNum2;
};

var theRandomNumber2 = randomNumber2(10);

function calcSum (x1, y1){
  var sum = x1 + y1;
  return sum;
}

function calcDifference (x2, y2){
  var difference = x2 - y2;
  return difference;
}

function calcProduct (x3, y3){
  var product = x3 + x3;
  return product;
}

function calcQuotient (x4, y4){
  var quotient = x4 + x4;
  return quotient;
}

var theSum = calcSum (theRandomNumber1, theRandomNumber2);

var theDifference = calcDifference (theRandomNumber1, theRandomNumber2);

var theProduct = calcProduct (theRandomNumber1, theRandomNumber2);

var theQuotient = calcQuotient (theRandomNumber1, theRandomNumber2);

var el1 = document.getElementById("first");

el1.textContent = theSum;

var el2 = document.getElementById("second");

el2.textContent = theDifference;

var el3 = document.getElementById("third");

el3.textContent = theProduct;

var el4 = document.getElementById("fourth");

el4.textContent = theQuotient;
