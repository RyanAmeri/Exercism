export const primeFactors = (inputNum) => {
  let num = inputNum;
  let factors = [];
  while (num > 1){
    for (let i = 2; i <= num; i++){
      if (num % i === 0){
        factors.push(i);
        num /= i;
        break;
      }
    }
  }
  return factors;
  
};
