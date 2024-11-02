// The idea is that we roll a dice, you can roll as much time as you want with the current score updating automatically
// but if we roll a zero, our current is changed to 0, we also have the context of holding the game for
// the next player to play

"use strict";

// selecting elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");

// starting condtions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");
