console.log("Script Loaded");
let computerChoice = 0;
let computerScore = 0;
let playerScore = 0;
let roundCount = 0;
let playerChoice = 0;
let noOfRounds = 5;

let computerScoreBoard = document.querySelector('#com-score');
let playerScoreBoard = document.querySelector('#ply-score');
computerScoreBoard.textContent = '0';
playerScoreBoard.textContent = '0';
document.querySelector("#scissor").addEventListener('click',() => playerSelection('scissor'));
document.querySelector("#paper").addEventListener('click',() => playerSelection('paper'));
document.querySelector("#rock").addEventListener('click',() => playerSelection('rock'));
let choiceButtons = document.querySelectorAll('.button-grp')
let start = document.querySelector("#start");
const choice = [
    "rock",
    "paper",
    "scissor"
];

// start.addEventListener('click', () => {
//     console.log("This is working");
//     startGame();    
// });

function startGame(){
    playerChoice = playerSelection();
    
};

function playerSelection(choice) {
    computerChoice = computerSelection();
    result = whoWon(choice, computerChoice);
    
};

function computerSelection() {
    const computerTurn = choice[Math.floor( Math.random() * choice.length )];    
    return computerTurn;
};

function whoWon(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        console.log("It's a DRAW !");
    }
    //Winning Condition For Computer
    else if (( computerChoice === 'rock' && playerChoice === 'scissor' )||
    ( computerChoice === 'scissor' && playerChoice === 'paper' )||
    (computerChoice === 'paper' && playerChoice === 'rock')) {
        computerScore++;
        roundCount++;
        console.log(`Round Num : ${roundCount}, Computer : ${computerScore}, Player : ${playerScore}`);
        computerScoreBoard.textContent = `${computerScore}`;
        playerScoreBoard.textContent = `${playerScore}`;
        if(roundCount == noOfRounds){
            // call function game over
            gameOver(playerScore,computerScore);
        }    
    }
    //Winning Condition For Player  
    else if (( playerChoice === 'rock' && computerChoice === 'scissor' )||
    ( playerChoice === 'scissor' && computerChoice === 'paper' )||
    (playerChoice === 'paper' && computerChoice === 'rock')) {
        playerScore++;
        roundCount++;
        console.log(`Round Num : ${roundCount}, Computer : ${computerScore}, Player : ${playerScore}`);
        computerScoreBoard.textContent = `${computerScore}`;
        playerScoreBoard.textContent = `${playerScore}`;
        if(roundCount == noOfRounds){
            gameOver(playerScore,computerScore);
        }
    }

    else {
        console.log("Error in condition");
    }
};

function gameOver(playerScore, computerScore) {
    console.log(" Game Over ");
    
    location.reload();
};