let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
const result = document.createElement('div');
document.body.appendChild(result);

document.getElementsByClassName('rock')[0].addEventListener('click', (event) => {event.target.classList.add('button-clicked'); playRound('rock', getComputerChoice())});
document.getElementsByClassName('paper')[0].addEventListener('click', (event) => {event.target.classList.add('button-clicked'); playRound('paper', getComputerChoice())});
document.getElementsByClassName('scissors')[0].addEventListener('click', (event) => {event.target.classList.add('button-clicked'); playRound('scissors', getComputerChoice())});

let scoreBoard = document.createElement('p');
document.body.appendChild(scoreBoard);

function updateScoreBoard(){
    scoreBoard.textContent = "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore;
}

let rps = ["rock", "paper", "scissors"];
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * rps.length);
    const item = rps[randomIndex];
    return item;
}

function playRound(playerSelection, computerSelection) {
    computerSelection=getComputerChoice();

    if (playerSelection === computerSelection){
        result.textContent = "It's a tie! Both players chose " + playerSelection + ".";
        console.log(result);
        playerSelection.classList.add('button-clicked');
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            computerScore++;
            result.textContent = 'The computer won this round!';
        }else{
            playerScore++;
            result.textContent = 'You won this round!';
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            computerScore++;
            result.textContent = 'The computer won this round!';
        }else{
            playerScore++;
            result.textContent = 'You won this round!';
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            computerScore++;
            result.textContent = 'The computer won this round!';
        }else{
            playerScore++;
            result.textContent = 'You won this round!';
        }
    }
    console.log(result);

    updateScoreBoard();
}

//Refactored code commented out below from an old version of this game that relied on users' text input

//function game_start(user_choice){
    //for (i=0; i<5;i++){
        // THIS IS NOW UI user_choice = prompt("input rock, paper, or scissors and see who comes out on top");
    //console.log(playRound(user_choice, getComputerChoice()));
    //}
    //console.log("Player scored ", playerScore);
//}

//const buttons = Array.from(document.querySelectorAll('.button'));
//buttons.forEach(button => buttons.addEventListener('transitionend', removeTransition));
//window.addEventListener('keydown', playRound);
