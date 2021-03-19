// Методы

// Работа со строками

'use strict';

console.dir(Number);  // Посмотреть все методы объекта Number

const str = "test";

console.log(str.toUpperCase());
console.log(str[2]);

const fruit = "Some fruit";

console.log(fruit.indexOf('fruit'));  // Получим 5

const logg = "Hello, World";

const startWorld = logg.indexOf('World');
const lenLogg = logg.length;

console.log(logg.slice(startWorld, lenLogg));  // Отрицательные значения отсчитываются с конца строки

console.log(logg.substr(startWorld, 2));  // Вторым аргументом указываем сколько символов нам необходимо вырезать

// Работа с числами
// Для работы с числами используется стандартная бибблиотека  Math


const num = 2.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));  // Можно также использовать parseFloat