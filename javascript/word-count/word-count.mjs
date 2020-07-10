export const countWords = (inputString) => {

  const wordCount = {};
  //Define splitters as regex. This matches all whitespace plus comma
  const splitter = /\s|,/gi;
  const allowedLetters = /[a-z0-9']/;
  const inputArr = inputString.toLowerCase().split(splitter);
  inputArr.forEach(word => {
    console.log(word);
    const cleanArr = [];
    [...word].forEach( letter => {
      console.log(letter)
      if (allowedLetters.test(letter)){
        cleanArr.push(letter);
        console.log(cleanArr)
      }
        
    })
    const cleanWord = cleanArr.join("");
    console.log(cleanWord);
    if (wordCount.hasOwnProperty(cleanWord)) {
      wordCount[cleanWord] = wordCount[cleanWord] +1;
    }
    else {
      wordCount[cleanWord] = 1;
    }
  });
  return wordCount;

};

console.log(countWords("Hello! darkness Hello,Hello"));
