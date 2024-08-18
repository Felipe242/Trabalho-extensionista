const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();

export default [
  {
    question: "Quanto é 1 + 2?",
    answers: [
      { option: "3", correct: true },
      { option: "2", correct: false },
      { option: "4", correct: false },
    ],
  },

  {
      question: "Quanto é 15 + 16?",
      answers: [
        { option: "14", correct: false },
        { option: "31", correct: true },
        { option: "34", correct: false },
      ],

  },

  {
      question: "Quanto é 10 - 6?",
      answers: [
        { option: "8", correct: false },
        { option: "6", correct: false },
        { option: "4", correct: true },
      ],

  },

  {
      question: "Quanto é 16 - 4?",
      answers: [
        { option: "8", correct: false },
        { option: "10", correct: false },
        { option: "12", correct: true },
      ],
  },
  
  {
    question: "Quanto é 5 x 2?",
    answers: [
      { option: "9", correct: false },
      { option: "10", correct: true },
      { option: "11", correct: false },
    ],
  },
  {
    question: "Quanto é 10 x 8?",
    answers: [
      { option: "800", correct: false },
      { option: "90", correct: false },
      { option: "80", correct: true },
    ],
  },
  {
    question: "Quanto é 18 ÷ 2 ?",
    answers: [
      { option: "9", correct: true },
      { option: "8", correct: false },
      { option: "10", correct: false },
    ],
    
  },

  {
      question: "Quanto é 30 ÷ 3 ?",
    answers: [
      { option: "15", correct: false },
      { option: "7", correct: false },
      { option: "10", correct: true },
    ],
    
  },

  {
      question: "Qual é a raiz quadrada de 64?",
answers: [
  { option: "8", correct: true },
  { option: "6", correct: false },
  { option: "4", correct: false },
],

  },

  {
      question: "Quanto é 2 elevado à potência de 5?",
answers: [
  { option: "10", correct: false },
  { option: "32", correct: true },
  { option: "25", correct: false },
],


  },


];

