import { isMultipleNumber } from "../ex1/Multiple";
import { isHappyNumber } from "../ex2/HappyNumbers";
import { isPrimeNumber } from "./PrimeNumber";

const LETTERS = ".abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

class WordsInNumbers {
  execute(word) {
    const sum =
      word
        .replace(/[\W|\_|\d]/g, "")
        .split("")
        .map(wordLetter => LETTERS.findIndex(letter => letter === wordLetter))
        .reduce((prev, curr) => prev + curr, 0);

    const isPrime = isPrimeNumber(sum);
    const isHappy = isHappyNumber(sum);
    const isMultiple = isMultipleNumber(sum, 3) || isMultipleNumber(sum, 5);

    return {
      isPrime,
      isHappy,
      isMultiple
    };
  }
}

export default WordsInNumbers