const toTimestamp = (a, b) => a * 3.6e6 + b * 6e4; // Convert hours and minutes to milliseconds

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

  equals(obj) {

    return this.toString() === obj.toString() ? 
      true: false;
  }
}
