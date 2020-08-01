export const clean = (input) => {
  const regex = /\D+/gi;
  const wordRegEx = /[a-z]+/gi;
  const puncRegEx = /@|:|!/g;
  //Input checking
  if (puncRegEx.test(input)) throw new Error("Punctuations not permitted");
  if (wordRegEx.test(input)) throw new Error("Letters not permitted");

  //Clean up input
  let clean = input.replace(regex, "");
  if (clean.length < 10) throw new Error("Incorrect number of digits");
  if (clean.length > 11) throw new Error("More than 11 digits");
  //If number is 11 digits, it's only acceptable if the first digit is 1
  if (clean.length === 11) {
    if (clean.startsWith("1")) clean = clean.slice(1);
    else throw new Error("11 digits must start with 1");
  }
  //Area code and exchange checking
  if (clean.slice(0, 1) === "0")
    throw new Error("Area code cannot start with zero");
  if (clean.slice(0, 1) === "1")
    throw new Error("Area code cannot start with one");
  if (clean.slice(3, 4) === "0")
    throw new Error("Exchange code cannot start with zero");
  if (clean.slice(3, 4) === "1")
    throw new Error("Exchange code cannot start with one");

  return clean;
};
