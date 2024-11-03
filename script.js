// The idea is that we roll a dice, you can roll as much time as you want with the current score updating automatically
// but if we roll a zero, our current is changed to 0, we also have the context of holding the game for
// the next player to play

"use strict";

// selecting elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const playerActive = document.querySelector(".player--active");

// starting condtions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
// rolling dice functioality
btnRoll.addEventListener("click", function () {
  // Generating a random dice
  const dice = Math.ceil(Math.random() * 6);

  // Display the dice
  diceElement.classList.remove("hidden");
  diceElement.src = `/Images/dice-${dice}.png`;

  // Check for rolled 1
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  // add current score to active player score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //check if score is >= 100
  if (scores[activePlayer] >= 20) {
    //finish the game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  } else {
    //switch to next player
    switchPlayer();
  }
});
