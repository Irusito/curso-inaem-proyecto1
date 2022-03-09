'use strict';

// numero aleatorio

let n;

function randomN() {
  n = Math.trunc(Math.random() * 6);
}

// defino mis elementos del DOM mediante vairables js

let score0, totalScore0, score1, totalScore1;

const score0Field = document.getElementById('current--0');
const totalScore0Field = document.getElementById('score--0');

const score1Field = document.getElementById('current--1');
const totalScore1Field = document.getElementById('score--1');

const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
const resetBtn = document.querySelector('.btn--new');

const imageDice = document.getElementsByClassName('dice');

// reset

resetBtn.addEventListener('click', initApp);

function initApp() {
  const INIT_SCORE = 0;
  totalScore1 = INIT_SCORE;
  totalScore1 = INIT_SCORE;
  score0 = INIT_SCORE;
  score1 = INIT_SCORE;

  randomN();
}

// roll

rollBtn.addEventListener('click', rollDice);

function rollDice() {
  randomN();

  // imagen aleatoria

  imageDice.src = `dice-${n}.png`;

  if (n === 1) {
    // pasa el turno
    score0 = 0;
  } else {
    score0 += n;
    score0Field.textContent = score0;
  }
}

// hold

holdBtn.addEventListener('click', holdScore);

function holdScore() {
  totalScore0 += score0;
  totalScore0Field.textContent = totalScore0;
  score0 = 0;
}
