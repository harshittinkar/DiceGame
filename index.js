
var a = Math.floor(Math.random() * 6) + 1;

var Image = "dice" + a + ".png";

var ImageSource = "images/" + Image;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", ImageSource);


var b = Math.floor(Math.random() * 6) + 1;

var ImageSource2 = "images/dice" + b + ".png";

document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);


//If player 1 wins
if (a > b) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (b > a) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
