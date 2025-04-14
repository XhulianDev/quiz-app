const physicsQuestions = [
  { title: "Pyetja 1", text: "Çfarë është F = ma?", answers: ["Ligji i Njutonit", "Ekuacioni i Ajnshtajnit"], correct: "Ligji i Njutonit" },
  { title: "Pyetja 2", text: "Kush e zbuloi gravitetin?", answers: ["Njutoni", "Ajnshtajni"], correct: "Njutoni" },
  { title: "Pyetja 3", text: "Çfarë matet me m/s²?", answers: ["Nxitimi", "Shpejtësia"], correct: "Nxitimi" },
  { title: "Pyetja 4", text: "Cila është shpejtësia e dritës në vakum?", answers: ["300,000 km/s", "150,000 km/s"], correct: "300,000 km/s" },
  { title: "Pyetja 5", text: "Çfarë është energjia potenciale?", answers: ["Energji nga lëvizja", "Energji nga pozicioni"], correct: "Energji nga pozicioni" },
  { title: "Pyetja 6", text: "Kush e zhvilloi teorinë e relativitetit?", answers: ["Ajnshtajni", "Galileu"], correct: "Ajnshtajni" }
];

const historyQuestions = [
  { title: "Pyetja 1", text: "Cili udhëheqës shqiptar u quajt 'Atleti i Krishtërimit'?", answers: ["Gjergj Kastrioti Skënderbeu", "Ali Pashë Tepelena"], correct: "Gjergj Kastrioti Skënderbeu" },
  { title: "Pyetja 2", text: "Cila ngjarje në 1789 shënoi fillimin e Revolucionit Francez?", answers: ["Rënia e Bastijës", "Traktati i Versajës"], correct: "Rënia e Bastijës" },
  { title: "Pyetja 3", text: "Kush ishte perandori që kurorëzoi veten në 1804 si Napoleon I?", answers: ["Napoleon Bonaparte", "Luigji XVI"], correct: "Napoleon Bonaparte" },
  { title: "Pyetja 4", text: "Cila luftë midis 1337 dhe 1453 u zhvillua kryesisht mes Anglisë dhe Francës?", answers: ["Lufta Njëqindvjeçare", "Lufta Tridhjetëvjeçare"], correct: "Lufta Njëqindvjeçare" },
  { title: "Pyetja 5", text: "Cili traktat në 1648 i dha fund Luftës Tridhjetëvjeçare në Evropë?", answers: ["Traktati i Vestfalisë", "Traktati i Tordesillas"], correct: "Traktati i Vestfalisë" },
  { title: "Pyetja 6", text: "Kush udhëhoqi Anglinë gjatë Luftës së Dytë Botërore si kryeministër?", answers: ["Winston Churchill", "Neville Chamberlain"], correct: "Winston Churchill" }
];

let currentQuestion = 0;
let score = 0;
let currentQuestions = physicsQuestions; // Për të ndjekur cilat pyetje përdoren

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = `Pikët: ${score}`;
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
  const questionZone = document.getElementById("question-zone");
  const resultZone = document.getElementById("result-zone");
  resultZone.style.display = "none";
  topicZone.style.display = "block";
  updateScoreDisplay();
}

function startPhysics() {
  const topicZone = document.getElementById("topic-zone");
  const questionZone = document.getElementById("question-zone");
  const resultZone = document.getElementById("result-zone");
  topicZone.style.display = "none";
  questionZone.style.display = "block";
  resultZone.style.display = "none";
  currentQuestion = 0;
  score = 0;
  currentQuestions = physicsQuestions; // Vendos Fizikën si aktive
  showQuestion(currentQuestion, currentQuestions);
}

function startHistory() {
  const topicZone = document.getElementById("topic-zone");
  const questionZone = document.getElementById("question-zone");
  const resultZone = document.getElementById("result-zone");
  topicZone.style.display = "none";
  questionZone.style.display = "block";
  resultZone.style.display = "none";
  currentQuestion = 0;
  score = 0;
  currentQuestions = historyQuestions; // Vendos Historinë si aktive
  showQuestion(currentQuestion, currentQuestions);
}

const button1 = document.getElementById("b1");
const button2 = document.getElementById("b2");
const correctAnswer = document.getElementById("answer");

button1.addEventListener("click", () => {
  if (button1.dataset.answer === currentQuestions[currentQuestion].correct) {
    correctAnswer.textContent = "Saktë!";
    correctAnswer.style.color = "green";
    score++;
    updateScoreDisplay();
  } else {
    correctAnswer.textContent = "Gabim!";
    correctAnswer.style.color = "red";
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
      document.getElementById("result-message").textContent = `Kuizi mbaroi! Pikët: ${score}/${currentQuestions.length}`;
    }, 1000);
  }
});

button2.addEventListener("click", () => {
  if (button2.dataset.answer === currentQuestions[currentQuestion].correct) {
    correctAnswer.textContent = "Saktë!";
    correctAnswer.style.color = "green";
    score++;
    updateScoreDisplay();
  } else {
    correctAnswer.textContent = "Gabim!";
    correctAnswer.style.color = "red";
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
      document.getElementById("result-message").textContent = `Kuizi mbaroi! Pikët: ${score}/${currentQuestions.length}`;
    }, 1000);
  }
});