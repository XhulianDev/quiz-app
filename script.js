import { quizData } from './data.js';

sessionStorage.clear();

let currentQuestion = 0;
let score = 0;
let currentQuestions = [];
let currentTopicKey = '';

const topicBtns = document.querySelectorAll('.topic-btn');
const questionZone = document.getElementById('question-zone');
const resultZone = document.getElementById('result-zone');
const topicZone = document.getElementById('topic-zone');
const btn1 = document.getElementById('b1');
const btn2 = document.getElementById('b2');
const startAgainBtn = document.getElementById('startAgain');

topicBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentTopicKey = btn.dataset.topic;
    currentQuestions = quizData[currentTopicKey];
    startQuiz();
  });
});

function startQuiz() {
  topicZone.style.display = 'none';
  questionZone.style.display = 'block';
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = currentQuestions[currentQuestion];
  questionZone.querySelector('h2').textContent = q.title;
  questionZone.querySelector('p').textContent = q.text;

  [btn1, btn2].forEach((btn, i) => {
    btn.textContent = q.answers[i];
    btn.dataset.answer = q.answers[i];
    btn.disabled = false;
  });

  document.getElementById('answer').textContent = '';
}

[btn1, btn2].forEach(button => {
  button.addEventListener('click', () => {
    const feedback = document.getElementById('answer');
    const isCorrect = button.dataset.answer === currentQuestions[currentQuestion].correct;

    if (isCorrect) {
      feedback.textContent = 'Saktë!';
      feedback.style.color = '#007015';
      score++;
    } else {
      feedback.textContent = 'Gabim!';
      feedback.style.color = '#cc0a11';
    }

    btn1.disabled = true;
    btn2.disabled = true;

    setTimeout(() => {
      if (currentQuestion < currentQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
      } else {
        finishQuiz();
      }  
    }, 1000);
  });
});

function finishQuiz() {
  questionZone.style.display = 'none';
  resultZone.style.display = 'block';

  const percentage = ((score / currentQuestions.length) * 100).toFixed(2);

  sessionStorage.setItem(`${currentTopicKey}Percentage`, percentage);

  const resultMessage = document.getElementById('result-message');
  resultMessage.textContent = `Kuizi mbaroi! Pikët: ${score}/${currentQuestions.length} (${percentage}%)`;
  resultMessage.className = percentage >= 50 ? 'pass' : 'fail';
}

startAgainBtn.addEventListener('click', () => {
  resultZone.style.display = 'none';
  topicZone.style.display = 'block';
  updateScoreDisplay();
});

function updateScoreDisplay() {
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
    const percentage = sessionStorage.getItem(subject.key);
    if (percentage) {
      hasResults = true;
      const className = parseFloat(percentage) >= 50 ? 'pass' : 'fail';
      scoresList += `<li class='${className}'>${subject.name}: ${percentage}%</li>`;
    }
  });

  scoresList += "</ul>";
  const displayDiv = document.getElementById("scores-display");
  if (displayDiv) {
    displayDiv.innerHTML = hasResults ? `<h4>Arritjet tuaja:</h4>${scoresList}` : '';
  }
}

updateScoreDisplay();