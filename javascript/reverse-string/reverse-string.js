
export const reverseString = (inputString) => {
  let newString = [...inputString];
  newString.reverse();
  return newString.join("");
};
