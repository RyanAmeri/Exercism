
export const toRna = (inputDNA) => [...inputDNA].map(DNA => TRANSCRIPTIONS[DNA]).join("");

const TRANSCRIPTIONS = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}; 