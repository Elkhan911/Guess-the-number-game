const input1 = document.querySelector("#_input1");
const span1 = document.querySelector("#_span1");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const computerNumber = getRandom(0, 50);
console.log(computerNumber);

input1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (input1.value > computerNumber) {
      span1.textContent = "вы ввели значние БОЛЬШЕ";
    }

    if (input1.value < computerNumber) {
      span1.textContent = "вы ввели значние МЕНЬШЕ";
    }

    if (input1.value == computerNumber) {
      span1.textContent = "БИНГО! Вы угадали";
    }
  }
});
