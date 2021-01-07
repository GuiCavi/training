import { sumBasedOnCondition, multiple3or5, multiple3and5, multiple3or5and7 } from "./Multiple";

const makeSut = () => {
  return { sumBasedOnCondition }
}

describe("Exercício 1", () => {
  test("Should calculate the sum of 3 OR 5 multiples for 10", () => {
    const sut = makeSut();

    const result = sut.sumBasedOnCondition(10, multiple3or5);

    expect(result).toBe(23);
  });

  test("Should calculate the sum of 3 OR 5 multiples for 1000", () => {
    const sut = makeSut();

    const result = sut.sumBasedOnCondition(1000, multiple3or5);

    expect(result).toBe(233168);
  });


  test("Should calculate the sum of 3 AND 5 multiples for 10", () => {
    const sut = makeSut();

    const result = sut.sumBasedOnCondition(10, multiple3and5);

    expect(result).toBe(0);
  });

  test("Should calculate the sum of 3 AND 5 multiples for 20", () => {
    const sut = makeSut();

    const result = sut.sumBasedOnCondition(20, multiple3and5);

    expect(result).toBe(15);
  });

  test("Should calculate the sum of 3 AND 5 multiples for 1000", () => {
    const sut = makeSut();

    const result = sut.sumBasedOnCondition(1000, multiple3and5);

    expect(result).toBe(33165);
  });

  test("Should calculate the sum of (3 OR 5) AND 7 multiples for 50", () => {
    const sut = makeSut();

    const result = sut.sumBasedOnCondition(50, multiple3or5and7);

    expect(result).toBe(98);
  });

  test("Should calculate the sum of (3 OR 5) AND 7 multiples for 1000", () => {
    const sut = makeSut();

    const result = sut.sumBasedOnCondition(1000, multiple3or5and7);

    expect(result).toBe(33173);
  });
})