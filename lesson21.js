// Массивы и псевдомассивы

'use strict';

// const arr = [1, 2, 3, 6, 8];

// // arr.pop();                          // Удаляем последний элемент из массива
// arr.push(10);                          // Добавляем элемент в конец масиива

// // console.log(arr);

// for (let n in arr) {
//     console.log(arr[n]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item, id, arr) {   // Перебираем все элементы массива
//     console.log(`${id}: ${item} внутри масиива ${arr}`);
// });


// Разбиваем строку на массив
const str = prompt("", "");
const products = str.split(", ");
console.log(products);

// Сортировка массива (всегда сортирует как строки, 
// но мы можем указать callback функцию которая укажет как правильно сортировать)
products.sort();

// Объединяем массив в строку
console.log(products.join('; '));


const numberArr = [2, 13, 26, 8, 10];
numberArr.sort(compareNum);
console.log(numberArr);

function compareNum(a, b) {
    return a - b;
}