//create function that randomly returns rock paper or scissors (CPU)
//create function that plays single round 
//create a game function that plays 5 rounds

// Function to generate random choice
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];

    return options[Math.floor(Math.random() * options.length)];
}


const playerSelection = 'roCk'
const computerSelection = computerPlay();

// Function to play one round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === "scissors") {
            return 'You Win! Rock beats Scissors.'
        } else if (computerSelection === "paper") {
            return 'You Lose! Paper beats Rock.'
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === "rock") {
            return 'You Win! Paper beats Rock.'
        } else if (computerSelection === "scissors") {
            return 'You Lose! Scissors beats Paper.'
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === "paper") {
            return 'You Win! Scissors beats Paper.'
        } else if (computerSelection === "rock") {
            return 'You Lose! Rock beats Scisssors.'
        }
    }

    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }

}

console.log(playerSelection);
console.log(computerPlay());
console.log(playRound(playerSelection, computerSelection));

