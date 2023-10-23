import { prompt } from "./prompt.js";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(getRandomNumber(0, 100));
