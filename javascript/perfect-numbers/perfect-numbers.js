export const classify = (inputNum) => {
  if (inputNum < 1)
    throw new Error("Classification is only possible for natural numbers.");
  const factors = [];
  for (let i = 1; i < inputNum; i++) {
    if (inputNum % i === 0) {
      factors.push(i)
    }
  }
  const aliquot = factors.reduce((a, b) => a + b, 0);
  console.log(aliquot);
  return aliquot === inputNum ? "perfect" 
    : aliquot > inputNum ? "abundant" : "deficient";
};
