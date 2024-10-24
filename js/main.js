// Generare 5 numeri casuali da 1 a 99

let listRandomNumber = [];

function randomNumber() {
  for (let i = 0; i < 5; i++) {
    listRandomNumber.push(Math.floor(Math.random() * 99) + 1);
  }
  return listRandomNumber;
}

listRandomNumber = randomNumber();
console.log(listRandomNumber);

// timer 30 secondi

const timerEl = document.getElementById("timer");

let seconds = 30;

const timer = setInterval(countdown, 1000);

function countdown() {
  if (seconds <= 0) {
    clearInterval(timer);
  } else {
    timerEl.innerHTML = seconds;
    seconds--;
  }
}

// const outputNumberRandom = document.getElementById("list-number-random");

// const outputNumberRandom = listRandomNumber;
// console.log(outputNumberRandom);
