export const isPrimeNumber = (num: number) => {
  if (num === 1 || num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i <= num / 2; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}