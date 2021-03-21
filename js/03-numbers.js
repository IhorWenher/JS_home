//const value = 'qwerty';
//const number = Number(value);
//console.log(number);

const blockWidth = '300.5px';
const width = Number.parseFloat(blockWidth);
console.log(width);


let number = prompt("введите число");
number = Number(number);
let power = prompt("введите степень");
power = Number(power);

console.log(number);
console.log(power);

const result = Math.pow(number, power);
console.log(result);