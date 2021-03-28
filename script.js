console.log("Script Loaded");
const choice = [
    "rock",
    "paper",
    "scissor"
];

let computerPlay = () => {    
    const randomChoice = choice[Random.nextInt(chocie.length)];
    console.log(randomChoice);
    return randomChoice;
}

computerPlay();