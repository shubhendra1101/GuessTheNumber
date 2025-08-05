'use strict';
/*
// console.log(document.querySelector('.message').textContent); //Entry point to the DOM -> document.__()

// // DOM !== Javascript ,DOM is more like a Web APIs(Application Programming Interface) that can interact with JS

// //Changing or Setting a message
// document.querySelector('.message').textContent = 'Correct number';
// //The above line of code will change the message 'Start guessing' to 'Correct number'

// document.querySelector(".number").textContent = 13; // ? -> 13
// document.querySelector(".score").textContent = 7;  // 20 -> 7

// document.querySelector('.guess').value = 23;  //Assigning value in input field using JS
// console.log(document.querySelector('.guess').value); //That value in console
*/
//Handling click events in JS
//For button click  -> We ause a Event listner

//Format->document.querySelector('class').addEventListener("Name/Type of event",what to do(reaction->function){...
//.....})
//We are selecting the button,Then we use the addeventlistenner method in which the function is attached
//And in this case the function is printing the value,We just entered in guess,Via check button.

//GAME Logic-->

let realNo = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message; //Function for using elements for several time
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //if no input
  if (!guess) {
    displayMessage('Enter a valid number!!!');
}

  //using ternary operator
  else if (guess !== realNo) {
    if (score > 1) {
        displayMessage(guess > realNo ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!!!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // //to low
  // else if (guess < realNo){
  //     if(score > 1){
  //         document.querySelector('.message').textContent = 'Too low!';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //     }
  //     else{
  //         document.querySelector('.message').textContent = 'You lost the game!!!';
  //         document.querySelector('.score').textContent = 0;

  //     }
  // }

  // //to high
  // else if(guess > realNo){
  //     if(score > 1){
  //         document.querySelector('.message').textContent = 'Too high!';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //     }
  //     else{
  //         document.querySelector('.message').textContent = 'You lost the game!!!';
  //         document.querySelector('.score').textContent = 0;

  //     }
  // }

  //if guess == real number
  else {
    document.querySelector('.number').style.width = '30rem'; //Manipulate the css using js(width)
    document.querySelector('.number').textContent = realNo;
    displayMessage('Correct number ;-)');
    document.querySelector('body').style.background = '#60b347'; //Manipulate the css using js(background)
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  realNo = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');  //Using Function
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.background =
    'radial-gradient(rgb(169, 174, 136), rgba(228, 5, 57, 0.96))';
});