function computerChoice() {
    let choice = Math.floor((Math.random())*3);
    switch(choice)
    {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        default: return -1;
    }
}

function userChoice() {
    let choice = prompt("Enter your choice! Rock, Paper or Scissors?");
    return choice.toLowerCase();
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

            default: return "Incorrect choice";

        }   
    }
}

function game() {

    let score = 0;
    let i = 0;
    while(i < 5){

        result = evaluate(userChoice(), computerChoice());

        if (result[4] == "w"){
            score++;
            console.log(result);
            i++;
        }
        else if (result[4] == "l"){
            console.log(result);
            i++;
        }
        else if (result[1] == "t") {
            console.log(result);
        }
        else {
            console.error(result);
        }
    }
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

game();