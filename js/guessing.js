'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;


document.querySelector('.guessBtn').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        document.querySelector('.message').textContent = "🚫 You must enter a number. 🚫"
    }else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "🚀 You got it! 🍪"
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#43766C";

    }else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = "🏔️ Your guess is too high ⛰️"
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = "You lose!"
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = "#A86464";
        }

    }else if (guess < secretNumber) {

        if(score > 1) {
            document.querySelector('.message').textContent = "🏚️ Your guess is too low 🏚️"
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = "You lose!"
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = "#A86464";
        }
    }
});
 
document.querySelector('.resetbtn').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.message').textContent = "🤨 Enter your guess! 😏"
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';   
    document.querySelector('body').style.backgroundColor = "#334e6a"
})

