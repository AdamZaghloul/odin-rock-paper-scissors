let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice){

    const computerChoice = getComputerChoice();
    let message = "";

    if(humanChoice == computerChoice){
        message = `Tie! You both chose ${humanChoice}.`;
    }else{
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
            message = `You win! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        }else{
            message = `You lose! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }
    }

    const scoreboard = document.querySelector("#score");
    scoreboard.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

    const msg = document.querySelector("#msg");
    msg.textContent = message;
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

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () =>{
        playRound(button.id);
        console.log("Test");
    });
    });
});
