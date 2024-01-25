const api =
  "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

const previousBtn = document.querySelector(".previous");
const userScore = document.querySelector(".score");
const questionText = document.querySelector(".question");
const resetBtn = document.querySelector(".reset__btn");
const nextBtn = document.querySelector(".next");
const answerChoices = document.querySelector("#choices");

let questions = {};
let currentQuestionIndex = 0;
let questionsDiv = "";

window.onload = async () => {
  const response = await fetch(api);
  const data = await response.json();

  init(data);
  nextQuestion();
  previousQuestion();
  resetQuiz();
};

const init = (data) => {
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
  renderQuestion();
};

const nextQuestion = () => {
  nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    }
  });
};

const previousQuestion = () => {
  previousBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  });
};

const resetQuiz = () => {
  resetBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    renderQuestion();
  });
};

const renderQuestion = () => {
  questionText.innerHTML = questionsDiv[currentQuestionIndex];
};
