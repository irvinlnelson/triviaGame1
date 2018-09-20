var number = 120;
//  Variable that will hold our interval ID when we execute
//  the "start" function
var intervalId;
//Setting up the start fuction that runs the decrement function once a second.
function start() {
  intervalId = setInterval(decrement, 1000);
}
//calling the start function
 start();

//  The decrement function so the timer ticks down.
function decrement() {
  //  Decrease number by one.
    number--;
  //  Show the number in the #jshow-number tag in the html.
  $("#show-number").html("<h2>" + number + "</h2>");
  //  Once number hits zero,
    if (number === 0) {
        stop(window.location.href="indexEnd.html");
        }
 };
 //  The stop function
function stop() {
  clearInterval(intervalId);
}



//start button on start page
// Upon YES, show QA page and timer AND start the timer
$("#start").click(href="index.html"); 



// Declare Question Variables
// Q1 answer
// Q2 answer
var data = {
questions: [{
question:"How many Triple Doubles did Russell Westbrook get to break the record in a single season?",
answers: [
30, 42, 55
],
correctAnswer: 42,
}, {
question:"Who held the basketballn instead of take a game winning shot in the finals",
answers: [
"Jr Smith", "Lebron James", "Kevin Love"
],
correctAnswer:"Jr Smith",
}, {
question:"How tall was the shortest player to play in the NBA?",
answers: [
"4ft.", "5ft.", "5ft 3in"
],
correctAnswer:"5ft 3in",
}]
};


function renderQuestion(){
var currentQuestion=data.questions[0];
console.log(currentQuestion);
var outputhtml = '<div class="btn-group text-center" data-toggle="buttons">' +
                  '<p class="text-center">' + currentQuestion.question + '</p>' +
                  '<label class="btn btn-primary">' +
                    '<input type="radio" name="options" autocomplete="off">' +
                    '<div class="myBtn" data-answer="' + currentQuestion.answers[0] + '">' + currentQuestion.answers[0] + '</div>' +
                  '</label>' +
                  '<label class="btn btn-primary">' +
                    '<input type="radio" name="options" autocomplete="off">' + 
                    '<div class="myBtn" data-answer="' + currentQuestion.answers[1] + '">' + currentQuestion.answers[1] + '</div>' +
                  '</label>' +
                  '<label class="btn btn-primary">' +
                    '<input type="radio" name="options" autocomplete="off">' +
                    '<div class="myBtn" data-answer="' + currentQuestion.answers[2] + '">' + currentQuestion.answers[2] + '</div>' +
                  '</label>' +
                  '</div>';

                  var secondQuestion = data.questions[1];
                  console.log(secondQuestion);
                  var secondOutputhtml = '<div class="btn-group text-center" data-toggle="buttons">' +
                                    '<p class="text-center">' + secondQuestion.question + '</p>' +
                                    '<label class="btn btn-primary">' +
                                      '<input type="radio" name="options" autocomplete="off">' +
                                      '<div class="myBtn" data-answer="' + secondQuestion.answers[0] + '">' + secondQuestion.answers[0] + '</div>' +
                                    '</label>' +
                                    '<label class="btn btn-primary">' +
                                      '<input type="radio" name="options" autocomplete="off">' + 
                                      '<div class="myBtn" data-answer="' + secondQuestion.answers[1] + '">' + secondQuestion.answers[1] + '</div>' +
                                    '</label>' +
                                    '<label class="btn btn-primary">' +
                                      '<input type="radio" name="options" autocomplete="off">' +
                                      '<div class="myBtn" data-answer="' + secondQuestion.answers[2] + '">' + secondQuestion.answers[2] + '</div>' +
                                    '</label>' +
                                    '</div>';

                                    var thirdQuestion = data.questions[2];
                  console.log(thirdQuestion);
                  var thirdOutputhtml = '<div class="btn-group text-center" data-toggle="buttons">' +
                                    '<p class="text-center">' + thirdQuestion.question + '</p>' +
                                    '<label class="btn btn-primary">' +
                                      '<input type="radio" name="options" autocomplete="off">' +
                                      '<div class="myBtn" data-answer="' + thirdQuestion.answers[0] + '">' + thirdQuestion.answers[0] + '</div>' +
                                    '</label>' +
                                    '<label class="btn btn-primary">' +
                                      '<input type="radio" name="options" autocomplete="off">' + 
                                      '<div class="myBtn" data-answer="' + thirdQuestion.answers[1] + '">' + thirdQuestion.answers[1] + '</div>' +
                                    '</label>' +
                                    '<label class="btn btn-primary">' +
                                      '<input type="radio" name="options" autocomplete="off">' +
                                      '<div class="myBtn" data-answer="' + thirdQuestion.answers[2] + '">' + thirdQuestion.answers[2] + '</div>' +
                                    '</label>' +
                                    '</div>';

$("#questionscontainer").append(outputhtml);
var secondDiv = $("<div>").append(secondOutputhtml);
$("#questionscontainer").append(secondDiv);
var thirdDiv = $("<div>").append(thirdOutputhtml);
$("#questionscontainer").append(thirdDiv);
};
renderQuestion();


//user chooses an answer by pressing a button in the html
//variable to store the user's guess
//a click event so the computer knows how to find it
//pass the data in the event, to the variable
$('.myBtn').click(function (event){
event.preventDefault();
      console.log($(this).data('answer'));
 var userGuess = $(this).data('answer');
 $("userGuess").on("click", function(userGuess){

    

console.log(event);
// - computer runs function to compare userguess to correctanswer for the question
//   if there is a match, computer adds i++ to the correctGuess Variable
var correctGuesses="1";
if (userGuess===data.correctAnswer);
 $("#show-correctGuesses").html("<h2>" + (correctGuesses++) + "</h2>");
console.log(correctGuesses++);

// - if incorrect or there isn't a match, computer adds i++ to incorrectGuess variable.
 var incorrectGuesses="1";
if (userGuess!==data.correctAnswer);
 $("#show-incorrectGuesses").html("<h2>" + (incorrectGuesses++) + "</h2>");
console.log(incorrectGuesses++);

// - this process repeats for each question each time a button is clicked.
// need if statement that lets the computer record which questions haven't been answered...
var unanswered="1";
if(userGuess === "");
$("#show-unanswered").html("<h2>" + (unanswered++) + "</h2>");
});
  
// });
});