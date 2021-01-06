import Multiplos from "./main";

const makeSut = () => {
  return new Multiplos()
}

describe("Exercício 1", () => {
  test("Should not go over 10", () => {
    const sut = makeSut();

    const result = sut.calculateSumOr(10);

    expect(result).toBe(23);
  })
})