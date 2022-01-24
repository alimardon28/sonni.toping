'use strict';

let elCheckBtn = document.querySelector('.check');
let elGuessInput = document.querySelector('.guess');
let elMessage = document.querySelector('.message');
let elSecretNumber = document.querySelector('.number');
let elScore = document.querySelector('.score');
let elHighScore = document.querySelector('.highscore');
let elAgain = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 10;
let highscore = 0;

elCheckBtn.addEventListener('click', function () {
  let guessValue = elGuessInput.value * 1;

  if (!guessValue) {
    elMessage.textContent = 'Iltimos son kiriting!';
  } else if (guessValue === secretNumber) {
    elMessage.textContent = 'Topdingiz!';
    elSecretNumber.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    elCheckBtn.disabled = true;
    if (score > highscore) {
      highscore = score;
      elHighScore.textContent = highscore;
    }
  } else if (guessValue !== secretNumber) {
    elMessage.textContent =
      guessValue > secretNumber ? 'Bu raqam katta' : 'Bu raqam kichik';
    score--;
    elScore.textContent = score;
    if (score <= 0) {
      elMessage.textContent = 'Game Over!';
      elCheckBtn.disabled = true;
      document.body.style.backgroundColor = '#ff0000';
    }
  }
});

elAgain.addEventListener('click', function () {
  score = 10;
  elScore.textContent = score;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  elSecretNumber.textContent = '?';
  document.body.style.backgroundColor = '#222';
  elGuessInput.value = '';
  elCheckBtn.disabled = false;
  elMessage.textContent = 'Loading...';
});
