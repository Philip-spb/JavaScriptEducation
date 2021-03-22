// ООП

'use strict';

let str = 'some';
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));


console.dir([1, 2, 3]);

const solder = {
    helth: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }
};

const john = {
    helth: 100
};

// Устаревший формат

// john.__proto__ = solder;

// john.sayHello();


// Актуальный формат

Object.setPrototypeOf(john, solder);

john.sayHello();


const smith = Object.create(solder);

smith.sayHello();