// Объекты, деструктуризация объектов из ES6

'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){                   // Создаем метод в объекте
        console.log('Test');
    }
};

// Деструктуризация
const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);   // !!! Считаем количество элементов в объекте

options.makeTest();


// console.log(options.name);

// delete options.name;                     // удаляем элемент

// console.log(options.name);

// Перебираем все свойства объекта

let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }

}

console.log(counter);