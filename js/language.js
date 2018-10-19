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
}


/*
progress bar
*/



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

var animalWords = [
  ["Juwanbin", "Kabul", "Wawal", "Mirri", "Juwehrr", "Nguyi", "Jawan", "Yarraman", "Barrar", "Dumbirrbi", "Bulualum", "Kubbi", "Powai", "Bui", "Chibur", "Garril"],

  ["Juwahnduwan", "Kabul", "Wagan", "Mirri", "Juwehrr", "Ngurun", "Guyurr","Yarraman", "Barrar", "Marrambi", "Bulualum", "Kubbi", "Powai", "Bui", "Chibur", "Garril"],

  ["Noangbil", "Kabul", "Wagahn", "Ngurun", "Mibunn", "Murun", "Jalumm", "Yarraman", "Muni", "Borobi", "Chungarra", "Guran", "Powai", "Jomgwong", "Jiburr", "Karil"],

  ["Juwahnduwan", "Kabul", "Wowa", "Mirri", "Dibbil", "Nguyi", "Kuyur", "Yarraman", "Gurooman", "Dumbirrbi", "Bulualum", "Kubbi", "Powai", "Tumgu", "Chibur", "Garril"]
];

var questions = [{
  image: "./images/memory game/bird.png",
  question: "Bird", //0
  choices: [
    [12, 5, 10, 0],
    [7, 0, 2, 15],
    [0, 5, 10, 13],
    [5, 10, 0, 6]
  ],
  correctAnswer: [3,1,0,2]
}, {
  image: "./images/memory game/snake_carpet.png",
  question: "Carpet Snake", //1
  choices:  [
    [10, 6, 1, 12],
    [7, 1, 8, 14],
    [15, 0, 4, 1],
    [1, 3, 11, 9]
  ],
  correctAnswer: [2, 1, 3, 0]
}, {
  image: "./images/memory game/crow.png",
  question: "Crow", //2
  choices: [
    [14, 2, 8, 10],
    [1, 6, 3, 2],
    [2, 1, 8, 5],
    [13, 12, 2, 5]
  ],
  correctAnswer: [1, 3, 0, 2]
}, {
  image: "./images/memory game/dingo.png",
  question: "Dingo/Wild Dog", //3
  choices: [
    [3, 5, 13, 2],
    [15, 5, 11, 3],
    [1, 2, 3, 6],
    [1, 3, 7, 8]
  ],
  correctAnswer: [0, 3, 2, 1]
}, {
  image: "./images/memory game/eagle.png",
  question: "Eagle", //4
  choices: [
    [2, 11, 0, 4],
    [12, 4, 2, 7],
    [4, 9, 6, 2],
    [13, 3, 4, 15]
  ],
  correctAnswer: [3, 1, 0, 2]
}, {
  image: "./images/memory game/emu.png",
  question: "Emu", //5
  choices: [
    [4, 5, 15, 10],
    [13, 11, 3, 5],
    [5, 13, 0, 12],
    [8, 14, 5, 7]
  ],
  correctAnswer: [1, 3, 0, 2]
}, {
  image: "./images/memory game/fish.png",
  question: "Fish", //6
  choices: [
    [6, 1, 2, 12],
    [13, 15, 0, 6],
    [10, 6, 13, 15],
    [5, 3, 6, 12]
  ],
  correctAnswer: [0, 3, 1, 2]
}, {
  image: "./images/memory game/horse.png",
  question: "Horse", //7
  choices: [
    [10, 1, 7, 6],
    [11, 3, 2, 7],
    [2, 7, 3, 12],
    [7, 10, 9, 11]
  ],
  correctAnswer: [2, 3, 1, 0]
}, {
  image: "./images/memory game/kangaroo.png",
  question: "Kangaroo", //8
  choices: [
    [8, 5, 13, 2],
    [15, 8, 4, 11],
    [12, 2, 8, 6],
    [1, 13, 7, 8]
  ],
  correctAnswer: [0, 1, 2, 3]
}, {
  image: "./images/memory game/koala.png",
  question: "Koala", //9
  choices: [
    [13, 1, 9, 12],
    [13, 9, 0, 4],
    [10, 1, 13, 9],
    [9, 6, 3, 12]
  ],
  correctAnswer: [2, 1, 3, 0]
}, {
  image: "./images/memory game/pelican.png",
  question: "Pelican", //10
  choices: [
    [4, 3, 15, 10],
    [13, 11, 10, 7],
    [13, 10, 0, 12],
    [10, 14, 3, 7]
  ],
  correctAnswer: [3, 2, 1, 0]
}, {
  image: "./images/memory game/possum.png",
  question: "Possum", //11
  choices: [
    [2, 0, 11, 9],
    [4, 12, 2, 11],
    [12, 11, 6, 2],
    [11, 3, 4, 15]
  ],
  correctAnswer: [2, 3, 1, 0]
}, {
  image: "./images/memory game/shark.png",
  question: "Shark", //12
  choices: [
    [10, 12, 13, 6],
    [2, 3, 12, 13],
    [12, 2, 3, 7],
    [11, 10, 9, 12]
  ],
  correctAnswer: [1, 2, 0, 3]
}, {
  image: "./images/memory game/snake.png",
  question: "Black Snake", //13
  choices: [
    [14, 2, 13, 10],
    [1, 6, 3, 13],
    [13, 1, 8, 5],
    [12, 13, 2, 5]
  ],
  correctAnswer: [2, 3, 0, 1]
}, {
  image: "./images/memory game/sugarglider.png",
  question: "Sugar Glider", //14
  choices: [
    [10, 14, 6, 12],
    [14, 7, 8, 1],
    [15, 0, 4, 14],
    [3, 14, 11, 19]
  ],
  correctAnswer: [1, 0, 3, 2]
}, {
  image: "./images/memory game/wallaby.png",
  question: "Wallaby", //15
  choices: [
    [12, 5, 15, 10],
    [7, 0, 2, 15],
    [5, 15, 10, 13],
    [15, 10, 1, 6]
  ],
  correctAnswer: [2, 3, 1, 0]
}];

