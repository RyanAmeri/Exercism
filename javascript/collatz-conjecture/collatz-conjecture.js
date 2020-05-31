export const steps = (num) => {
  if (num < 1)
    throw "Only positive numbers are allowed";
  else {
    let counter = 0;
    let res = num;
    while (res !== 1){
      res = collatz(res);
      counter++;
    }
    return counter;
  }
};

const collatz = (input) =>
  input % 2 === 0 ? input /2 : input * 3 + 1;