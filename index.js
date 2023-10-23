import { prompt } from "./prompt.js";

let min = 0;
let max = 100;

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const validationNumber = (number) => {
  return !Number.isNaN(number) && number >= 0 && number <= 100;
};

const game = () => {
  const targetNumber = getRandomNumber(min, max);

  let count = 0;

  const playGuessingGame = () => {
    const choiceUser = Number(prompt("Enter the number :"));

    count++;

    if (!validationNumber) {
      console.log(
        "🛑 The entered number is invalid. It must be between 0 and 100.\n\n"
      );
      return playGuessingGame();
    }

    if (choiceUser > targetNumber) {
      console.log("📈 The entered number is **too big**.\n\n");
      return playGuessingGame();
    }

    if (choiceUser < targetNumber) {
      console.log("📉 The entered number is **too small**.\n\n");
      return playGuessingGame();
    }

    console.log(`🟢 Well done! The random number was indeed ${choiceUser}.`);
    console.log(`✨ You succeeded in ${count} attempts.`);
  };

  playGuessingGame();
};

console.log(`
Welcome to the Number Guessing Game! 🎮

Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started! 🚀
`);

game();
