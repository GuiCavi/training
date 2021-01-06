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

  const passNumbers = [];

  while (num !== 1) {
    let sum = calculateSum(num);

    if (passNumbers.includes(sum)) {
      return false;
    }

    passNumbers.push(sum);

    num = sum;
  };

  return true;
}