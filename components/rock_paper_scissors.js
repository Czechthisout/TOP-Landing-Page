let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
const result = document.createElement('div');
document.body.appendChild(result);

document.getElementsByClassName('rock')[0].addEventListener('click', (event) => {
    event.target.classList.add('button-clicked'); 
    playRound('rock', getComputerChoice())});
document.getElementsByClassName('paper')[0].addEventListener('click', (event) => {
    event.target.classList.add('button-clicked'); 
    playRound('paper', getComputerChoice())});
document.getElementsByClassName('scissors')[0].addEventListener('click', (event) => {
    event.target.classList.add('button-clicked'); 
    playRound('scissors', getComputerChoice())});

let scoreBoard = document.createElement('p');
document.body.appendChild(scoreBoard);

const button_state = Array.from(document.querySelectorAll('.rock, .paper, .scissors'));
button_state.forEach(state => state.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('button-clicked');
}

function updateScoreBoard(){
    scoreBoard.textContent = "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore;
}

function disableButtons(){
    const buttons = document.querySelectorAll('.rock, .paper, .scissors');
    buttons.forEach(button => button.disabled = true);
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

    if (playerScore===5 || computerScore===5){
        result.textContent += ' Game over!';
        disableButtons();
    }
}