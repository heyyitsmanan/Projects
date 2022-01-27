"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const theGuess = Number(document.querySelector(".guess").value);

  if (!theGuess) {
    displayMessage("No Number found :(");
  } else if (theGuess === secretNum) {
    displayMessage("Correct Guess - You Won :)");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNum;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (theGuess !== secretNum) {
    if (score > 1) {
      score--;
      displayMessage(theGuess > secretNum ? "Too High Guess" : "Too Low Guess");
      setScore(score);
    } else {
      score = 0;
      displayMessage("You Lost The Game :(");
      setScore(score);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  setScore(score);
  displayMessage("Start Guessing ...");
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  secretNum = Math.trunc(Math.random() * 20) + 1;
});
