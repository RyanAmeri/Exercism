export class Palindromes {
  static generate({ minFactor, maxFactor }) {
    if (minFactor > maxFactor) {
      throw new Error("min must be <= max");
    }
    this.smallest = {
      value: null,
      factors: [],
    };
    this.largest = {
      value: null,
      factors: [],
    };
    const SMALL = getSmallestPalind(minFactor, maxFactor);
    const LARGE = getLargestPalind(minFactor, maxFactor);
    if (SMALL) {
      this.smallest = {
        value: SMALL,
        factors: getFactors(SMALL, minFactor, maxFactor),
      };
    }
    if (LARGE) {
      this.largest = {
        value: LARGE,
        factors: getFactors(LARGE, minFactor, maxFactor),
      };
    }
    return this;
  }
}

function getSmallestPalind(min, max) {
  for (let i = min; i <= max; i++) {
    for (let j = i; j <= max; j++) {
      if (i * j === reverseNum(i * j)) {
        return i * j;
      }
    }
  }
}

function getLargestPalind(min, max) {
  for (let i = max; i >= max - 100; i--) {
    for (let j = i; j >= max - 100; j--) {
      if (i * j === reverseNum(i * j)) {
        return i * j;
      }
    }
  }
}

function getFactors(num, min, max) {
  let factors = [];
  let k = 0;
  for (let i = min; i <= max; i++) {
    for (let j = i; j <= max; j++) {
      if (i * j === num) {
        factors[k] = [];
        factors[k].push(i);
        factors[k].push(j);
        k++;
      }
    }
  }
  return factors;
}

function reverseNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}
