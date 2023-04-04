let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let rps = ["rock", "paper", "scissors"];
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * rps.length);
    const item = rps[randomIndex];
    return item;
}

//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection=getComputerChoice();

    if (playerSelection === computerSelection){
        return "It's a tie! Both players chose " + playerSelection + ".";
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            computerScore++;
            return 'The computer won this round!';
        }else{
            playerScore++;
            return 'You won this round!';
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            computerScore++;
            return 'The computer won this round!';
        }else{
            playerScore++;
            return 'You won this round!';
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            computerScore++;
            return 'The computer won this round!';
        }else{
            playerScore++;
            return 'You won this round!';
        }
    }
}

function game(){
    for (i=0; i<5;i++){
        user_choice = prompt("input rock, paper, or scissors and see who comes out on top");
        console.log(playRound(user_choice, getComputerChoice()));
    }
    console.log("Player scored ", playerScore);
}

game();