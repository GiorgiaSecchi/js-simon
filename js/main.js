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
  userInput[0].focus();
};

//# Prendere i valori degli input al click del bottone

const userInput = document
  .getElementById("input-div")
  .getElementsByClassName("user-input");
console.log(userInput);

const outputResult = buttonEl.addEventListener("click", () => {
  let combinedInputValue = [];

  for (let i = 0; i < userInput.length; i++) {
    const currentValue = parseInt(userInput.value);
    combinedInputValue += userInput[i].value;

    // if (i < userInput.length - 1) {
    //   combinedInputValue += ", ";
    // }
  }

  //* Verificare quanti(tot) e quali numeri random combaciano con i numeri input
  const correctNumbers = arrayRandomNumbers.filter((num) =>
    combinedInputValue.includes(num)
  );

  const correctCount = correctNumbers.length;

  console.log(correctNumbers);
  console.log(correctCount);

  // resultEl.innerText = combinedInputValue;
  resultEl.innerText = `Totale indovinati: ${correctCount}
  Numeri indovinati: ${correctNumbers.join(", ")} `;
});
