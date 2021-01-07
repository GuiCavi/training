import WordsInNumbers from "./WordsInNumbers";

const makeSut = () => {
  return new WordsInNumbers()
}

describe("Exercício 3", () => {
  test("Should check if the word 'Feliz' is not a prime number", () => {
    const sut = makeSut();

    const result = sut.execute("Feliz");

    expect(result.isPrime).toBe(false);
  });

  test("Should check if the word 'Cachorro' is a prime number", () => {
    const sut = makeSut();

    const result = sut.execute("Cachorro");

    expect(result.isPrime).toBe(true);
  });

  test("Should check if the word 'Cachorro1' is a prime number", () => {
    const sut = makeSut();

    const result = sut.execute("Cachorro1");

    expect(result.isPrime).toBe(true);
  });

  test("Should check if the word 'Cachorro_1!' is a prime number", () => {
    const sut = makeSut();

    const result = sut.execute("Cachorro_1!");

    expect(result.isPrime).toBe(true);
  });

  test("Should check if the word '.Cachorro_1!' is a prime number", () => {
    const sut = makeSut();

    const result = sut.execute(".Cachorro_1!");

    expect(result.isPrime).toBe(true);
  });

  test("Should check if the word 'Feliz' is not a happy number", () => {
    const sut = makeSut();

    const result = sut.execute("Feliz");

    expect(result.isHappy).toBe(false);
  });

  test("Should check if the word 'objective' is a happy number", () => {
    const sut = makeSut();

    const result = sut.execute("objective");

    expect(result.isHappy).toBe(true);
  });

  test("Should check if the word 'objective1' is a happy number", () => {
    const sut = makeSut();

    const result = sut.execute("objective1");

    expect(result.isHappy).toBe(true);
  });

  test("Should check if the word 'objective_1!' is a happy number", () => {
    const sut = makeSut();

    const result = sut.execute("objective_1!");

    expect(result.isHappy).toBe(true);
  });

  test("Should check if the word '.objective_1!' is a happy number", () => {
    const sut = makeSut();

    const result = sut.execute(".objective_1!");

    expect(result.isHappy).toBe(true);
  });
})