let currentQuestion = 0;

// Funksioni për të shfaqur pyetjen bazuar në indeks
function showQuestion(index) {
  const questionZone = document.getElementById("question-zone"); // Marrim zonën e pyetjeve
  const questionTitle = questionZone.querySelector("h2");       // Gjejmë <h2> brenda saj
  const questionText = questionZone.querySelector("p");        // Gjejmë <p> brenda saj
  const button1 = document.getElementById("b1");               // Marrim butonin e parë
  const button2 = document.getElementById("b2");               // Marrim butonin e dytë

  // Lista e pyetjeve – e zhvendosim këtu që të jetë e disponueshme për të gjithë
  const physicsQuestions = [
    { title: "Pyetja 1", text: "Çfarë është F = ma?", answers: ["Ligji i Njutonit", "Ekuacioni i Ajnshtajnit"] },
    { title: "Pyetja 2", text: "Kush e zbuloi gravitetin?", answers: ["Njutoni", "Ajnshtajni"] },
    { title: "Pyetja 3", text: "Çfarë matet me m/s²?", answers: ["Nxitimi", "Shpejtësia"] }
  ];

  // Vendosim titullin, tekstin dhe përgjigjet nga physicsQuestions[index]
  questionTitle.textContent = physicsQuestions[index].title;
  questionText.textContent = physicsQuestions[index].text;
  button1.textContent = physicsQuestions[index].answers[0];
  button2.textContent = physicsQuestions[index].answers[1];
  button1.dataset.answer = physicsQuestions[index].answers[0]; // Opsionale, për logjikë të mëvonshme
  button2.dataset.answer = physicsQuestions[index].answers[1];
}

function startPhysics() {
  const topicZone = document.getElementById("topic-zone");
  const questionZone = document.getElementById("question-zone");

  topicZone.style.display = "none";  // Fshih zonën e temave
  questionZone.style.display = "block"; // Shfaq zonën e pyetjeve

  showQuestion(currentQuestion); // Shfaq pyetjen e parë (indeksi 0)
}