import { quizData } from './data.js';

let currentQuestion = 0;
let score = 0;
let currentQuestions = [];
let currentTopicKey = '';

const topicBtns = document.querySelectorAll('.topic-btn');
const questionZone = document.getElementById('question-zone');
const topicZone = document.getElementById('topic-zone');
const btn1 = document.getElementById('b1');
const btn2 = document.getElementById('b2');

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