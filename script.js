import { quizData } from './data.js';

let currentQuestion = 0;
let score = 0;
let currentQuestions = [];
let currentTopicKey = "";

document.addEventListener("DOMContentLoaded", () => {
  const keys = [
    "physicsPercentage",
    "biologyPercentage",
    "geographyPercentage",
    "historyPercentage",
    "psychologyPercentage",
    "anthropologyPercentage",
    "literaturePercentage",
    "philosophyPercentage",
    "visualArtsPercentage"
  ];
  keys.forEach(key => sessionStorage.removeItem(key));
  updateScoresDisplay();
});

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = `Pikët: ${score}`;
}

function updateScoresDisplay() {
  const subjects = [
    { name: "Fizikë", key: "physicsPercentage" },
    { name: "Biologji", key: "biologyPercentage" },
    { name: "Gjeografi", key: "geographyPercentage" },
    { name: "Histori", key: "historyPercentage" },
    { name: "Psikologji", key: "psychologyPercentage" },
    { name: "Antropologji", key: "anthropologyPercentage" },
    { name: "Letërsi", key: "literaturePercentage" },
    { name: "Filozofi", key: "philosophyPercentage" },
    { name: "Arte Vizuale", key: "visualArtsPercentage" }
  ];
  let hasResults = false;
  let scoresList = "<ul>";
  subjects.forEach(subject => {
    let percentage = sessionStorage.getItem(subject.key);
    if (percentage) {
      hasResults = true;
      const className = parseFloat(percentage) >= 50 ? "pass" : "fail";
      scoresList += `<li class="${className}">${subject.name}: ${percentage}%</li>`;
    }
  });
  scoresList += "</ul>";
  document.getElementById("scores-display").innerHTML = hasResults ? `<h4>Arritjet:</h4>${scoresList}` : "";
}

function showQuestion(index, questions) {
  const questionZone = document.getElementById("question-zone");
  const questionTitle = questionZone.querySelector("h2");
  const questionText = questionZone.querySelector("p");
  const button1 = document.getElementById("b1");
  const button2 = document.getElementById("b2");
  const correctAnswer = document.getElementById("answer");

  questionTitle.textContent = questions[index].title;
  questionText.textContent = questions[index].text;
  button1.textContent = questions[index].answers[0];
  button2.textContent = questions[index].answers[1];
  button1.dataset.answer = questions[index].answers[0];
  button2.dataset.answer = questions[index].answers[1];
  correctAnswer.textContent = "";
  updateScoreDisplay();
  button1.disabled = false;
  button2.disabled = false;
}

function startOver() {
  currentQuestion = 0;
  score = 0;
  const topicZone = document.getElementById("topic-zone");
  const resultZone = document.getElementById("result-zone");
  resultZone.style.display = "none";
  topicZone.style.display = "block";
  updateScoreDisplay();
  updateScoresDisplay();
}

function startQuiz(questions) {
  document.getElementById("topic-zone").style.display = "none";
  document.getElementById("question-zone").style.display = "block";
  currentQuestion = 0;
  score = 0;
  currentQuestions = questions;
  showQuestion(currentQuestion, currentQuestions);
}

const button1 = document.getElementById("b1");
const button2 = document.getElementById("b2");
const correctAnswer = document.getElementById("answer");

button1.addEventListener("click", () => {
  if (button1.dataset.answer === currentQuestions[currentQuestion].correct) {
    correctAnswer.textContent = "Saktë!";
    correctAnswer.style.color = "#007015";
    score++;
    updateScoreDisplay();
  } else {
    correctAnswer.textContent = "Gabim!";
    correctAnswer.style.color = "#cc0a11";
  }
  button1.disabled = true;
  button2.disabled = true;
  if (currentQuestion < currentQuestions.length - 1) {
    currentQuestion++;
    setTimeout(() => showQuestion(currentQuestion, currentQuestions), 1000);
  } else {
    setTimeout(() => {
      document.getElementById("question-zone").style.display = "none";
      document.getElementById("result-zone").style.display = "block";
      let percentage = (score / currentQuestions.length) * 100;
      let subjectKey = currentQuestions === physicsQuestions ? "physicsPercentage" :
                       currentQuestions === biologyQuestions ? "biologyPercentage" :
                       currentQuestions === geographyQuestions ? "geographyPercentage" :
                       currentQuestions === historyQuestions ? "historyPercentage" :
                       currentQuestions === psychologyQuestions ? "psychologyPercentage" :
                       currentQuestions === anthropologyQuestions ? "anthropologyPercentage" :
                       currentQuestions === literatureQuestions ? "literaturePercentage" :
                       currentQuestions === philosophyQuestions ? "philosophyPercentage" :
                       currentQuestions === visualArtsQuestions ? "visualArtsPercentage" : "";
      sessionStorage.setItem(subjectKey, percentage.toFixed(2));
      const resultMessage = document.getElementById("result-message");
      resultMessage.textContent = `Kuizi mbaroi! Pikët: ${score}/${currentQuestions.length} (${percentage.toFixed(2)}%)`;
      resultMessage.className = percentage >= 50 ? "pass" : "fail";
    }, 1000);
  }
});

button2.addEventListener("click", () => {
  if (button2.dataset.answer === currentQuestions[currentQuestion].correct) {
    correctAnswer.textContent = "Saktë!";
    correctAnswer.style.color = "#007015";
    score++;
    updateScoreDisplay();
  } else {
    correctAnswer.textContent = "Gabim!";
    correctAnswer.style.color = "#cc0a11";
  }
  button1.disabled = true;
  button2.disabled = true;
  if (currentQuestion < currentQuestions.length - 1) {
    currentQuestion++;
    setTimeout(() => showQuestion(currentQuestion, currentQuestions), 1000);
  } else {
    setTimeout(() => {
      document.getElementById("question-zone").style.display = "none";
      document.getElementById("result-zone").style.display = "block";
      let percentage = (score / currentQuestions.length) * 100;
      let subjectKey = currentQuestions === physicsQuestions ? "physicsPercentage" :
                       currentQuestions === biologyQuestions ? "biologyPercentage" :
                       currentQuestions === geographyQuestions ? "geographyPercentage" :
                       currentQuestions === historyQuestions ? "historyPercentage" :
                       currentQuestions === psychologyQuestions ? "psychologyPercentage" :
                       currentQuestions === anthropologyQuestions ? "anthropologyPercentage" :
                       currentQuestions === literatureQuestions ? "literaturePercentage" :
                       currentQuestions === philosophyQuestions ? "philosophyPercentage" :
                       currentQuestions === visualArtsQuestions ? "visualArtsPercentage" : "";
      sessionStorage.setItem(subjectKey, percentage.toFixed(2));
      const resultMessage = document.getElementById("result-message");
      resultMessage.textContent = `Kuizi mbaroi! Pikët: ${score}/${currentQuestions.length} (${percentage.toFixed(2)}%)`;
      resultMessage.className = percentage >= 50 ? "pass" : "fail";
    }, 1000);
  }
});

document.getElementById("home-link").addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    startOver();
    document.getElementById("topic-zone").style.display = "block";
    document.getElementById("question-zone").style.display = "none";
    document.getElementById("result-zone").style.display = "none";
  }, 200);
});
