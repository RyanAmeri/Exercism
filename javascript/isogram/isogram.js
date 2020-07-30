export const isIsogram = (input) => {
  const charset = new Set();
  return [...input].every((letter) => {
    letter = letter.toLowerCase();
    if (letter === " " || letter === "-") return true;
    if (charset.has(letter)) return false;
    else charset.add(letter);
    return true;
  });
};
