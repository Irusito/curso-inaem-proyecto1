'use strict';

// numero aleatorio

let n;

function randomN() {
  n = Math.trunc(Math.random() * 6 + 1);
}

// defino mis elementos del DOM mediante vairables js

let score0 = 0;
let score1 = 0;
let totalScore0 = 0;
let totalScore1 = 0;

let player0 = true;
let player1 = false;

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

resetBtn.addEventListener('click', initApp);

function initApp() {
  const INIT_SCORE = 0;
  totalScore0 = INIT_SCORE;
  totalScore1 = INIT_SCORE;
  score0 = INIT_SCORE;
  score1 = INIT_SCORE;
  totalScore0Field.textContent = totalScore0;
  totalScore1Field.textContent = totalScore1;
  score0Field.textContent = score0;
  score1Field.textContent = score1;
  randomN();
}

// roll

rollBtn.addEventListener('click', rollDice);

function rollDice() {
  // numero aleatorio
  randomN();

  // imagen aleatoria

  const imageDice = `dice-${n}.png`;

  dice.src = imageDice;

  if (n === 1) {
    if (player0 === true) {
      score0 = 0;
      score0Field.textContent = score0;
      player1 = true;
      player0 = false;
      player0Background.classList.remove('player--active');
      player1Background.classList.add('player--active');
    } else {
      score1 = 0;
      score1Field.textContent = score1;
      player0 = true;
      player1 = false;
      player0Background.classList.add('player--active');
      player1Background.classList.remove('player--active');
    }
  } else {
    if (player0 === true) {
      score0 += n;
      score0Field.textContent = score0;
    } else {
      score1 += n;
      score1Field.textContent = score1;
    }
  }

  console.log(n);
  console.log(score0);
  console.log(player0);
  console.log(player1);
}

// hold

holdBtn.addEventListener('click', holdScore);

function holdScore() {
  if (player0 === true) {
    totalScore0 += score0;
    totalScore0Field.textContent = totalScore0;
    score0 = 0;

    if (totalScore0 >= 100) {
      player0Background.classList.add('player--winner');
      //    se desactiva el botón de roll dice
    }

    player1 = true;
    player0 = false;
    player0Background.classList.remove('player--active');
    player1Background.classList.add('player--active');
  } else {
    totalScore1 += score1;
    totalScore1Field.textContent = totalScore1;
    score1 = 0;

    if (totalScore1 >= 100) {
      player1Background.classList.add('player--winner');
      //    se desactiva el botón de roll dice
    }
    player0 = true;
    player1 = false;
    player0Background.classList.add('player--active');
    player1Background.classList.remove('player--active');
  }

  console.log(player0);
  console.log(player1);
}
