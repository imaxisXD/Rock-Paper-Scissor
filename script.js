console.log("Script Loaded");
let computerChoice = 0;
let computerScore = 0;
let playerScore = 0;
let roundCount = 0;
let playerChoice = 0;
let noOfRounds = window.prompt("Enter Number Of Rounds");

const choice = [
    "rock",
    "paper",
    "scissor"
];

const computerPlay = () => {    
    const computerTurn = choice[Math.floor( Math.random() * choice.length )];    
    return computerTurn;
}

const playerPlay = () => {
    let choice = window.prompt("Enter Rock or Paper or Scissor");
    return choice;
}

const playRound = (computerChoice = computerPlay().toLowerCase(), playerChoice = playerPlay().toLowerCase()) => {

   
    console.log(`Computer Choice : ${computerChoice}, Player Choice : ${playerChoice}`);

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
        if(roundCount == noOfRounds){
            gameOver(playerScore,computerScore);
        }
    }

    else {
        console.log("Error in condition");
    }
}

const gameOver = (playerScore, computerScore) => {
    
    if( playerScore > computerScore)
        console.log("Congratulation !, You Won");
    else if( playerScore < computerScore)
        console.log("You Lost");
    else    
        console.log("It's a Draw")
}

const playGame = (noOfRounds) => {
    while (roundCount < noOfRounds) {
        playRound();        
    }
}

playGame(noOfRounds);
