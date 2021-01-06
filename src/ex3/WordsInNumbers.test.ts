import WordsInNumbers from "./WordsInNumbers";

const makeSut = () => {
  return new WordsInNumbers()
}

describe("Exercício 3", () => {
  test("Should check if the word 'Feliz' is a prime number", () => {
    const sut = makeSut();

    const result = sut.isPrime("Feliz");

    expect(result).toBe(false);
  });
})