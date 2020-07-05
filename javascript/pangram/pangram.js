const alphabet = new Map([
  ['a',], ['b',], ['c',], ['d',], ['e',], ['f',], ['g',], ['h',], ['i',], ['j',], ['k',], ['l',], ['m',], ['n',], ['o',], ['p',], ['q',], ['r',], ['s',], ['t',], ['u',], ['v',], ['w',], ['x',], ['y',], ['z',],
]);
export const isPangram = (inputString) => {
   let panagram = true;
  //Initialize map to 0
  for (let key of alphabet.keys()) {
    alphabet.set(key, 0);
  }

  [...inputString.toLowerCase()].forEach((letter) => {
    if (alphabet.has(letter))
        alphabet.set(letter, alphabet.get(letter) +1)
      
  });

  for (let value of alphabet.values()) {
    if (value === 0) {
      panagram = false;
      break;
    }
  }
  return panagram;
};

