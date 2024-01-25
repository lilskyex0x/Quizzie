const api =
  "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const resetBtn = document.querySelector(".reset__btn");
const userScore = document.querySelector(".score");

const answerChoices = document.querySelector("#choices");

window.onload = async () => {
  const response = await fetch(api);
  const data = await response.json();

  init(data);
};

const init = (data) => {
  const questionText = document.querySelector(".question");
  let currentQuestionIndex = 0;
  let questions = {};
  let questionsDiv = "";

  questions = data.results;
  questionsDiv = questions.map((question) => {
    return `
    <div class="question__container">
      <h3 class="question">${question.question}</h3>
      <ul class="answer__choices">
        <li class="answer__choice"><input type="radio" value="${question.correct_answer}"/>${question.correct_answer}</li>
        <li class="answer__choice"><input type="radio" value="${question.incorrect_answers[0]}"/>${question.incorrect_answers[0]}</li>
        <li class="answer__choice"><input type="radio" value="${question.incorrect_answers[1]}"/>${question.incorrect_answers[1]}</li>
        <li class="answer__choice"><input type="radio" value="${question.incorrect_answers[2]}"/>${question.incorrect_answers[2]}</li>
      </ul>
    </div>
    `;
  });
  return (questionText.innerHTML = questionsDiv[currentQuestionIndex]);
};
