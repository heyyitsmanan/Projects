"use strict";

//* Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//* Starting Conditions

let scores, currentScore, activePlayer, arePlaying;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  arePlaying = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (arePlaying) {
    //* 1. Generating a random number

    const dice = Math.trunc(Math.random() * 6) + 1;

    //* 2. Display the dice

    diceEl.classList.remove("hidden");
    diceEl.src = `Images/dice-${dice}.png`;

    //* 3. Check for rolled 1 and if true, switch to next player

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (arePlaying) {
    //* 1. Adding the current score to the main score

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //* 2. Check if the player score is less than 100

    if (scores[activePlayer] >= 20) {
      arePlaying = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
    //* If greater than 100 then that player wins, otherwise switch the player
  }
});

btnNew.addEventListener("click", function () {
  init();
});
