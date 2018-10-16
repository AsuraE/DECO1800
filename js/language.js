/**
  *  Sets the specified modal to be displayed.
  *  Adds in event listener for clicking off modal to close it.
  */
function modalOpen(modalName) {
  modal = document.getElementById(modalName);
  modal.style.display = "block";

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}

/**
  * Sets the specified modal to be hidden.
  */
function modalClose(modalName) {
  document.getElementById(modalName).style.display = "none";
  document.getElementById("quiz").style.display="none";
  document.getElementById("start").style.visibility="visible";
  document.getElementById("start").style.display="block";
}
/*
  quiz stuff
*/
/*
{
  question format

  image: ,
  engWord,
  choices[String] ,
  correctAnswer
}
*/
var questions = [{
  image: "./images/memory game/bird.png",
  question: "Bird",
  choices: [2, 5, 10, 15],
  correctAnswer: 2
}, {
  image: "./images/memory game/snake_carpet.png",
  question: "Carpet Snake",
  choices: [3, 6, 9, 12],
  correctAnswer: 3
}, {
  image: "./images/memory game/crow.png",
  question: "Crow",
  choices: [72, 99, 108, 134],
  correctAnswer: 0
}, {
  image: "./images/memory game/dingo.png",
  question: "Dingo/Wild Dog",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}, {
  image: "./images/memory game/eagle.png",
  question: "Eagle",
  choices: [20, 30, 40, 50],
  correctAnswer: 2
}, {
  image: "./images/memory game/emu.png",
  question: "Emu",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}, {
  image: "./images/memory game/fish.png",
  question: "Fish",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}, {
  image: "./images/memory game/horse.png",
  question: "Horse",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}, {
  image: "./images/memory game/kangaroo.png",
  question: "Kangaroo",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}, {
  image: "./images/memory game/koala.png",
  question: "Koala",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}, {
  image: "./images/memory game/pelican.png",
  question: "Pelican",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}, {
  image: "./images/memory game/possum.png",
  question: "Possum",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}, {
  image: "./images/memory game/shark.png",
  question: "Shark",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}, {
  image: "./images/memory game/snake.png",
  question: "Black Snake",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}, {
  image: "./images/memory game/sugarglider.png",
  question: "Sugar Glider",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}, {
  image: "./images/memory game/wallaby.png",
  question: "Wallaby",
  choices: [4, 5, 6, 7],
  correctAnswer: 3
}];

var questionCounter = 0;
var userAns;
var language;

/*
start quiz
*/
function startQuiz() {
  document.getElementById("quiz").style.display="block";
  document.getElementById("quiz").style.visibility="visible";
  document.getElementById("start").style.display="none";
  createQuiz(questionCounter);
  userAns = getAnswer();
  if (userAns != null) {
    checkAnswer(userAns);
  }
}

/*
advance to the next question
*/
function advanceQuiz() {
  if (questionCounter == questions.length) {
    document.getElementById("finish").style.display="block";
    document.getElementById("finish").style.visibility="visible";
    document.getElementById("nextQuestion").style.display="none";
  } else {
    userAns = getAnswer();
    checkAnswer(userAns);
  }
}

function getAnswer() {
  var answers = document.getElementsByName('answer');
  var checkedAnswer;
  for(var i = 0; i < answers.length; i++){
      if(answers[i].checked){
          checkedAnswer = answers[i].value;
          return checkedAnswer;
      }
    }
}

function checkAnswer(answer) {
  if (answer == null) {
    alert("Please pick your answer");
  } else if (answer == questions[questionCounter].correctAnswer) {
    alert("Correct");
    questionCounter ++;
    createQuiz(questionCounter);
  } else {
    alert("Wrong");
  }

}

/*
create questions for quiz

index(int): question index
*/
function createQuiz(index) {

  document.getElementById("engWord").innerHTML = questions[index].question;
  document.getElementById("quizImg").src = questions[index].image;

  var col1 = document.getElementById("col1");
  var col2 = document.getElementById("col2");

  if (col1.innerHTML != "" && col2.innerHTML != "") {
    col1.innerHTML = "";
    col2.innerHTML = "";
  }

   for (var i = 0; i < questions[index].choices.length; i++) {

    var choice = '<input type="radio" name="answer" value=' + i + ' />';
    choice += questions[index].choices[i] + "<br>";

    if (i+1 <= 2)
      document.getElementById("col1").innerHTML += choice;
    else
      document.getElementById("col2").innerHTML += choice;
   }

}
