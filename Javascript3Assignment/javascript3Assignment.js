
function teamInfo(hn, hs, vn, vs) {
	this.homeName = hn;
	this.homeScore = hs;
	this.visitorName = vn;
	this.visitorScore = vs;
}

var h = ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
var v = ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];

var random11 = h[Math.floor(Math.random() * h.length)];
var random21 = v[Math.floor(Math.random() * v.length)];

var random12 = h[Math.floor(Math.random() * h.length)];
var random22 = v[Math.floor(Math.random() * v.length)];

var random13 = h[Math.floor(Math.random() * h.length)];
var random23 = v[Math.floor(Math.random() * v.length)];

var random14 = h[Math.floor(Math.random() * h.length)];
var random24 = v[Math.floor(Math.random() * v.length)];

var random15 = h[Math.floor(Math.random() * h.length)];
var random25 = v[Math.floor(Math.random() * v.length)];

var random16 = h[Math.floor(Math.random() * h.length)];
var random26 = v[Math.floor(Math.random() * v.length)];

var game1 = new teamInfo("Jaguars: ", random11, "Red Dragons: ", random21);

var game2 = new teamInfo("Jaguars", random12, "Red Dragons", random22);

var game3 = new teamInfo("Jaguars", random13, "Red Dragons", random23);

var game4 = new teamInfo("Jaguars", random14, "Red Dragons", random24);

var game5 = new teamInfo("Jaguars", random15, "Red Dragons", random25);

var game6 = new teamInfo("Jaguars", random16, "Red Dragons", random26);

var element1 = document.getElementById("game1");
element1.textContent = "Game 1: " + game1.homeName + game1.homeScore + " " + game1.visitorName + game1.visitorScore;

var element2 = document.getElementById("game2");
element2.textContent = "Game 2: " + game2.homeName + game2.homeScore + " " + game2.visitorName + game2.visitorScore;

var element3 = document.getElementById("game3");
element3.textContent = "Game 3: " + game3.homeName + game3.homeScore + " " + game3.visitorName + game3.visitorScore;

var element4 = document.getElementById("game4");
element4.textContent = "Game 4: " + game4.homeName + game4.homeScore + " " + game4.visitorName + game4.visitorScore;

var element5 = document.getElementById("game5");
element5.textContent = "Game 5: " + game5.homeName + game5.homeScore + " " + game5.visitorName + game5.visitorScore;

var element6 = document.getElementById("game6");
element6.textContent = "Game 6: " + game6.homeName + game6.homeScore + " " + game6.visitorName + game6.visitorScore;
