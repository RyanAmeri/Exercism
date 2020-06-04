const values = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong',
};


export const convert = (num) => {
  let factors = [];
  for (let i = num; i > 0; i--){
    if (num % i === 0)
      factors.push(i);
  }

  let str = "";
  for (let value in values){
    if (factors.includes(parseInt(value)))
      str += values[value];
  }

  return str ? str : num.toString();
};
