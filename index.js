function game() {
  var a = Math.floor(Math.random() * 6 + 1);
  var b = Math.floor(Math.random() * 6 + 1);
  var randomdie1 = ("images/dice" + a + ".png");
  var randomdie2 = ("images/dice" + b + ".png");
  document.querySelector(".img1").setAttribute("src", randomdie1);
  document.querySelector(".img2").setAttribute("src", randomdie2);


  if (a > b) {
    document.querySelector(".container h1").textContent = "Player1 Wins";
  } else if (a === b) {
    document.querySelector(".container h1").textContent = "Draw";
  } else {
    document.querySelector(".container h1").textContent = "Player2 Wins";
  }
}

function runGame() {
  game();
}
