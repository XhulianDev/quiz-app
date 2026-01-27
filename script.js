import { quizData } from './data.js';

let currentQuestion = 0;
let score = 0;
let currentQuestions = [];
let currentTopicKey = "";

const topicBtns = document.querySelectorAll('.topic-btn');
const questionZone = document.getElementById('question-zone');
const topicZone = document.getElementById('topic-zone');

topicBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentTopicKey = btn.dataset.topic;
    currentQuestions = quizData[currentTopicKey];
    startQuiz();
  });
});

function startQuiz() {
  topicZone.style.display = "none";
  questionZone.style.display = "block";
}