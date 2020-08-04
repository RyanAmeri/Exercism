export const parse = (input) => {
  //This Regex matches anything that's not a character or whitespace
  const regex = /[^a-z\s]+/gi;
  return input
    .replace("-", " ") /* first replace '-' with space, */
    .replace(regex, "") /* remove everything that matches regex */
    .split(" ") /* turn string to array */
    .map((word /* return the fist character as uppercase */) =>
      word.slice(0, 1).toUpperCase()
    )
    .join(""); /* Convert array to string and return */
};
