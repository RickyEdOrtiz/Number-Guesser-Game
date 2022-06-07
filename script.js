let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10); 
};


const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    if (Math.abs(secretTarget - userGuess) <= Math.abs(secretTarget - computerGuess)) {
        return true; 
    } else {
        return false;
    }
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
    return currentRoundNumber;
};