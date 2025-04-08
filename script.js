function startPhysics() {
  const topicZone = document.getElementById("topic-zone");
  const questionZone = document.getElementById("question-zone");
  
  const button1 = document.getElementById("b1");
  const answer1 = button1.dataset.answer;
  
  const button2 = document.getElementById("b2");
  const answer2 = button2.dataset.answer;
  
  topicZone.style.display = "none";
  questionZone.style.display = "block";
  
  button1.textContent = answer1;
  button2.textContent = answer2;
}