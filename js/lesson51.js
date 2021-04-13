// JSON формат передачи данных

'use strict';

const person = {
    name: 'Alex',
    tel: '+72332233231',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// console.log(JSON.stringify(person));

// console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));

clone.parents.mom = 'Ann';

console.log(clone);
console.log(person);
