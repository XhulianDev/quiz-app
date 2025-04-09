let currentQuestion = 0;

function showQuestion(index) {
  const questionZone = document.getElementById("question-zone");
  const questionTitle = questionZone.querySelector("h2");
  const questionText = questionZone.querySelector("p");
  const button1 = document.getElementById("b1");
  const button2 = document.getElementById("b2");

  const physicsQuestions = [
    { title: "Pyetja 1", text: "Çfarë është F = ma?", answers: ["Ligji i Njutonit", "Ekuacioni i Ajnshtajnit"] },
    { title: "Pyetja 2", text: "Kush e zbuloi gravitetin?", answers: ["Njutoni", "Ajnshtajni"] },
    { title: "Pyetja 3", text: "Çfarë matet me m/s²?", answers: ["Nxitimi", "Shpejtësia"] }
  ];

  questionTitle.textContent = physicsQuestions[index].title;
  questionText.textContent = physicsQuestions[index].text;
  button1.textContent = physicsQuestions[index].answers[0];
  button2.textContent = physicsQuestions[index].answers[1];
  button1.dataset.answer = physicsQuestions[index].answers[0];
  button2.dataset.answer = physicsQuestions[index].answers[1];
}

function startPhysics() {
  const topicZone = document.getElementById("topic-zone");
  const questionZone = document.getElementById("question-zone");
  const button1 = document.getElementById("b1"); // Deklarojmë këtu
  const button2 = document.getElementById("b2"); // Deklarojmë këtu

  topicZone.style.display = "none";
  questionZone.style.display = "block";

  showQuestion(currentQuestion);
  
  button1.addEventListener("click", function() {
    currentQuestion = currentQuestion + 1;
    showQuestion(currentQuestion);
  });
  button2.addEventListener("click", function() {
    currentQuestion = currentQuestion + 1;
    showQuestion(currentQuestion);
  });
}