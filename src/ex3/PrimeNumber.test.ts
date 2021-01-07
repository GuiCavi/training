import { isPrime } from "./PrimeNumber";

const makeSut = () => {
  return { isPrime }
}

describe("Exercício 3", () => {
  test("Should check if the number 84 is a prime number", () => {
    const sut = makeSut();

    const result = sut.isPrime(84);

    expect(result).toBe(false);
  });
})