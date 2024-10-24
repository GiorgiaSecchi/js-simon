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
