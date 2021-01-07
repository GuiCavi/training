import { isPrime } from "./PrimeNumber";

const makeSut = () => {
  return { isPrime }
}

describe("Prime Numbers", () => {
  test("Should check if the number 1 is a prime number", () => {
    const sut = makeSut();

    const result = sut.isPrime(1);

    expect(result).toBe(true);
  });

  test("Should check if the number 2 is a prime number", () => {
    const sut = makeSut();

    const result = sut.isPrime(2);

    expect(result).toBe(true);
  });

  test("Should check if the number 3 is a prime number", () => {
    const sut = makeSut();

    const result = sut.isPrime(3);

    expect(result).toBe(true);
  });

  test("Should check if the number 5 is a prime number", () => {
    const sut = makeSut();

    const result = sut.isPrime(5);

    expect(result).toBe(true);
  });

  test("Should check if the number 17 is a prime number", () => {
    const sut = makeSut();

    const result = sut.isPrime(17);

    expect(result).toBe(true);
  });

  test("Should check if the number 21 is not a prime number", () => {
    const sut = makeSut();

    const result = sut.isPrime(21);

    expect(result).toBe(false);
  });

  test("Should check if the number 84 is not a prime number", () => {
    const sut = makeSut();

    const result = sut.isPrime(84);

    expect(result).toBe(false);
  });

  test("Should check if the number 107 is a prime number", () => {
    const sut = makeSut();

    const result = sut.isPrime(107);

    expect(result).toBe(true);
  });
})