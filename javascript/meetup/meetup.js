const cal = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
}

const dictionary = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};


const monthLength = (year, month) => new Date(year, month +1, 0).getDate();

function populateCal(year, month) {
  for (let i = 1; i <= monthLength(year, month); i++) {
    let currentDay = new Date(year, month, i);
    cal[currentDay.getDay()].push(currentDay);
  }
}

function clearCal() {
    for (let i = 0; i < 7; i++){
        cal[i] = [];
    }
}

export const meetup = (year, month, descriptor, inputDay) =>  {
  populateCal(year, month - 1);
  let daysArray = [];
  for (let i = 0; i < 7; i++){
    if (dictionary[i] === inputDay){
      daysArray = Array.from(cal[i]);
    }
  }
  
  clearCal();

  switch (descriptor){
      case 'first':
          return daysArray[0];
          break;
      case 'second':
          return daysArray[1];
          break;
      case 'third': 
          return daysArray[2];
          break;
      case 'fourth':
          return daysArray[3];
          break;
      case 'last':
          return daysArray[daysArray.length - 1];
          break;
      case 'teenth':
          for (let i = 0; i < daysArray.length; i++){
              if (daysArray[i].getDate() > 12 && daysArray[i].getDate() < 20)
                  return daysArray[i];
          }
          break;
  }

}
