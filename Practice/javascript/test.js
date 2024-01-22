numbers = [5, 4, 3, 6, 1];

let firstOverFive = numbers.find(num => num > 5);
let firstIndexOverFive = numbers.findIndex(num => num > 5);
console.log(firstOverFive);
console.log(firstIndexOverFive);

let numberString = numbers.toString();
let numberLocaleString = numbers.toLocaleString();
console.log(typeof numberString);
console.log(numberString);
console.log(numberLocaleString);