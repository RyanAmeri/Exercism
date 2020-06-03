

export const transform = (oldObj) => {
  const newObj = {};
  for (let key in oldObj){
      for (let element of oldObj[key]){
          newObj[element.toLowerCase()] = parseInt(key);
      }
  }
  return newObj;
};
