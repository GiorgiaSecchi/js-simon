//# Generare 5 numeri casuali da 1 a 99

let arrayRandomNumbers = [];

function generateRandomNumbers() {
  for (let i = 0; i < 5; i++) {
    arrayRandomNumbers.push(Math.floor(Math.random() * 99) + 1);
  }
  return arrayRandomNumbers;
}

arrayRandomNumbers = generateRandomNumbers();
console.log(arrayRandomNumbers);

//# inserire i 5 numeri nella lista html

const listRandomNumberEl = document.getElementById("list-random-number");

function insertNumberList() {
  randomNumbers = arrayRandomNumbers;

  randomNumbers.forEach((number) => {
    let listItem = document.createElement("li");
    listItem.textContent = number;
    listRandomNumberEl.appendChild(listItem);
  });
}

outputListNumbers = insertNumberList();

//# timer 30 secondi al caricamento pagina

const timerEl = document.getElementById("timer");

let seconds = 30;

const timer = setInterval(countdown, 1000);

function countdown() {
  if (seconds < 0) {
    clearInterval(timer);
  } else {
    timerEl.innerHTML = seconds;
    seconds--;
  }
}
