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
  image: "./images/memory_game/bird.png",
  question: "Bird", //0
  choices: [
    [12, 5, 10, 0],
    [7, 0, 2, 15],
    [0, 5, 10, 13],
    [5, 10, 0, 6]
  ]
}, {
  image: "./images/memory_game/snake_carpet.png",
  question: "Carpet Snake", //1
  choices:  [
    [10, 6, 1, 12],
    [7, 1, 8, 14],
    [15, 0, 4, 1],
    [1, 3, 11, 9]
  ]
}, {
  image: "./images/memory_game/crow.png",
  question: "Crow", //2
  choices: [
    [14, 2, 8, 10],
    [1, 6, 3, 2],
    [2, 1, 8, 5],
    [13, 12, 2, 5]
  ]
}, {
  image: "./images/memory_game/dingo wild dog.png",
  question: "Dingo/Wild Dog", //3
  choices: [
    [3, 5, 13, 2],
    [15, 5, 11, 3],
    [1, 2, 3, 6],
    [1, 3, 7, 8]
  ]
}, {
  image: "./images/memory_game/eagle.png",
  question: "Eagle", //4
  choices: [
    [2, 11, 0, 4],
    [12, 4, 2, 7],
    [4, 9, 6, 2],
    [13, 3, 4, 15]
  ]
}, {
  image: "./images/memory_game/emu.png",
  question: "Emu", //5
  choices: [
    [4, 5, 15, 10],
    [13, 11, 3, 5],
    [5, 13, 0, 12],
    [8, 14, 5, 7]
  ]
}, {
  image: "./images/memory_game/fish.png",
  question: "Fish", //6
  choices: [
    [6, 1, 2, 12],
    [13, 15, 0, 6],
    [10, 6, 13, 15],
    [5, 3, 6, 12]
  ]
}, {
  image: "./images/memory_game/horse.png",
  question: "Horse", //7
  choices: [
    [10, 1, 7, 6],
    [11, 3, 2, 7],
    [2, 7, 3, 12],
    [7, 10, 9, 11]
  ]
}, {
  image: "./images/memory_game/kangaroo.png",
  question: "Kangaroo", //8
  choices: [
    [8, 5, 13, 2],
    [15, 8, 4, 11],
    [12, 2, 8, 6],
    [1, 13, 7, 8]
  ]
}, {
  image: "./images/memory_game/koala.png",
  question: "Koala", //9
  choices: [
    [13, 1, 9, 12],
    [13, 9, 0, 4],
    [10, 1, 13, 9],
    [9, 6, 3, 12]
  ]
}, {
  image: "./images/memory_game/pelican.png",
  question: "Pelican", //10
  choices: [
    [4, 3, 15, 10],
    [13, 11, 10, 7],
    [13, 10, 0, 12],
    [10, 14, 3, 7]
  ]
}, {
  image: "./images/memory_game/possum.png",
  question: "Possum", //11
  choices: [
    [2, 0, 11, 9],
    [4, 12, 2, 11],
    [12, 11, 6, 2],
    [11, 3, 4, 15]
  ]
}, {
  image: "./images/memory_game/shark.png",
  question: "Shark", //12
  choices: [
    [10, 12, 13, 6],
    [2, 3, 12, 13],
    [12, 2, 3, 7],
    [11, 10, 9, 12]
  ]
}, {
  image: "./images/memory_game/snake.png",
  question: "Black Snake", //13
  choices: [
    [14, 2, 13, 10],
    [1, 6, 3, 13],
    [13, 1, 8, 5],
    [12, 13, 2, 5]
  ]
}, {
  image: "./images/memory_game/sugar glider.png",
  question: "Sugar Glider", //14
  choices: [
    [10, 14, 6, 12],
    [14, 7, 8, 1],
    [15, 0, 4, 14],
    [3, 14, 11, 19]
  ]
}, {
  image: "./images/memory_game/wallaby.png",
  question: "Wallaby", //15
  choices: [
    [12, 5, 15, 10],
    [7, 0, 2, 15],
    [5, 15, 10, 13],
    [15, 10, 1, 6]
  ]
}];

var questionCounter = 0;
var userAns;
var language;
var clickEvent = 0;

/*
start quiz
*/
function startQuiz(languageIndex) {
  document.getElementById("quiz").style.display="block";
  document.getElementById("quiz").style.visibility="visible";
  document.getElementById("start").style.display="none";
  language = languageIndex;
  createQuiz(questionCounter, language);
}

/*
advance to the next question
*/
function advanceQuiz() {
  //Check if all of the questions have been answered
  if (questionCounter == 15) {
    document.getElementById("finish").style.display="block";
    document.getElementById("finish").style.visibility="visible";
    document.getElementById("nextQuestion").style.display="none";
    questionCounter = 0;
    return 1;
  }
  /*Check whether the user has chosen the right answer
  before advancing
  */
  if (clickEvent == 0) {
    alert("Please pick the correct answer");
    return 2;
  }

  questionCounter++;
  createQuiz(questionCounter, language);
  clickEvent = 0;
  return 0;
}

function resetQuiz() {
  modalClose("quizModal");
  questionCounter = 0;
  clickEvent = 0;

  document.getElementById("start").style.display="block";
  document.getElementById("start").style.visibility="visible";
  document.getElementById("quiz").style.display="none";

  document.getElementById("nextQuestion").style.display="block";
  document.getElementById("nextQuestion").style.visibility="visible";
  document.getElementById("finish").style.display="none";
}

/*
create questions for quiz

index(int): question index
*/

function checkAnswer(language, id) {
  userAns = id.innerHTML;
  var correct = animalWords[language][questionCounter];

  if (userAns != correct) {
    id.style.color = "red";
    id.style.animation = "shake 2s";
  }

  else {
    id.style.color = "green";
    clickEvent += 1;
  }

}

function createQuiz(index, language) {

  document.getElementById("engWord").innerHTML = questions[index].question;
  document.getElementById("quizImg").src = questions[index].image;

  if (document.getElementById("quizContainer") != "")
    document.getElementById("quizContainer").innerHTML = "";

   for (var i = 0; i < questions[index].choices[language].length; i++) {

    var answer = "answer" + i;
    var wordIndex = questions[index].choices[language][i];
    var choice = '<div id=' + answer + ' " class="answers">';

    choice += animalWords[language][wordIndex] + "</div>";

    document.getElementById("quizContainer").innerHTML += choice;
    document.getElementById(answer).setAttribute("onclick", "checkAnswer(" + language + ", " + answer + ")");
 }
}
