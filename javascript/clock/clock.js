const toTimestamp = (a, b) => a * 3.6e6 + b * 6e4;
const modulo = (x, m) => (x % m + m) % m;

export class Clock {
  constructor(num1, num2 = 0) {
    this.num1 = num1;
    this.num2 = num2;
    this.time = new Date(toTimestamp(num1, num2));
  }

  toString() {
    return this.time.toLocaleTimeString([], {timeZone: 'UTC', hour12: false, hour: '2-digit', minute: '2-digit' });
  }

  plus(mins) {
    return new Clock(this.num1, this.num2 + mins);

  }

  minus(mins) {
    return new Clock(this.num1, this.num2 - mins);
  }

  equals({a, b}) {

    modulo(this.num1, 24) === modulo(a, 24)
      && modulo(this.num2, 60) === modulo(b, 60)? 
      true: false;
  }
}
