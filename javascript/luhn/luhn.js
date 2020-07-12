export const valid = (inputString) => {
  //remove all whitespace using a simple regex
  const cleanInput = inputString.replace(/\s/g, "");
  //Check every digit is an integer. If not return false
  if (![...cleanInput].every(digit => Number.isInteger(Number(digit))))
    return false;
  //single digit strings are not valid
  if (cleanInput.length < 2)
    return false;
  let resultString = cleanInput;
  //Simple loop that starts at the end of cleanInput and comes back every other digit
  for (let i = cleanInput.length - 2; i >= 0; i = i-2) {
    let num = Number(cleanInput[i])
    num *=2;
    if (num > 9)
      num -= 9;
    resultString = replaceAt(resultString, i, num.toString())
  }

  // Count the total value of all the digits using a simple reduce
  const total = [...resultString].reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue)
    }, 0);
    
  return total % 10 === 0 ? true : false;
};

//This functions replaces the characters in input from index with replacement
function replaceAt(input, index, replacement) {
  return input.substr(0, index) + replacement + input.substr(index + replacement.length);
}