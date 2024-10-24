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

let seconds = 3;

const timer = setInterval(countdown, 1000);

function countdown() {
  if (seconds < 0) {
    clearInterval(timer);
    // la funzione che rimuove allo scadere tutti i display-none agli elementi
    removeDisplayNone();
    listRandomNumberEl.classList.add("d-none");
  } else {
    timerEl.innerHTML = seconds;
    seconds--;
  }
}

//# Elementi con display-none

const instructionEl = document.getElementById("instruction");
const inputDivEl = document.getElementById("input-div");
const buttonEl = document.getElementById("button");
const resultEl = document.getElementById("result");

const removeDisplayNone = () => {
  instructionEl.classList.remove("d-none");
  inputDivEl.classList.remove("d-none");
  buttonEl.classList.remove("d-none");
  resultEl.classList.remove("d-none");
};

//# Prendere i valori degli input al click del bottone

//! PERCHè MI DA "UNDEFINED" ???
const userInput = document
  .getElementById("input-div")
  .getElementsByClassName("user-input");
console.log(userInput);

const prova = buttonEl.addEventListener("click", () => {
  let combinedInputValue = "";

  for (let i = 0; i < userInput.length, i++; ) {
    combinedInputValue += userInput[i].value;

    if (i < userInput.length - 1) {
      combinedInputValue += ", ";
    }
  }

  resultEl.innerText = combinedInputValue;
  console.log(prova);
});

// const numbersMatched = () => {
//     if (inputValue)
// };
