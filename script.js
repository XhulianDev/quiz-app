const physicsQuestions = [
    { title: "Pyetja 1", text: "Cfare eshte F = ma?", answers: ["Ligji i Njutonit", "Ekuacioni i Ajnshtajnit"], correct: 
      "Ligji i Njutonit" },
    { title: "Pyetja 2", text: "Kush e zbuloi gravitetin?", answers: ["Njutoni", "Ajnshtajni"], correct: "Njutoni" },
    { title: "Pyetja 3", text: "Cfare matet me m/s²?", answers: ["Nxitimi", "Shpejtesia"], correct: "Nxitimi" },
    { title: "Pyetja 4", text: "Cila eshte shpejtesia e drites ne vakum?", answers: ["300,000 km/s", "150,000 km/s"], correct: 
      "300,000 km/s" },
    { title: "Pyetja 5", text: "Cfare eshte energjia potenciale?", answers: ["Energji nga lëvizja", "Energji nga pozicioni"], 
    correct: "Energji nga pozicioni" },
    { title: "Pyetja 6", text: "Kush e zhvilloi teorine e relativitetit?", answers: ["Ajnshtajni", "Galileu"], correct: 
      "Ajnshtajni" }
  ];

let currentQuestion = 0;

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
  
}

function startPhysics() {
  const topicZone = document.getElementById("topic-zone");
  const questionZone = document.getElementById("question-zone");
  const button1 = document.getElementById("b1");
  const button2 = document.getElementById("b2");
  const correctAnswer = document.getElementById("answer");

  topicZone.style.display = "none";
  questionZone.style.display = "block";

  showQuestion(currentQuestion);
  
  button1.addEventListener("click", function() {
    if (button1.dataset.answer === physicsQuestions[currentQuestion].correct) {
      correctAnswer.textContent = "Sakte!";
      correctAnswer.style.color = "green";
    } else {
      correctAnswer.textContent = "Gabim!";
      correctAnswer.style.color = "red";
    }
    if (currentQuestion < 5) {
      currentQuestion = currentQuestion + 1;
      setTimeout(() => showQuestion(currentQuestion), 1000);
    }
  });
  
  button2.addEventListener("click", function() {
    if (button2.dataset.answer === physicsQuestions[currentQuestion].correct) {
      correctAnswer.textContent = "Sakte!";
      correctAnswer.style.color = "green";
    } else {
      correctAnswer.textContent = "Gabim!";
      correctAnswer.style.color = "red";
    }
    if (currentQuestion < 5) {
      currentQuestion = currentQuestion + 1;
      setTimeout(() => showQuestion(currentQuestion), 1000);
    }
  });
  
  
}