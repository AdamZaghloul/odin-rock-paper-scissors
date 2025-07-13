function getComputerChoice(){
    let num = Math.floor(Math.random()*3 + 1);

    switch (num){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissors";
        default:
                return "error";
    }
}

function getHumanChoice(){

    let choice = prompt("rock, paper, or scissors?");

    if(choice == null){
        return choice;
    }
    
    if(choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors"){
        choice = getHumanChoice();
    }

    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === null){
        return "cancel";
    }

    if(humanChoice === computerChoice){
        console.log(`Tie! You both chose ${humanChoice}.`)
        return "tie";
    }

    let win = false;
    
    switch (humanChoice){
        case "rock":
            if(computerChoice === "scissors"){
                win = true;
            }
            break;
        case "paper":
            if(computerChoice === "rock"){
                win = true;
            }
            break;
        case "scissors":
            if(computerChoice === "paper"){
                win = true;
            }
            break;
    }

    if(win){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "win";
    }

    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return "lose";
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let result = playRound(getHumanChoice(), getComputerChoice());

        if(result === "cancel"){
            break;
        }else if(result === "win"){
            humanScore++;
        }else if(result === "lose"){
            computerScore++;
        }
    }

    console.log("Game Over.");

    if(humanScore === computerScore){
        console.log(`It's a tie! You both scored ${humanScore} points.`);
    }else if(humanScore > computerScore){
        console.log(`You win! You scored ${humanScore} points.`);
    }else{
        console.log(`You lose! You scored ${humanScore} points.`);
    }
}

playGame();