var questionCounter = 0;
var userAns;
var language;

/*
start quiz
*/
function startQuiz(languageIndex) {
  document.getElementById("quiz").style.display="block";
  document.getElementById("quiz").style.visibility="visible";
  document.getElementById("start").style.display="none";
  language = languageIndex;
  createQuiz(questionCounter, language);
  userAns = getAnswer();
  if (userAns != null) {
    checkAnswer(userAns);
  }
}

/*
advance to the next question
*/
function advanceQuiz() {
  if (questionCounter == 2) {
    document.getElementById("finish").style.display="block";
    document.getElementById("finish").style.visibility="visible";
    document.getElementById("nextQuestion").style.display="none";
  } else {
    if (getAnswer() == null) {
      alert("Please pick your answer");
      return null;
    }
    var temp = getAnswer();
    userAns = temp[0];
    ansID = temp[1];
    checkAnswer(userAns, ansID);
  }
}

function getAnswer() {
  var answers = document.getElementsByName('answer');
  var checkedAnswer;
  for(var i = 0; i < answers.length; i++){
      if(answers[i].checked){
          checkedAnswer = answers[i].value;
          return [checkedAnswer, i];
      }
    }
}

function checkAnswer(answer, id) {
  if (answer == questions[questionCounter].correctAnswer[language]) {
    alert("Awesome work! You got it right!");
    questionCounter ++;
    createQuiz(questionCounter, language);
  } else {
    alert("Sorry, that wasn't correct. Why don't you try again?");
    document.getElementById("answer" + id).style.border = "2px solid red";
  }
}

/*
create questions for quiz

index(int): question index
*/
function createQuiz(index, language) {

  document.getElementById("engWord").innerHTML = questions[index].question;
  document.getElementById("quizImg").src = questions[index].image;

  if (document.getElementById("quizContainer") != "")
    document.getElementById("quizContainer").innerHTML = "";

   for (var i = 0; i < questions[index].choices[language].length; i++) {

    var answer = "answer" + i;
    var wordIndex = questions[index].choices[language][i];
    var choice = '<div id=' + answer + '><input type="radio" name="answer" value=' + i + ' />';

    choice += animalWords[language][wordIndex] + "</div>";

    document.getElementById("quizContainer").innerHTML += choice;

 }
}
