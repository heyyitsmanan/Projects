"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const theGuess = Number(document.querySelector(".guess").value);

  if (!theGuess) {
    document.querySelector(".message").textContent = "No Number found :(";
  } else if (theGuess === secretNum) {
    document.querySelector(".message").textContent =
      "Correct Guess - You Won :)";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNum;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (theGuess > secretNum) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "Too High Guess :(";
      document.querySelector(".score").textContent = score;
    } else {
      score = 0;
      document.querySelector(".message").textContent = "You Lost The Game :(";
      document.querySelector(".score").textContent = score;
    }
  } else if (theGuess < secretNum) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "Too Low Guess :(";
      document.querySelector(".score").textContent = score;
    } else {
      score = 0;
      document.querySelector(".message").textContent = "You Lost The Game :(";
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start Guessing ...";
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  secretNum = Math.trunc(Math.random() * 20) + 1;
});
