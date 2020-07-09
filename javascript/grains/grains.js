export const square = (inputNum) => {
  if (inputNum < 1 || inputNum > 64)
    throw new Error("square must be between 1 and 64");
  return BigInt(2) ** BigInt(inputNum -1);
};

export const total = () => {
  let total = 0n;
  for (let i = 1; i <= 64; i++){
    total += square(i);
  }
  return total;
};
