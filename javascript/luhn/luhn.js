export const valid = (inputString) => {
  //remove all whitespace using a simple regex
  let cleanInput = inputString.replace(/\s/g, "");
  //Check every digit is an integer. If not return false
  if (![...cleanInput].every(digit => Number.isInteger(Number(digit))))
    return false;
  //single digit strings are not valid
  if (cleanInput.length < 2)
    return false;

  //Simple loop that starts at the end of cleanInput and comes back every other digit
  for (let i = cleanInput.length - 2; i >= 0; i = i-2) {
    let num = Number(cleanInput[i]) * 2;
    if (num > 9)
      num -= 9;
    cleanInput = replaceAt(cleanInput, i, num.toString())
  }

  return countTotalValue(cleanInput) % 10 === 0 ? true : false;

};

// Count the total value of all the digits using a simple reduce
function countTotalValue(inputString) {
  return [...inputString].reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue)
    }, 0);
}

//This functions replaces the characters in input from index with replacement
function replaceAt(input, index, replacement) {
  return input.substr(0, index) + replacement + input.substr(index + replacement.length);
}

/* Below is the solution by ceilfors. This really is much more beautiful, simply using array methods. I am including it here for future reference 
export default class Luhn {
  constructor (input) {
    if (input.length <= 1) {
      this.valid = false
      return
    }

    const luhnTotal = input.replace(/\s/g, '')
      .split('')
      .reverse()
      .map(digit => Number(digit))
      .map((num, index) => (index + 1) % 2 === 0 ? num * 2 : num)
      .map(num => num > 9 ? num - 9 : num)
      .reduce((sum, value) => sum + value, 0)
    this.valid = luhnTotal % 10 === 0
  }
}
*/