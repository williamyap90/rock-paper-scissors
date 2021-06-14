// Player & CPU selection
const playerSelection = 'scissors'
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection), playerSelection, computerSelection);


// Function to generate random selection for CPU
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];

    return options[Math.floor(Math.random() * 3)];
}

// Function to compare player & CPU slections
function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === "scissors") {
            return 'You Win! Rock beats Scissors.';
        } else if (computerSelection === "paper") {
            return 'You Lose! Paper beats Rock.';
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === "rock") {
            return 'You Win! Paper beats Rock.';
        } else if (computerSelection === "scissors") {
            return 'You Lose! Scissors beats Paper.';
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === "paper") {
            return 'You Win! Scissors beats Paper.';
        } else if (computerSelection === "rock") {
            return 'You Lose! Rock beats Scisssors.';
        }
    }
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
}

// Function for game to play 
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    console.log(playerSelection);
    console.log(computerSelection);

    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    console.log(roundResult.includes('Win'));
    console.log(roundResult.includes('Lose'));


    if (roundResult.includes("Win")) {
        playerScore++;
    } else if (roundResult.includes("Lose")) {
        computerScore++;
    }

    console.log(playerScore);
    console.log(computerScore);

}

console.log(playGame());
