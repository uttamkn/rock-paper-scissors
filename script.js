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

function userChoice() {             //returns the users choice in lowercase (INCOMPLETE)

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

