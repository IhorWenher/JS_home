//шукаємо найменший номер з масиву
/*const numbers = [51, 18, 13, 24, 7, 85, 19];

let smallestNumber = numbers[0];

console.log(smallestNumber);

for (const number of numbers) {
    console.log(number); 
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log('smallestNumber:', smallestNumber);
*/

//зшиваємо масив в одну лінійку

/*const friends = ['Mangi', 'Poly', 'Kivi', 'Ajax'];
let string = '';

for (const friend of friends) {
    string += friend + ',';
}

string = string.slice(0, string.length -1)


//
const string = friends.join('---');
console.log(string);
*/

//Зміна регістра

/*
const string = 'dfweWEQWQWDWSwscxewqQWW'
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
    console.log(letter);

    const isEqual = letter === letter.toLowerCase();
    invertedString += isEqual ? letter.toUpperCase() : letter.toLocaleLowerCase();
}

console.log('invertedString:', invertedString);
*/

/*
//розбиваємо і зшиваємо рядок
const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase();
const words = normalizedTitle.split(' ');
const slug = words.join('-');
const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);
*/

//сума елементів двох масивів з конкат

/*
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2);

for (const number of numbers) {
    total  += number;
}

console.log(total);
*/

//splice деструктивний
/*
let min = 5;
let max = 8;

function createArrayOfNumbers(min, max) {

  // Пиши код ниже этой строки
  for(let i = min; i < max; i += 1) {
   console.log(i)
  }
  // Пиши код выше этой строки
  
}*/


