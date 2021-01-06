const calculateSum = (num: number) => {
  let sum = 0;

  while (num > 0) {
    const digit = num % 10;

    sum += Math.pow(digit, 2);
    num = Math.floor(num / 10);
  }

  return sum;
}

export const isHappyNumber = (num: number) => {
  if (num === 1 || num === 7) {
    return true;
  }

  while (num > 9) {
    let sum = calculateSum(num);

    if (sum === 1 || sum === 7) {
      return true;
    }

    num = sum;
  };

  return false;
}