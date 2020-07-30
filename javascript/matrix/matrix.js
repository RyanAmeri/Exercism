export class Matrix {
  #rows = [];
  #columns = [];
  constructor(input) {
    this.#rows = input.split("\n").map((row) => {
      return row.split(" ").map((item) => parseInt(item));
    });
    this.#rows.forEach((row) => {
      row.forEach((item, index) => {
        this.#columns[index] = this.#columns[index] ?? [];
        this.#columns[index].push(item);
      });
    });
  }

  get rows() {
    return this.#rows;
  }

  get columns() {
    return this.#columns;
  }
}
