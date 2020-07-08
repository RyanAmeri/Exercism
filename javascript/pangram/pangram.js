export const isPangram = (inputString) => {
  const alphabet = [];
  
  //Initialize array to alphabet
  for (let i = 0; i<= 25; i++) {
    alphabet[i]  = String.fromCharCode(i + 97);
  }
  return alphabet
          .every(letter => inputString.toLowerCase().includes(letter))
};

