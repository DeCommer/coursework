'use strict'

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let guesses = 20;
let highscore = 0;

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')

const messageDisp = function(message) {
    document.querySelector('.message').textContent = message;
}

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

document.addEventListener('keydown', function(e) {
    if ( e.key === 'Enter') {
        console.log("You pressed enter");
    }
});

const clearTxt = function() {
    document.querySelector('.guess').value = '';
}

const prevGuessDisplay = function(prevGuess) {
    document.querySelector('.prevGuess').textContent = prevGuess
};

document.querySelector('.guessBtn').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    clearTxt();
    if(!guess) {
         messageDisp("🚫 You must enter a number. 🚫");
         
    }else if (guess === secretNumber) {
        messageDisp("🚀 You got it! 🍪");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#789461";
        if (guesses > highscore) {
            highscore = guesses;
            document.querySelector('.highscore').textContent = highscore;
        };
    }else if(guess !== secretNumber) { //replaces below
        guess > secretNumber ? messageDisp("🏔️ Your guess is too high ⛰️") : messageDisp("🏚️ Your guess is too low 🏚️");
        guesses--;
        document.querySelector('.score').textContent = guesses;
        prevGuessDisplay(`Your previous guess was: ${guess}`);
        };
    if (guesses < 1) {
        messageDisp("😫 You lose! 🤢");
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = "#8C3333";
        };
});
 
document.querySelector('.resetbtn').addEventListener('click', function() {
    guesses = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    messageDisp("🤨 Enter your guess! 😏");
    document.querySelector('.score').textContent = guesses;
    document.querySelector('.number').textContent = '?';
    clearTxt();
    document.querySelector('body').style.backgroundColor = "#334e6a";
    prevGuessDisplay(``);
});

document.querySelector('.aboutBtn').addEventListener('click', openModal);

document.querySelector('.close-modal').addEventListener('click', closeModal);

document.querySelector('.overlay').addEventListener('click', closeModal);


//Previous states
    // else if (guess > secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = "🏔️ Your guess is too high ⛰️"
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = "You lose!"
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = "#A86464";
    //     }

    // }else if (guess < secretNumber) {

    //     if(score > 1) {
    //         document.querySelector('.message').textContent = "🏚️ Your guess is too low 🏚️"
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = "You lose!"
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = "#A86464";
    //     }
    // }