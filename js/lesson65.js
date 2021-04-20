'use strict';

// new RegExp('pattern', 'flags');

// /patter/f

// const ans = prompt('Введите ваше имя');

//  Ищем все маленькие буквы 'n'

// const reg = /n/ig;
// console.log(reg.test(ans));

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));
