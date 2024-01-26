const api_URL =
  "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

const previousBtn = document.querySelector(".previous");
const userScore = document.querySelector(".score");
const questionText = document.querySelector(".question");
const resetBtn = document.querySelector(".reset__btn");
const nextBtn = document.querySelector(".next");

let questions = {};
let currentQuestionIndex = 0;
let questionsDiv = "";

window.onload = async () => {
  const response = await fetch(api_URL);
  const data = await response.json();

  init(data);
  nextQuestion();
  previousQuestion();
  resetQuiz();
};

const renderQuestion = () => {
  questionText.innerHTML = questionsDiv[currentQuestionIndex];
};

const init = (data) => {
  questions = data.results;
  questionsDiv = questions.map((question) => {
    const allAnswers = [];
    allAnswers.push(question.correct_answer, ...question.incorrect_answers);
    allAnswers.sort(() => Math.random() - 0.5);
    question.allAnswers = allAnswers;

    return `
    <div class="question__container">
    <h3 class="question">${question.question}</h3>
    <ul class="answer__choices">
    <li class="answer__choice"><input type="radio" name="answer" value="${allAnswers[0]}"/>${allAnswers[0]}</li>
    <li class="answer__choice"><input type="radio" name="answer" value="${allAnswers[1]}"/>${allAnswers[1]}</li>
    <li class="answer__choice"><input type="radio" name="answer" value="${allAnswers[2]}"/>${allAnswers[2]}</li>
    <li class="answer__choice"><input type="radio" name="answer" value="${allAnswers[3]}"/>${allAnswers[3]}</li>
    </ul>
    </div>
    `;
  });
  renderQuestion();
};

const nextQuestion = () => {
  nextBtn.addEventListener("click", () => {
    const checkedAnswer = document.querySelector(
      "input[name='answer']:checked"
    );
    const correctAnswer = questions[currentQuestionIndex].correct_answer;

    if (checkedAnswer === null) return alert("Please select an answer");

    checkedAnswer.value === correctAnswer
      ? userScore.innerHTML++
      : userScore.innerHTML--;

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
    userScore.innerHTML = 0;
    location.reload();
    renderQuestion();
  });
};
