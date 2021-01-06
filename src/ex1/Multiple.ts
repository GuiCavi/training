class Multiple {
  isMultiple(num, multi) {
    return num % multi === 0;
  }

  calculateSumOr(max) {
    let sum = 0;
    for (let i = 0; i < max; i++) {
      if (this.isMultiple(i, 3) || this.isMultiple(i, 5)) {
        sum += i;
      }
    }

    return sum;
  }

  calculateSumAnd(max) {
    let sum = 0;
    for (let i = 0; i < max; i++) {
      if (this.isMultiple(i, 3) && this.isMultiple(i, 5)) {
        sum += i;
      }
    }

    return sum;
  }

  calculateSumOrAnd(max) {
    let sum = 0;
    for (let i = 0; i < max; i++) {
      if ((this.isMultiple(i, 3) || this.isMultiple(i, 5)) && this.isMultiple(i, 7)) {
        sum += i;
      }
    }

    return sum;
  }
}

export default Multiple