export const classify = (inputNum) => {
  if (inputNum < 1)
    throw new Error("Classification is only possible for natural numbers.");
  let aliquot = 0;
  for (let i = 1; i < inputNum; i++) {
    if (inputNum % i === 0) {
      aliquot += i;
    }
  }
  return aliquot === inputNum ? "perfect" 
    : aliquot > inputNum ? "abundant" : "deficient";
};
