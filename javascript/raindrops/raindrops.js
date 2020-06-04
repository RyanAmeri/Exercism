const values = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong',
};


export const convert = (num) => {
  let str = "";
  for (let value in values){
    if ( num % (parseInt(value)) === 0)
      str += values[value];
  }
  return str ? str : num.toString();
};
