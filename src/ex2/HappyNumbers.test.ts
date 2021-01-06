import { isHappyNumber } from "./HappyNumbers";

const makeSut = () => {
  return { isHappyNumber }
}

describe("Exercício 2", () => {
  test("Should return true if input is 1", () => {
    const sut = makeSut();

    const result = sut.isHappyNumber(1);

    expect(result).toBe(true);
  });
})