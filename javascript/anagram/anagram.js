export const findAnagrams = (word, list) => {
  return list.filter((item) => {
    return [...item].every((char) => {
      return (
        [...word.toLowerCase()].includes(char.toLowerCase()) &&
        word.length === item.length &&
        word.toLowerCase() !== item.toLowerCase() &&
        compareMaps(countChars(word), countChars(item))
      );
    });
  });
};

function countChars(word) {
  const map = new Map();
  const newWord = word.toLowerCase();
  [...newWord].forEach((char) => {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  });
  return map;
}

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key] of map1) {
    if (map1.get(key) !== map2.get(key)) return false;
  }
  return true;
}
