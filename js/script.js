"use strict";

const player0 = document.getElementById("player0");
const player1 = document.getElementById("player1");

let image = document.querySelector(".dice");
const imgArea = document.querySelector(".image-area");

let currentScore0 = document.querySelector("#currentScoreP0");
let currentScore1 = document.getElementById("currentScoreP1");
let currScore = 0;
currentScore0.textContent = currScore;

const rollBtn = document.getElementById("roll");
rollBtn.addEventListener("click", function () {
  const randDice = Math.trunc(Math.random() * 6) + 1;
  imgArea.classList.remove("hide");
  image.src = `pics/${randDice}.png`;
  if (randDice !== 1) {
    currScore += randDice;
    currentScore0.textContent = currScore;
  }
});
