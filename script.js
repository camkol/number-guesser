let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (a, b) => Math.abs(a - b);

const compareGuesses = (user, computer, target) => {
  if (user < 0 || user > 9) {
    alert("Please guess a number between 0 and 9.");
    return;
  }

  const userDiff = getAbsoluteDistance(user, target);
  const computerDiff = getAbsoluteDistance(computer, target);

  return userDiff <= computerDiff;
};
const updateScore = (str) => {
  if (str == "human") {
    humanScore += 1;
  } else if (str == "computer") {
    computerScore += 1;
  }
};
const advanceRound = () => {
  currentRoundNumber += 1;
};
