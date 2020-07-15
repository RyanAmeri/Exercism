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
      for (let j = minFactor; j <= maxFactor; j++) {
        for (let k = minFactor; k <= maxFactor; k++) {
          let tmpTriangle = new Triplet(i, j, k);
          if (tmpTriangle.isPythagorean()) {
            if (sum) {
              if (i + j + k === sum) {
                triplets.push(tmpTriangle);
              }
            } else {
              triplets.push(tmpTriangle);
            }
          }
        }
      }
    }
    return triplets;
  }
}
