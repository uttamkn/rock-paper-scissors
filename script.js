const userChoiceImg = document.querySelector('#userChoice');
const botChoiceImg = document.querySelector('#botChoice');

const newXImg = document.createElement('img');

newXImg.src='./img/fight.svg';
newXImg.alt='VS';
newXImg.width=100;

const newImg = document.createElement('img');
botChoiceImg.appendChild(newImg);

function computerChoice() {         //returns a string rock paper or scissors randomly
    let choice = Math.floor((Math.random())*3);
    switch(choice)
    {
        case 0: {
                    newImg.src='./img/rock.svg';
                    newImg.alt='rock';
                    newImg.width=100;
                    return "rock";
                }   
        case 1: {
                    newImg.src='./img/paper.svg';
                    newImg.alt='paper';
                    newImg.width=100;
                    return "paper";
                }
        case 2: {
                    newImg.src='./img/scissors.svg';
                    newImg.alt='scissors';
                    newImg.width=100;
                    return "scissors";
                }
        default: return -1;
    }
}

function evaluate(uChoice, cChoice) {

    if(uChoice == cChoice){
        return "It's a tie";
    }
    else {
        switch(uChoice) {
            case "rock": {
                if(cChoice == "paper"){
                    return "You lose!, paper beats rock";
                }
                else if (cChoice == "scissors") {
                    return "You win!, rock beats scissors";
                }
            }
            break;
            
            case "paper": {
                if(cChoice == "scissors"){
                    return "You lose!, scissors beats paper";
                }
                else if (cChoice == "rock") {
                    return "You win!, paper beats rock";
                }
            }
            break;

            case "scissors": {
                if(cChoice == "rock"){
                    return "You lose!, rock beats scissors";
                }
                else if (cChoice == "paper") {
                    return "You win!, scissors beats paper";
                }
            }
            break;

            default: return "Error";

        }   
    }
}

function displayResult() {
    let disp;
    if(userScore > botScore) {
        disp = "Congrats!! you won :D"
    }
    else {
        disp = "Looks like you suck at rps too xD. Try again"
    }

    //incomplete
}

const curResult = document.querySelector('#currentResult');
const UserScore = document.querySelector('#userScore');
const BotScore = document.querySelector('#botScore');

const curChoice = document.querySelector('#currentChoice');
const newUserImg = document.createElement('img');
userChoiceImg.appendChild(newUserImg);


function game(userChoice) {

    if(userChoice == 'rock') {
        newUserImg.src='./img/rock.svg';
        newUserImg.alt='rock';
        newUserImg.width=100;
    }
    else if(userChoice == 'paper') {
        newUserImg.src='./img/paper.svg';
        newUserImg.alt='paper';
        newUserImg.width=100;
    }
    else {
        newUserImg.src='./img/scissors.svg';
        newUserImg.alt='scissors';
        newUserImg.width=100;
    }

    curChoice.insertBefore(newXImg, botChoiceImg);                  //adds X image

    result = evaluate(userChoice, computerChoice());
    
    if (result[4] == "w"){        //user won
        i++;
        
        if(i==5){
            curResult.textContent = (result);
            displayResult();
            return;
        }
        else{
            userScore++;
            curResult.textContent = (result);
        }
    }
    else if (result[4] == "l"){     //user lost
        i++;

        if(i==5){
            curResult.textContent = (result);
            displayResult();
            return;
        }
        else {
            botScore++;
            curResult.textContent = (result);
        }
    }
    else if (result[1] == "t") {      //tie
        curResult.textContent = (result);
    }
    else {
        cocurResult.textContent = (result);        //error
    }

    UserScore.textContent="You - "+userScore;
    BotScore.textContent="RNG bot - "+botScore;
    
}

const rockImg = document.querySelector('#rock');
const paperImg = document.querySelector('#paper');
const scissorsImg = document.querySelector('#scissors');

let i = 0;
let userScore = 0;
let botScore = 0;

rockImg.addEventListener('click', function () {
    game(rockImg.id);
});

paperImg.addEventListener('click', function () {
    game(paperImg.id);
});

scissorsImg.addEventListener('click', function () {
    game(scissorsImg.id);
});


