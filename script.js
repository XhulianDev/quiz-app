function startPhysics() {
  const topicZone = document.getElementById("topic-zone");
  const questionZone = document.getElementById("question-zone");
  const questionTitle = questionZone.querySelector("h2");
  const questionText = questionZone.querySelector("p");
  
  // questionTitle.textContent = "Pyetja 2";
  // questionText.textContent = "Kush e zbuloi gravitetin?";
  
  // questionTitle.textContent = "Pyetja 3";
  // questionText.textContent = "Cfare matet me m/s²?";
  
  topicZone.style.display = "none";
  questionZone.style.display = "block";
  
  const physicsQuestions = [
    { title: "Pyetja 1", text: "Cfare eshte F = ma?", answers: ["Ligji i Njutonit", "Ekuacioni i Ajnshtajnit"] },
  ];
    
  questionTitle.textContent = physicsQuestions[0].title;
  questionText.textContent = physicsQuestions[0].text;
  
  const button1 = document.getElementById("b1");
  const answer1 = physicsQuestions[0].answers[0];
  button1.dataset.answer = answer1;
  
  const button2 = document.getElementById("b2");
  const answer2 = physicsQuestions[0].answers[1];
  button2.dataset.answer = answer2;
  
  button1.textContent = answer1;
  button2.textContent = answer2;
}