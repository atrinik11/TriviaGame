var timer = 0;
var totalquestion = 0;
var correctanswers = 0;
var wronganswers = 0;

/*mainpage = document.getElementById("main-page");
geography = document.getElementById("geography");
history = document.getElementById("history");
science = document.getElementById("science");
computer = document.getElementById("computer");
sport = document.getElementById("sport");
gk = document.getElementById("gk");*/
modalWindow = document.getElementById("modal-window");
/*returnmain = document.getElementById("return-main");
replay = document.getElementById("replay");
paragraph = document.getElementById("para");
correctans = audio(../images/win.mp3);
wrongans = audio(../images/lost.mp3);*/
var time = 10;
var intervalId;
var displayTimer = document.getElementById("timer").innerHTML;
var displayCorrect = createElement("h3", "Total Correct Answers: ");
var displayWrong = createElement("h3", "Total Wrong Answers: ");
var displayScore = createElement("h3", "Total Score: ");


function run(){
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function stop() {
  clearInterval(intervalId);
}

function finalScore() {
  displayCorrect;
  displayWrong;
  displayScore;
}

function decrement(){
  time--;
  console.log("time");
  displayTimer = "<h2>Time Left: " + time + "</h2>";
  console.log(time);
  if (time == 0){
    stop();
    modalWindow.style.display = 'block';
    finalScore();
  }
}
run();







/*Declaring and initializing the variables...........................


function geoFunction() {
  mainpage.style.display = 'none';
  var para1 = document.createElement("p");
  var para2 = document.createElement("p");
  var para3 = document.createElement("p");
  var para4 = document.createElement("p");
  var para5 = document.createElement("p");
  var para6 = document.createElement("p");
  var para7 = document.createElement("p");
  var para8 = document.createElement("p");
  var para9 = document.createElement("p");
  var para10 = document.createElement("p");
  var t = document.createTextNode("What is the longest river in Africa?");
  para.appendChild(t);
  document.getElementById("quiz-page").appendChild(para);
}

geography.innerHTML = geoFunction()""*/
