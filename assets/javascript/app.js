//Initializing the variables....................................
var timeLeft = 10;
var intervalId;
var correctAns = 0;
var wrongAns = 0;

console.log("hello");
//This function displayTimer is called when the start button is clicked......................
function displayTimer() {
     //Creating the run function which will display the question page with the countdown timer...................
     console.log("I'm inside displayTimer");
    function run() {
        //Displaying the timer and question page............................................
        document.getElementById("main-page").style.display = 'block';
        //Hidding the instruction page and start button................................
        document.getElementById("instruction").style.display = 'none';
        clearInterval(intervalId);
        //Displaying the timer's initial value.....................................
        document.getElementById("timer").innerHTML = "<h2>Time Left: " + 10 + "</h2>";
        intervalId = setInterval(decrement, 1000);
        //Calling the listQuestion function.....................................
        //document.getElementById("question").innerHTML = question;
        document.getElementById("submit").style.display = 'block';
        console.log("I'm inside run");

    }
    //  The decrement function..................................................
    function decrement() {
        //Decrease timwLeft by one.
        timeLeft--;
        //Show the timeLeft in the #timer tag.
        document.getElementById("timer").innerHTML = "<h2>Time Left: " + timeLeft + "</h2>";
        //Once number hits zero...
        if (timeLeft === 0) {
            //Run the stop function.
            stop();
            finalScore();
            console.log("I'm inside decrement");
        }
    }

     //The stop function
     function stop() {
         //Clears our intervalId, we just pass the name of the interval to the clearInterval function.
         clearInterval(intervalId);
     }
     //  Execute the run & questionPage function.
     run();
     isChecked();
}   //dispalyTimer() end bracket................................................

//This function will be called in the modal window when the timer is 0 or the submit button is clicked
//and it displays the final score of the quiz.............
function finalScore() {
  document.getElementById("modal-window").style.display = 'block';
  document.getElementById("main-page").style.display = 'none';
  var message = "<h3>Game Over!</h3>" + "<p>Total question:" + 10 + "</p>" +
                "<p>Total Correct Answers: " + correctAns + "</p>" +
                "<p>Total Wrong Answers: " + wrongAns + "</p>";
  document.getElementById("modal2").innerHTML = message;
}
//This function is called when the Main Page button in modal window is clicked, which takes you to the instruction page.....................
function mainpage() {
  timeLeft = 10;
  correctAns = 0;
  wrongAns = 0;
  document.getElementById("instruction").style.display = 'block';
  document.getElementById("main-page").style.display = 'none';
  document.getElementById("modal-window").style.display = 'none';
  console.log("I'm inside mainpage");
}

//This function is called when the Replay button in modal window is clicked, which restart the quiz by resetting all the values and the answers.....................
function replay() {
  timeLeft = 60;
  correctAns = 0;
  wrongAns = 0;
  document.getElementById("modal-window").style.display = 'none';
  displayTimer();
}

function isChecked() {
  for (var i = 1; i < 11; i++){
    var radio = getElementById("A");
  }
  for (var x = 0; x < radio.length; x++){
    var answers = radio[x];
    if (answers.value === "correct"){
      correctAns++;
    } else {
      wrongAns++;
    }
  }
}
