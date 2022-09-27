'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number🤞🤞🤞';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

console.log(document.querySelector('.message').textContent);
*/

let secretNumber = Math.trunc(Math.random()*20)+1;
//document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

// Refactoring code
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        displayMessage('No Number 🐱‍👤🐱‍👤🐱‍👤');

        // when player win
    }else if(guess === secretNumber){
        //document.querySelector('.message').textContent = 'Correct Number🤞🤞🤞';
        displayMessage('Correct Number🤞🤞🤞'); // Refactoring code
        //document.querySelector('.number').textContent = secretNumber;
        displayMessage(secretNumber); // Refactoring code

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // Refactoring code
    else if(guess !== secretNumber){
        if(score > 0){
            //document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!'); // Refactoring code
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            //document.querySelector('.message').textContent = 'You lost the game 🤷‍♂️🤷‍♀️🤷‍♀️';
            displayMessage('You lost the game 🤷‍♂️🤷‍♀️🤷‍♀️'); // Refactoring code
            document.querySelector('.score').textContent = 0;
        }
    }

        /*
        // too high
    else if(guess > secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game 🤷‍♂️🤷‍♀️🤷‍♀️';
            document.querySelector('.score').textContent = 0;
        }

        // too low
    }else if(guess < secretNumber){
        if(score > 0 ){
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game 🤷‍♂️🤷‍♀️🤷‍♀️';
            document.querySelector('.score').textContent = 0;
        }
        
    }
    */
});

console.log(document.querySelector('.message').textContent);

document.querySelector('.again').addEventListener('click',
function (){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20)+1;
    //document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').textContent = '?';
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...'); // Refactoring code
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});



