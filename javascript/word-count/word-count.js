export const countWords = (inputString) => {

  const wordCount = {};
  //Define splitters as regex. This matches all whitespace plus comma
  const splitter = /[ ,]+/;
  const allowedLetters = /[a-z0-9']/;

  const inputArr = inputString.toLowerCase().split(splitter);
  console.log(inputArr)
  inputArr.forEach(word => {
    const cleanArr = [];
    [...word].forEach( letter => {
      if (allowedLetters.test(letter)){
        cleanArr.push(letter);
      }
        
    })
    const cleanWord = cleanArr.join("");
    if (wordCount.hasOwnProperty(cleanWord)) {
      wordCount[cleanWord] = wordCount[cleanWord] +1;
    }
    else {
      wordCount[cleanWord] = 1;
    }
  });
  console.log(wordCount);
  return wordCount;

};
