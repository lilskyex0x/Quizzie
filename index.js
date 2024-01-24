const api =
  "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const resetBtn = document.querySelector(".reset__btn");
const userScore = document.querySelector(".score");
const questionText = document.querySelector(".question");

const answerChoices = document.querySelector("#choices");
