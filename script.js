function startPhysics() {
  const topicZone = document.getElementById("topic-zone");
  const questionZone = document.getElementById("question-zone");
  const questionTitle = questionZone.querySelector("h2");
  const questionText = questionZone.querySelector("p");
  
  questionTitle.textContent = "Pyetja 2";
  questionText.textContent = "Kush e zbuloi gravitetin?";
  
  questionTitle.textContent = "Pyetja 3";
  questionText.textContent = "Cfare matet me m/s²?";
  
  const button1 = document.getElementById("b1");
  const answer1 = button1.dataset.answer;
  
  const button2 = document.getElementById("b2");
  const answer2 = button2.dataset.answer;
  
  topicZone.style.display = "none";
  questionZone.style.display = "block";
  
  button1.textContent = answer1;
  button2.textContent = answer2;
}