"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let heighScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".cheak").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (score > 0) {
    if (guessNumber >= 1) {
      if (guessNumber < secretNumber) {
        document.querySelector(".score").textContent = --score;
        displayMessage("📈 Too high!");
      } else if (guessNumber > secretNumber) {
        document.querySelector(".score").textContent = --score;
        displayMessage("📉 Too low!");
      } else {
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "250px";
        displayMessage("🎉 Correct Number!");
        document.querySelector(".number").textContent = secretNumber;
        if (heighScore < score) {
          heighScore = score;
          document.querySelector(".highscore").textContent = heighScore;
        }
      }
    } else {
      displayMessage("⛔️ No number!");
    }
  } else {
    displayMessage("💥 You lost the game!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "180px";
  document.querySelector(".number").textContent = "?"

});
