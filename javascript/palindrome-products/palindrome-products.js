export class Palindromes {
  static generate({ minFactor, maxFactor }) {
    if (minFactor > maxFactor) {
      throw new Error("min must be <= max");
    }
    const palinds = getPalinds(minFactor, maxFactor);
    this.largest = { value: null, factors: [] };
    this.smallest = { value: null, factors: [] };
    if (palinds.length > 0) {
      this.smallest = {
        value: palinds[0],
        factors: getFactors(palinds[0], minFactor, maxFactor),
      };
      this.largest = {
        value: palinds[palinds.length - 1],
        factors: getFactors(palinds[palinds.length - 1], minFactor, maxFactor),
      };
    }
    return this;
  }
}

function getSmallestPalind(min, max) {
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      if (i * j === reverseNum(i * j)) {
        return i * j;
      }
    }
  }
}

function getPalinds(min, max) {
  const palinds = [];
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      if (i * j === reverseNum(i * j)) {
        palinds.push(i * j);
      }
    }
  }
  palinds.sort((a, b) => a - b);
  return palinds;
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
// const palindromes = Palindromes.generate({ maxFactor: 12, minFactor: 10 });
// console.table(palindromes);

//console.log(reverseNum(12345));
