/*const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
console.log(friends);

//табличка з індексами
console.table(friends);

//останній індекс
const lastIndex = friends.length - 1;
console.log(lastIndex);

//звернення до масиву
console.log(friends[0]); 

//зміна елемента (не змінної)

friends[1] = 'Ffdh'; 

console.log(friends);

//посилання при масивах шукає місце, де записаний масив
//два масиви ніколи не однакові, тому що порівнюються шляхи до розташування
*/
//перебір елементів масиву
/*
const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
console.table(friends);
const lastIndex = friends.length - 1;
*/

/*
for (let i = 0; i <= lastIndex; i += 1) {
    console.log(friends[i]);
    friends[i] += '-1';

}
*/

/*
//якщо не потрібно змінювати елементи на кожній ітерації
for (const friend of friends) {
    console.log(friend);
}

*/

//Порахувати загальну суму покупок
/*
const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;

//перебрати масив
/*for (let i = 0; i < cart.length; i += 1) {
    console.log(cart[i]);
    //кожний елемент додати до total
    total += cart[i];
}
*/
/*
//використовуємо if тому що не змінюємо елементів
for (const value of cart) {
    total += value;
}

console.log('Total:', total);
*/
//зробити змінну total до циклу
//кожен елемент додати до total


/*
// Підрахунок всіх парних чисел в масиві
const numbers = [54, 28, 105, 70, 92, 17, 120];
let total = 0;
// змінна total


//перебрати масив
for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];
    console.log(numbers[i]);

    //при кожній ітерації перевірити елемент на парність
    if (number % 2 === 0) {
        console.log('Парне!')
        // якщо партний - додаємо до total 
        total += number;
    }
}*/

/*
//простіший варінт, якщо не треба змінювати елементи
for (const number of numbers) {
    console.log(number);
    if (number % 2 === 0) {
        console.log('Парне')
        total += number;
    }
}
console.log('Total:', total);

*/

//Скрипт для пошуку логіну
const logins = ['m4ngoDone', 'k1widab3st', 'poly1scute', 'aj4xth3m4h'];
const loginToFind = 'poly1scute';
//let message = `Пользователь ${loginToFind} не найден.`;

/*
for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];

    console.log('Login:', login);

    console.log(`${login} === ${loginToFind}: `, login === loginToFind);


    if (login === loginToFind) {
        console.log('Ура, рівні!')
        message = `Пользователь ${loginToFind} найден`;
        break;
    }
}
*/

/*
for (const login of logins) {
    console.log('Login:', login);
    console.log(`${login} === ${loginToFind}: `, login === loginToFind);
    if (login === loginToFind) {
        console.log('Ура, рівні!')
        message = `Пользователь ${loginToFind} найден`;
        break;
    }
}

console.log(message); */

//Альтернатива через абстракцію, входить чи ні?
const message = logins.includes(loginToFind)
    ? `Користувач ${loginToFind} знайдений.`
    : 'Користувач ${loginToFind} не знайдений';
console.log(message);





