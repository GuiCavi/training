export const isMultipleNumber = (num: number, multi: number) => {
  return num % multi === 0;
}

export const multiple3or5 = (i: number) => isMultipleNumber(i, 3) || isMultipleNumber(i, 5)
export const multiple3and5 = (i: number) => isMultipleNumber(i, 3) && isMultipleNumber(i, 5)
export const multiple3or5and7 = (i: number) => multiple3or5(i) && isMultipleNumber(i, 7)

export const sumBasedOnCondition = (max: number, condition: Function) => {
  let sum = 0;
  for (let i = 0; i < max; i++) {
    if (condition(i)) {
      sum += i;
    }
  }

  return sum;
}