import { isHappyNumber } from "./HappyNumbers";

const makeSut = () => {
  return { isHappyNumber }
}

describe("Exercício 2", () => {
  test("Should return true if input is 1 because 1 is happy", () => {
    const sut = makeSut();

    const result = sut.isHappyNumber(1);

    expect(result).toBe(true);
  });

  test("Should return true if input is 7 because 7 is happy", () => {
    const sut = makeSut();

    const result = sut.isHappyNumber(7);

    expect(result).toBe(true);
  });

  test('Should return false if the number is not happy', () => {
    const sut = makeSut();

    const result = sut.isHappyNumber(12);

    expect(result).toBe(false);
  });

  test('Should return true if the number is happy', () => {
    const sut = makeSut();

    const result = sut.isHappyNumber(13);

    expect(result).toBe(true);
  });
})