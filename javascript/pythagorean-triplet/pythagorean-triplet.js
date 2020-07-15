export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2 &&
      this.a < this.b &&
      this.b < this.c
      ? true
      : false;
  }

  static where({ minFactor = 1, maxFactor, sum }) {
    const triplets = [];
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i + 1; j <= maxFactor; j++) {
        for (let k = j + 1; k <= maxFactor; k++) {
          let tmpTriangle = new Triplet(i, j, k);
          if (tmpTriangle.isPythagorean()) {
            if (sum) {
              // If sum exists, you have to check that the sum matches
              if (tmpTriangle.sum() === sum) {
                triplets.push(tmpTriangle);
              }
            } else {
              //If sum is undefined, then just add the triangle
              triplets.push(tmpTriangle);
            }
          }
        }
      }
    }
    return triplets;
  }
}
