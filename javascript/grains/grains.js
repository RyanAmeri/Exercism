export const square = (inputNum) => {
  if (inputNum < 1 || inputNum > 64)
    throw new Error("square must be between 1 and 64");
  return BigInt(2) ** BigInt(inputNum -1);
};

export const total = () => {
  return square(64) * 2n - 1n;
};
