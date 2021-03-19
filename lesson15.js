// Функции

'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello, JS!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(10,12));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    // Данную функццию можно использовать только после её объявления
    console.log('Hello, function expression!');
};

logger();

// Можно записывать без фигурных скобок
// const newCalc = (a,b) => a + b;

const newCalc = (a,b) => { 
    return a + b; 
};

console.log(newCalc(2,3));