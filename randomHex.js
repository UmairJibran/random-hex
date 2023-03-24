const validValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

const randomValue = () => {
  return validValues[Math.floor(Math.random() * validValues.length)];
};

const randomHex = () => {
  const parts = [];
  for (let index = 0; index < 6; index++) {
    parts.push(randomValue());
  }
  return parts.join('');
};

console.log(randomHex()); // 79279F
