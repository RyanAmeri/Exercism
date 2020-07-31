function isUnique(set, letter) {
  letter = letter.toLowerCase();
  if (letter === " " || letter === "-") return true;
  if (set.has(letter)) return false;
  else set.add(letter);
  return true;
}

export const isIsogram = (input) => {
  const charset = new Set();
  return [...input].every((letter) => isUnique(charset, letter));
};
