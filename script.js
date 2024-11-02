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

// starting condtions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

let currentScore = 0;
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
    // display the currentscore on the current player
    current0Element.textContent = currentScore; //CHANGE LATER
  } else {
    // Switch to next player
  }
});
