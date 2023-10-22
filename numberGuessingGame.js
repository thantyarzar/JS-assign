function numberGuessingGame(min, max) {
  const randomNumber = Math.floor(Math.random() * max);
  let attempts = 0;

  while (true) {
    const userGuess = parseInt(
      prompt(`Guess the number between ${min} and ${max}:`)
    );
    attempts++;

    if (userGuess === randomNumber) {
      alert(
        `Congratulations! You've guessed the number in ${attempts} attempts.`
      );
      break;
    } else if (userGuess < randomNumber) {
      alert("Too low! Try a higher number.");
    } else {
      alert("Too high! Try a lower number.");
    }
  }
}

const minNumber = 1;
const maxNumber = 100;

numberGuessingGame(minNumber, maxNumber);
