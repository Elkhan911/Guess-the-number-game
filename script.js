const input1 = document.querySelector("#_input1");
const span1 = document.querySelector("#_span1");
const span2 = document.querySelector("#_span2");
const span3 = document.querySelector("#_span3");
const restartBtn = document.querySelector("#_restartBtn");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const computerNumber = getRandom(1, 50);
console.log(computerNumber);

let userMove = 0;

function isItNaNOrEmpty(value) {
  if (
    isNaN(Number(value)) ||
    value == "" ||
    value == " " ||
    value == "   " ||
    value > 50
  ) {
    alert("Нужно ввести число. Число должны быть меньше 50");
    return false;
  } else value = "";
  return true;
}

input1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (isItNaNOrEmpty(this.value)) {
      userMove++;
      span2.textContent = userMove;

      if (input1.value > computerNumber) {
        span1.textContent = "вы ввели значние БОЛЬШЕ";
      }

      if (input1.value < computerNumber) {
        span1.textContent = "вы ввели значние МЕНЬШЕ";
      }

      if (input1.value == computerNumber) {
        span1.textContent = "БИНГО! Вы победили";
      }
    }
    checkResult();
    input1.value = "";
  }
});

function checkResult() {
  if (Number(span2.textContent) <= 10 && span1.textContent.includes("БИНГО!")) {
    span3.textContent = "Поздравляем, Вы одолели компьютер!";
    input1.setAttribute("disabled", true);
  }
  if (Number(span2.textContent) > 10 && !span1.textContent.includes("БИНГО!")) {
    span3.textContent = `В этот раз вы потерпели поражение. Правильный ответ был: ${computerNumber}`;
    input1.setAttribute("disabled", true);
  }
}
