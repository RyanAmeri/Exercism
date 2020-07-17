export class Squares {
  #num;
  #sumOfSquares;
  #squareOfSum;
  constructor(inputNum) {
    this.#num = inputNum;
    const arrayOfNumbers = [];
    for (let i = 1; i <= this.#num; i++) {
      arrayOfNumbers[i] = i;
    }
    this.#squareOfSum =
      arrayOfNumbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) ** 2;
    this.#sumOfSquares = arrayOfNumbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue ** 2,
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
