const quizQuestions = [
  { question: "What is the capital of India?", answer: "new delhi" },
  { question: "Who is the inventor of HTML language", answer: "Tim Berners Lee"},
  { question: "What does css stands for?" , answer: "Cascading style sheet"},
  { question: "Which symbol is used for comments in Python programming language?", answer: "#" },
  { question: "What is the minimum voting age in India", answer: "18" },
  { question: "How many vedas are there in Hindu religion", answer:"4"},
  { question: "Who won the Asia cup 2025 T20", answer:"India"}
];
// function to run the quiz
function playQuiz() {
  let score = 0; //initial score of quiz

  for (let i = 0; i < quizQuestions.length; i++) {

    let userAnswer = prompt(quizQuestions[i].question);

    userAnswer = userAnswer.toLowerCase().trim();
     //checks user,s answer whether it is correct or not
    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct answer!");
      score++; // give a point when user gives correct answer
    } else {
      alert("Incorrect answer! The right answer is: " + quizQuestions[i].answer);
    }
  }

  // show final score of user out of all question
  alert(" Congratulations ,You scored " + score + " out of " + quizQuestions.length);
}
//Run the quiz
playQuiz();