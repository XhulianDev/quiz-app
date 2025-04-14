const physicsQuestions = [
  { title: "Pyetja 1", text: "Çfarë është F = ma?", answers: ["Ligji i Njutonit", "Ekuacioni i Ajnshtajnit"], correct:
    "Ligji i Njutonit" },
  { title: "Pyetja 2", text: "Kush e zbuloi gravitetin?", answers: ["Njutoni", "Ajnshtajni"], correct: "Njutoni" },
  { title: "Pyetja 3", text: "Çfarë matet me m/s²?", answers: ["Nxitimi", "Shpejtësia"], correct: "Nxitimi" },
  { title: "Pyetja 4", text: "Cila është shpejtësia e dritës në vakum?", answers: ["300,000 km/s", "150,000 km/s"], correct: 
    "300,000 km/s" },
  { title: "Pyetja 5", text: "Çfarë është energjia potenciale?", answers: ["Energji nga lëvizja", "Energji nga pozicioni"], 
    correct: "Energji nga pozicioni" },
  { title: "Pyetja 6", text: "Kush e zhvilloi teorinë e relativitetit?", answers: ["Ajnshtajni", "Galileu"], correct:
    "Ajnshtajni" }
];

let currentQuestion = 0;
let score = 0;

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = `Pikët: ${score}`;
}

function showQuestion(index) {
  const questionZone = document.getElementById("question-zone");
  const questionTitle = questionZone.querySelector("h2");
  const questionText = questionZone.querySelector("p");
  const button1 = document.getElementById("b1");
  const button2 = document.getElementById("b2");
  const correctAnswer = document.getElementById("answer");

  questionTitle.textContent = physicsQuestions[index].title;
  questionText.textContent = physicsQuestions[index].text;
  button1.textContent = physicsQuestions[index].answers[0];
  button2.textContent = physicsQuestions[index].answers[1];
  button1.dataset.answer = physicsQuestions[index].answers[0];
  button2.dataset.answer = physicsQuestions[index].answers[1];
  correctAnswer.textContent = "";
  updateScoreDisplay(); // Përditëso pikët këtu
}

function startPhysics() {
  const topicZone = document.getElementById("topic-zone");
  const questionZone = document.getElementById("question-zone");
  const resultZone = document.getElementById("result-zone");
  const button1 = document.getElementById("b1");
  const button2 = document.getElementById("b2");
  const correctAnswer = document.getElementById("answer");
  const startAgain = document.getElementById("startAgain");

  topicZone.style.display = "none";
  questionZone.style.display = "block";
  resultZone.style.display = "none";

  showQuestion(currentQuestion);
  
  button1.addEventListener("click", function() {
    if (button1.dataset.answer === physicsQuestions[currentQuestion].correct) {
      correctAnswer.textContent = "Saktë!";
      correctAnswer.style.color = "green";
      score++;
      updateScoreDisplay(); // Përditëso pikët menjëherë
    } else {
      correctAnswer.textContent = "Gabim!";
      correctAnswer.style.color = "red";
    }
    if (currentQuestion < physicsQuestions.length - 1) {
      currentQuestion++;
      setTimeout(() => showQuestion(currentQuestion), 1000);
    } else {
      setTimeout(() => {
        questionZone.style.display = "none";
        resultZone.style.display = "block";
        resultZone.textContent = `Kuizi mbaroi! Pikët: ${score}/${physicsQuestions.length}`;
        resultZone.textContent = startAgain;
      }, 1000);
    }
  });
  
  button2.addEventListener("click", function() {
    if (button2.dataset.answer === physicsQuestions[currentQuestion].correct) {
      correctAnswer.textContent = "Saktë!";
      correctAnswer.style.color = "green";
      score++;
      updateScoreDisplay(); // Përditëso pikët menjëherë
    } else {
      correctAnswer.textContent = "Gabim!";
      correctAnswer.style.color = "red";
    }
    if (currentQuestion < physicsQuestions.length - 1) {
      currentQuestion++;
      setTimeout(() => showQuestion(currentQuestion), 1000);
    } else {
      setTimeout(() => {
        questionZone.style.display = "none";
        resultZone.style.display = "block";
        resultZone.textContent = `Kuizi mbaroi! Pikët: ${score}/${physicsQuestions.length}`;
        resultZone.textContent = startAgain;
        startOver.textContent = "block";
      }, 1000);
    }
  });
}