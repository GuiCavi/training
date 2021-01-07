import { isHappyNumber } from "../ex2/HappyNumbers";
import { isPrime } from "./PrimeNumber";

const LETTERS = ".abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

class WordsInNumbers {
  execute(word) {
    const sum =
      word
        .replace(/[\W|\_|\d]/g, "")
        .split("")
        .map(wordLetter => LETTERS.findIndex(letter => letter === wordLetter))
        .reduce((prev, curr) => prev + curr, 0);

    return {
      isPrime: isPrime(sum),
      isHappy: isHappyNumber(sum)
    };
  }
}

export default WordsInNumbers