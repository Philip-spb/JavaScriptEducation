// Работа с датами

'use strict';

// console.log(now.setDate(18));

let start = new Date();

for (let i = 0; i < 1000000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);