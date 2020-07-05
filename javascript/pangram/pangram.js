export const isPangram = (inputString) => {

  //I did not come up with the regex myself, borrowed from https://stackoverflow.com/questions/32557299/javascript-pangram-regex

  //I think I can understand what it's doing, but I could not write this myself
  const regex = /([a-z])(?!.*\1)/g;
  return (inputString.toLowerCase().match(regex) || []).length === 26;
};

