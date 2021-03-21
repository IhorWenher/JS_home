/*
console.log("faka");

const hotel = {
    name: 'WengerHotel',
    capacity: 100,
    potential: 20,
    atential: 63,
    getName
};



hotel.greetInWh();

for (const key in hotel) {
    console.log(key, hotel[key]);
}

const keys = Object.entries(hotel);

console.log(keys);

const numbers = [51, 18, 13, 24, 7, 85, 19];

const min = Math.min(...numbers);

console.log(min);
*/




/*
const object = { name: 'Mango', age: 2 };


function countProps(object) {
    let propCount = 0;

    for (let ownProps in object) {
        if (object.hasOwnProperty(ownProps)) {
            propCount += 1;
        }
    }

    return console.log(propCount);
}
*/

/*
const objectC = {
    name: 'Pes',
    age: 4,
    lastname: 'Zbrid',
};


const objectB = Object.create(objectC);

objectB.color = 'blue';

const objectA = Object.create(objectB);


console.log(objectA);

objectA.lastname = 'Kurko';

console.log(objectA.hasOwnProp);

const object2 = {
    name: 'Fruct',
    age: 3,
    color: 'red',
};

const object = {
    name: 'Mango',
    age: 2,
    __proto__: object2,
};


*/

/*
const result = [];
for (var i = 0; i < 5; i++) {
    const item = i;
  result[i] = function () {
      return function () { console.log(item) }
  };
}

result[0](); // 5, ожидаем 0
result[1](); // 5, ожидаем 1
result[2](); // 5, ожидаем 2
result[3](); // 5, ожидаем 3
result[4](); // 5, ожидаем 4

*/
/*
class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 10000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
      if (Car.MAX_PRICE >= newPrice) {
          this.#price = newPrice;
       }
    
  }
  // Пиши код выше этой строки
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

*/
/**
 * Отсортируй c помощью фугкции
 * массив по приоритету где вначале 'Super High'
 * а в конце 'Backlog'.
 * Если приоритет будет одинаковый, то первее будет тот, у кого id меньше
 * const PRIORITY нельзя изменять
 * const array нельзя изменять
 */


const PRIORITY = {
  SUPER_HIGH: 'Super High',
  HIGH: 'High',
  NORMAL: 'Normal',
  LOW: 'Low',
  BACKLOG: 'Backlog',
};

const array = [
  { id: 0, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 1, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 2, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 3, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 4, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 5, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 6, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 7, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 8, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 9, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 10, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 11, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 12, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 13, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 14, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 15, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 16, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 17, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 18, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 19, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 20, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 21, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 22, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 23, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 24, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 25, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 26, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 27, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 28, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 29, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 30, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 31, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 32, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 33, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 34, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 35, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 36, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 37, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 38, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 39, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 40, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 41, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 42, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 43, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 44, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 45, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 46, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 47, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 48, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 49, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 50, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 51, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 52, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 53, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 54, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 55, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 56, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 57, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 58, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 59, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 60, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 61, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 62, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 63, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 64, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 65, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 66, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 67, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 68, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 69, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 70, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 71, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 72, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 73, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 74, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 75, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 76, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 77, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 78, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 79, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 80, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 81, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
  { id: 82, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 83, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 84, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 85, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 86, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 87, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 88, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 89, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 90, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 91, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 92, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 93, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 94, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 95, text: 'This is Normal', priority: PRIORITY.NORMAL },
  { id: 96, text: 'This is Low', priority: PRIORITY.LOW },
  { id: 97, text: 'This is Super High', priority: PRIORITY.SUPER_HIGH },
  { id: 98, text: 'This is High', priority: PRIORITY.HIGH },
  { id: 99, text: 'This is Backlog', priority: PRIORITY.BACKLOG },
];


//Моє рішення

const sortArray = () => {
    
    array.sort((a, b) => {
        let newA = 0;
        let newB = 0;

        const values = Object.values(PRIORITY);

        for (let item of values) {
            if (a.priority === item) {
                newA = values.indexOf(item);
            }

            if (b.priority === item) {
                newB = values.indexOf(item);
            }
        }

      return newA - newB;
    });

    array.sort((a, b) => {
        if (a.priority === b.priority)
            return a.id - b.id;
        }
    );

    console.log(array);
}

sortArray();
