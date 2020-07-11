export const countWords = (inputString) => {

  const wordCount = {};
  
  const cleanInput = inputString
    .toString()
    .trim()
    .toLowerCase()
    .match(/([A-Za-z0-9]+('[a-z])?)/g);
  
  cleanInput.forEach(word => {
    wordCount.hasOwnProperty(word) ? 
      wordCount[word] = wordCount[word] +1 : wordCount[word] = 1;
  });
  return wordCount;
};
