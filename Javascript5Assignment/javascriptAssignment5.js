function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var xCoor = "X coordinate: " + x;
  var yCoor = "Y coordinate: " + y;
  document.getElementById("xCoord").innerHTML = xCoor;
  document.getElementById("yCoord").innerHTML = yCoor;
}


function keyPress(e) {
  if (e.keyCode == 67) {
    document.getElementById("xCoord").innerHTML = 0;
    document.getElementById("yCoord").innerHTML = 0;
  }

}
document.addEventListener('keydown', keyPress, false);
