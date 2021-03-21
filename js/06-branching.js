/*let balance = 100;
const payment = 2000;

console.log(
    `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во средств на счету` ,

)

if (balance >= payment) {
    balance = balance - payment;
    console.log("Все хорошо! Снимаем деньги, спасобо за покупку!");
    console.log(`На счету осталось ${balance} кредитов`);
    
} else {
    console.log("На счету недостаточно средств для проведения операции!");

}*/

/*const totalExpenses = 20000;
const payment = 500; 
let discount = 0;

if (totalExpenses >= 100 && totalExpenses < 1000) {
    discount = 0.02;
    console.log("Бронзовый партнер, скидка 2%");
} else if (totalExpenses >= 1000 && totalExpenses < 5000) {
    discount = 0.05;
    console.log("Серебрянный партнер, скидка 5%");
} else if (totalExpenses >= 5000) {
    discount = 0.1;
    console.log("Золотой пертнер, скидка 10%");
} else {
    console.log("У вас еще нет партнерской скидки");
}

const finalAmount = payment - payment * discount;
console.log(finalAmount);

console.log(`Оформляем заказ на сумму ${finalAmount} со скидкой ${discount * 100}%`);*/
    


// тернарні
/*const age = 16;
const category = age >= 18 ? "adult" : "child";
console.log(category);*/

/*const stars = 4;
let result;

switch (stars) {
    case 1:
        result = "case 1";
        break
    
    case 2:
        result = "case 2";
        break
    case 3:
        result = "case 3";
        break
    case 4:
        result = "case 4";
        break
    case 5:
        result = "case 5";
        break
    
    default:
        result = "Неверный ввод";
}

console.log(result);



console.log("before");

for (let count = 0; count < 5; count += 1) {
    console.log(`Count ${count}`);
}

console.log("after");

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
    let discount;
    // Пиши код ниже этой строки

if (totalSpent < 5000) {
  discount = `Cкидка ${BASE_DISCOUNT}`;
} else if(totalSpent >= 5000 && totalSpent < 20000) {
 discount = `Cкидка ${BRONZE_DISCOUNT}`;
} else if (totalSpent >= 20000 && totalSpent < 50000) {
 discount = `Cкидка ${SILVER_DISCOUNT}`;
} else {
 discount = `Cкидка ${GOLD_DISCOUNT}`;	
}

  // Пиши код выше этой строки
  return discount;
}*/


