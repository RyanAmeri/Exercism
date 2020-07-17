export class Squares {
  #sumOfSquares;
  #squareOfSum;
  constructor(inputNum) {
    const arrayOfNumbers = Array(inputNum).fill(inputNum);
    this.#squareOfSum =
      arrayOfNumbers.reduce((accum, value, index) => accum + (index + 1), 0) **
      2;
    this.#sumOfSquares = arrayOfNumbers.reduce(
      (accum, value, index) => accum + (index + 1) ** 2,
      0
    );
  }

  get sumOfSquares() {
    return this.#sumOfSquares;
  }

  get squareOfSum() {
    return this.#squareOfSum;
  }

  get difference() {
    return this.#squareOfSum - this.#sumOfSquares;
  }
}
/* 
Looking at ksyu's solution, this algorithm is certainly more efficient: 
let x = (n * (n + 1)) / 2;
squareOfSums = x * x;
sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

But I thought this was a good exercise for me to practice array.prototype.reduce(), a method I always struggle with, so I kept my original solution. 

*/
