export class ComplexNumber {
  #a;
  #b;
  constructor(r, i) {
    this.#a = r;
    this.#b = i;
  }

  get real() {
    return this.#a;
  }

  get imag() {
    return this.#b;
  }

  add(num2) {
    return new ComplexNumber(this.real + num2.real, this.imag + num2.imag);
  }

  sub(num2) {
    return new ComplexNumber(this.real - num2.real, this.imag - num2.imag);
  }

  div(num2) {
    return new ComplexNumber(
      (this.real * num2.real + this.imag * num2.imag) /
        (num2.real ** 2 + num2.imag ** 2),
      (this.imag * num2.real - this.real * num2.imag) /
        (num2.real ** 2 + num2.imag ** 2)
    );
  }

  mul(num2) {
    return new ComplexNumber(
      this.real * num2.real - this.imag * num2.imag,
      this.imag * num2.real + this.real * num2.imag
    );
  }

  get abs() {
    return Math.abs(Math.sqrt(this.real ** 2 + this.imag ** 2));
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag * -1);
  }

  get exp() {
    return new ComplexNumber(
      Math.exp(this.real) * Math.cos(this.imag),
      Math.exp(this.real) * Math.sin(this.imag)
    );
  }
}
