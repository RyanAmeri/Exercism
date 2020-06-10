const values = new Map([
  ['A',],
  ['C',],
  ['G',],
  ['T',],
]);

export class NucleotideCounts {
  static parse(str) {
    const regExp = /[^ACGT]+/;
    let returnStr = "";
    if (regExp.test(str) && str.length !== 0)
      throw new Error("Invalid nucleotide in strand");
    for (let [key, value] of values) {
      values.set(key, 0);
    }
    [...str].forEach((letter) => 
      values.set(letter, values.get(letter) + 1));
    
    for (let value of values.values()) {
        returnStr += value + " ";
    }
    return returnStr.trim();
  
  }
}