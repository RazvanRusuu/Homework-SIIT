"use strict";

const playBtn = document.querySelector(".btn--play");

const imgUserEl = document.querySelector(".img--user");
const imgComputerEl = document.querySelector(".img--computer");
const scoreUserEl = document.querySelector(".score-content--user");
const scoreComputerEl = document.querySelector(".score-content--computer");
const winner = document.querySelector(".winner");
const winnerLabel = document.querySelector(".winner-label");
const player1El = document.querySelector(".player--1");
const player2El = document.querySelector(".player--2");

function hideImg() {
  imgComputerEl.classList.add("hidden");
  imgUserEl.classList.add("hidden");
}
function displayImg() {
  imgComputerEl.classList.remove("hidden");
  imgUserEl.classList.remove("hidden");
}
hideImg();

let roundWinner;
let string = "";
let rock = 1;
let scissor = 2;
let paper = 3;
let arrayUrl = [
  "https://i.ibb.co/pbMhHNZ/img-1.png",
  "https://i.ibb.co/MVwdMp0/img-2.png",
  "https://i.ibb.co/9pZ3RcD/img-3.png",
];
playBtn.addEventListener("click", () => {
  const numberUser = Math.trunc(Math.random() * 3 + 1);
  const numberComputer = Math.trunc(Math.random() * 3 + 1);
  console.log(numberUser, numberComputer);
  imgComputerEl.src = arrayUrl[numberComputer - 1];
  imgUserEl.src = arrayUrl[numberUser - 1];
  displayImg();

  if (numberUser === numberComputer) {
    string = "Draw! Play Again";
  } else if (numberUser === rock && numberComputer === scissor) {
    string = "user";
  } else if (numberUser === rock && numberComputer === paper) {
    string = "computer";
  } else if (numberUser === scissor && numberComputer === rock) {
    string = "computer";
  } else if (numberUser === scissor && numberComputer === paper) {
    string = "user";
  } else if (numberUser === paper && numberComputer === scissor) {
    string = "computer";
  } else if (numberComputer === paper && numberComputer === rock) {
    string = "user";
  }

  winner.textContent = string;
  winner.style.color = "Green";
});
