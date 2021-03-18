// Условия

'use strict';

if (4 == 9){
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok!');
}

// Тернарные операторы

(num === 50) ? console.log('Ok!') : console.log('Error');

// Switch

switch (num) {
    case 49:
        console.log('Not right');
        break;
    case 100:
        console.log('Not right');
        break;
    case 50:
        console.log('OK!');
        break;
    default:
        console.log('Not now');
        break;
}

