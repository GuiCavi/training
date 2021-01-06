import Multiple from "./main";

const makeSut = () => {
  return new Multiple()
}

describe("Exercício 1", () => {
  test("Should calculate the sum of 3 OR 5 multiples for 10", () => {
    const sut = makeSut();

    const result = sut.calculateSumOr(10);

    expect(result).toBe(23);
  });

  test("Should calculate the sum of 3 OR 5 multiples for 1000", () => {
    const sut = makeSut();

    const result = sut.calculateSumOr(1000);

    expect(result).toBe(233168);
  });
})