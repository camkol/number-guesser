let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
const compareGuesses = (user, computer, target) => {
  if (Math.abs(user - target) == Math.abs(computer - target)) {
    return true;
  } else if (Math.abs(user - target) < Math.abs(computer - target)) {
    return true;
  } else {
    return false;
  }
};
const updateScore = (str) => {
  if (str == "human") {
    humanScore += 1;
  } else if (str == "computer") {
    computerScore += 1;
  }
};
