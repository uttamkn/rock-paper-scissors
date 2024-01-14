function computerChoice() {         //returns a string rock paper or scissors randomly
    let choice = Math.floor((Math.random())*3);
    switch(choice)
    {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        default: return -1;
    }
}

function evaluate(uChoice, cChoice) {

    if(uChoice == cChoice){
        return "Its a tie";
    }
    else {
        switch(uChoice) {
            case "rock": {
                if(cChoice == "paper"){
                    return "You lose!, I chose paper";
                }
                else if (cChoice == "scissors") {
                    return "You win!, I chose scissors";
                }
            }
            break;
            
            case "paper": {
                if(cChoice == "scissors"){
                    return "You lose!, I chose scissors";
                }
                else if (cChoice == "rock") {
                    return "You win!, I chose rock";
                }
            }
            break;

            case "scissors": {
                if(cChoice == "rock"){
                    return "You lose!, I chose rock";
                }
                else if (cChoice == "paper") {
                    return "You win!, I chose paper";
                }
            }
            break;

            default: return "Error";

        }   
    }
}

function displayResult() {
    let disp;
    if(score >= 3) {
        disp = "Congrats!! you won :D"
    }
    else {
        disp = "Looks like you suck at rps too xD. Try again"
    }
    console.log("Your score: " + (score) + "/5");
    console.log(disp)
}

function game(userChoice) {

    result = evaluate(userChoice, computerChoice());
    
    if (result[4] == "w"){        //user won
        i++;
        
        if(i==5){
            console.log(result);
            displayResult();
            return;
        }
        else{
            score++;
            console.log(result);
        }
    }
    else if (result[4] == "l"){     //user lost
        i++;

        if(i==5){
            console.log(result);
            displayResult();
            return;
        }
        else {
            console.log(result);
        }
    }
    else if (result[1] == "t") {      //tie
        console.log(result);
    }
    else {
        console.error(result);        //error
    }
    
}

const rockImg = document.querySelector('#rock');
const paperImg = document.querySelector('#paper');
const scissorsImg = document.querySelector('#scissors');
let i = 0;
let score = 0;

rockImg.addEventListener('click', function () {
    game(rockImg.id);
});

paperImg.addEventListener('click', function () {
    game(paperImg.id);
});

scissorsImg.addEventListener('click', function () {
    game(scissorsImg.id);
});


