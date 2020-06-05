/* 
This is not the most simple method. But it is rather flexible and easily extensible in the future. 
It completely seperates the data from the logic. 
*/

const dictionary = new Map([
  ['eggs', 1],
  ['peanuts', 2], 
  ['shellfish', 4],
  ['strawberries', 8],
  ['tomatoes', 16], 
  ['chocolate', 32],
  ['pollen', 64], 
  ['cats', 128],
]);

 //Set the maximum number. This should be changed if the dictionary is modified. 
const currentMaximum = 256;


export class Allergies {
  _personalAllergies = new Map();
  constructor(num) {
   
    let realNum = num % currentMaximum; 
    // Sort the "Dictionary" Map by descending values. 
    const sortDict = new Map([...dictionary.entries()].sort((a, b) => b[1] - a[1] ));
    // Main logic:
    for (const [key, value] of sortDict) {
      if (realNum >= value) {
          this._personalAllergies.set(key, value);
          realNum -= value;
      }
    }
  }

  list() {
    // The tests require the array in ascending order, so we have to reorder our Map
    const tempAllergies = new Map([...this._personalAllergies.entries()].sort((a, b) => a[1] - b[1] ));
    return [...tempAllergies.keys()];
  }

  allergicTo(name) {
    return this._personalAllergies.has(name) ? true : false;
  }
}

