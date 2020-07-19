export class Palindromes {
  constructor(range) {
    this.min = range.minFactor;
    this.max = range.maxFactor;
  }
  static generate(range) {
    if (range.minFactor > range.maxFactor)
      throw new Error("min must be <= max");
    return new Palindromes(range);
  }
  get smallest() {
    let smallest = { value: null, factors: [] };
    for (let i = this.min; i <= this.max; i++) {
      for (let j = i; j <= this.max; j++) {
        let num = i * j;
        if (smallest.value == null || num <= smallest.value) {
          let arr = [];
          if (num.toString() == num.toString().split("").reverse().join("")) {
            if (smallest.value == null || num < smallest.value)
              smallest.factors = [];
            smallest.value = i * j;
            arr.push(i, j);
            smallest.factors.push(arr);
          }
        }
      }
    }
    return smallest;
  }
  get largest() {
    let largest = { value: null, factors: [] };
    for (let i = this.max; i >= this.min; i--) {
      for (let j = i; j >= this.min; j--) {
        let num = i * j;
        if (largest.value == null || num >= largest.value) {
          let arr = [];
          if (num.toString() == num.toString().split("").reverse().join("")) {
            if (largest.value == null || num > largest.value)
              largest.factors = [];
            largest.value = i * j;
            arr.push(i, j);
            largest.factors.push(arr);
          }
        }
      }
    }
    return largest;
  }
}
