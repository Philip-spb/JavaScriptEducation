// Динамическая типизация

'use strict';

// To String

// 1)
// Таким способом редко пользуются

console.log(typeof (String(null)));
console.log(typeof (String(4)));

// 2)
// Конкатинация

console.log(typeof (5 + ''));


const num = 5;

console.log("https//vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof (Number('4')));

// 2)
// Унарный оператор +

console.log(typeof (+'5'));

// 3)
console.log(typeof (Number(parseInt("15px", 10))));

let answ = +prompt("Hello", "");

// To boolean

// Всегда будет False: 0, '', null, underfined, NaN
// Все остальное True


// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof (Boolean('4')));

// 3)
console.log(typeof (!!"234567"));