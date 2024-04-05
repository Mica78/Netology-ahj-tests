import cardTypes from "./card-types";

export function isValid(number) {
  const arr = `${number}`
    .split("")
    .reverse()
    .map((x) => Number.parseInt(x));
  const lastDigit = arr.shift();
  let sum = arr.reduce(
    (acc, val, i) =>
      i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
    // eslint-disable-next-line prettier/prettier
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
}

export function getBrand(number) {
  let types = [];
  for (let i = 0; i < cardTypes.length; i++) {
    if (
      cardTypes[i].lengths.includes(String(number).length) &&
      cardTypes[i].pattern.test(number)
    ) {
      types.push(cardTypes[i]);
    }
  }
  if (types.length === 1) return types[0].alias;
}
