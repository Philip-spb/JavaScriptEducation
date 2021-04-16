'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// // Требуется получить все имена в которых меньше чем 5 символов

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);


// every/some

// const some = [4, 'qwq', 'asdasdawq'];

// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// // Суммируем все элементы

// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);


// const arr = ['apple', 'pear', 'plum'];

// // Суммируем все элементы

// const res = arr.reduce((sum, current) => sum +', '+ current);
// console.log(res);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

// Задача: вытащить имена людей

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr);