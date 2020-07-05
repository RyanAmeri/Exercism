export const isPangram = (inputString) => {
   const alphabet = new Map();
   
   //Initialize map to 0
  for (let i = 97; i<= 122; i++) {
    alphabet.set(String.fromCharCode(i), 0);
  }

  //increment the map value for every letter in the inputString
  [...inputString.toLowerCase()].forEach((letter) => {
    if (alphabet.has(letter))
        alphabet.set(letter, alphabet.get(letter) +1)
      
  });

  //If any value in Map is 0, return false, else return true
  for (let value of alphabet.values()) {
    if (value === 0) {
      return false;
    }
  }
  return true;
};

