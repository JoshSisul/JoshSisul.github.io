
var element1 =  document.querySelector("h1.first");
element1.innerHTML = "<b><i>I made the text bold and italicized</i></b>";

var listElements = document.getElementsByTagName("li");
listElements[0].parentNode.setAttribute("class", "first");

var newListElement = document.createElement("li");
var newListText = document.createTextNode("dollar coin");
newListElement.appendChild(newListText);

var theParent = listElements[0].parentNode;

theParent.appendChild(newListElement);
