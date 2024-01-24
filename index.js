const api =
  "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const resetBtn = document.querySelector(".reset__btn");
const userScore = document.querySelector(".score");
const questionText = document.querySelector(".question");

const answerChoices = document.querySelector("#choices");

for (let i = 1; i < 5; i++) {
  const radioBox = document.createElement("input");
  const li = document.createElement("li");

  radioBox.type = "radio";
  radioBox.name = "answer";
  radioBox.value = "answer" + i;
  radioBox.classList.add("radio__box");
  li.innerHTML = `Answer${i} `;
  li.appendChild(radioBox);
  answerChoices.appendChild(li);
}
