'use strict';
// numero aleatorio

let n;
function randomN() {
  n = Math.trunc(Math.random() * 6 + 1);
}

// defino mis elementos del DOM mediante vairables js

const INIT_SCORE = 0;
let score0 = INIT_SCORE;
let score1 = INIT_SCORE;
let totalScore0 = INIT_SCORE;
let totalScore1 = INIT_SCORE;

let player = 0;

const score0Field = document.getElementById('current--0');
const totalScore0Field = document.getElementById('score--0');

const score1Field = document.getElementById('current--1');
const totalScore1Field = document.getElementById('score--1');

const player0Background = document.querySelector('.player--0');
const player1Background = document.querySelector('.player--1');

const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
const resetBtn = document.querySelector('.btn--new');

const dice = document.querySelector('.dice');

totalScore0Field.textContent = totalScore0;
totalScore1Field.textContent = totalScore1;

// reset

resetBtn.addEventListener('click', resetApp);

function resetApp() {
  totalScore0 = INIT_SCORE;
  totalScore1 = INIT_SCORE;
  score0 = INIT_SCORE;
  score1 = INIT_SCORE;
  totalScore0Field.textContent = totalScore0;
  totalScore1Field.textContent = totalScore1;
  score0Field.textContent = score0;
  score1Field.textContent = score1;
  player0Background.classList.remove('player--winner');
  player1Background.classList.remove('player--winner');
  player0Background.classList.add('player--active');
  player1Background.classList.remove('player--active');
  randomN();
  rollBtn.disabled = false;
  holdBtn.disabled = false;
  rollBtn.style.opacity = '1';
  holdBtn.style.opacity = '1';
  player = 0;
}

// roll

rollBtn.addEventListener('click', rollDice);

function rollDice() {
  // numero aleatorio
  randomN();

  // imagen aleatoria
  const imageDice = `dice-${n}.png`;

  dice.src = imageDice;

  // si sale 1
  if (n === 1) {
    if (player === 0) {
      score0 = 0;
      score0Field.textContent = score0;
      switchPlayer();
    } else {
      score1 = 0;
      score1Field.textContent = score1;
      switchPlayer();
    }
  } // si no sale 1
  else {
    if (player === 0) {
      score0 += n;
      score0Field.textContent = score0;
    } else {
      score1 += n;
      score1Field.textContent = score1;
    }
  }
}

// hold
holdBtn.addEventListener('click', holdScore);

function holdScore() {
  if (player === 0) {
    totalScore0 += score0;
    totalScore0Field.textContent = totalScore0;
    score0 = 0;
    score0Field.textContent = score0;

    if (totalScore0 >= 100) {
      player0Background.classList.add('player--winner');
      hideBtns();
    }

    switchPlayer();
  } else {
    totalScore1 += score1;
    totalScore1Field.textContent = totalScore1;
    score1 = 0;
    score1Field.textContent = score1;

    if (totalScore1 >= 100) {
      player1Background.classList.add('player--winner');
      hideBtns();
    }
    switchPlayer();
  }
  console.log(player);
}

function hideBtns() {
  rollBtn.disabled = true;
  holdBtn.disabled = true;
  rollBtn.style.opacity = '0.5';
  holdBtn.style.opacity = '0.5';
}

function changeBackground() {
  player0Background.classList.toggle('player--active');
  player1Background.classList.toggle('player--active');
}

// si es true significa que player es = 1, y pasará a 0, si es false (player=0) pasará a 1; (Jugar con 0/1 false/true)
function switchPlayer() {
  player = player ? 0 : 1;
  changeBackground();
}
