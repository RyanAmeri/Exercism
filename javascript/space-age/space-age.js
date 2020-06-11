const orbitalValues = new Map([
  ['mercury', 0.2408467],
  ['venus', 0.61519726],
  ['earth', 1],
  ['mars', 1.8808158],
  ['jupiter', 11.862615],
  ['saturn', 29.447498],
  ['uranus', 84.016846],
  ['neptune', 164.79132],
]);

export const age = (planet, seconds) => {
  const personAge = new Date(Number(seconds) * 1000);
  const EarthAge = personAge.getFullYear() - new Date(0).getFullYear() 
    + fractionOfYear(personAge);
  return Math.round(((EarthAge / orbitalValues.get(planet)) + Number.EPSILON) * 100) / 100; 
};

const fractionOfYear = (dateObj) => {
  const yearInSeconds = 3.15576e10;
  const firstDayOfYear = new Date(dateObj.getFullYear(), 0, 1);
  return (dateObj - firstDayOfYear) / yearInSeconds;

}
