// Циклы

'use strict';

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}


do {
    console.log(num);
    num++;
}
while (num < 60);


for (let i = 1; i < 8; i++) {
    console.log(i);
}


for (let i = 1; i < 20; i++) {
    
    if (i == 6 ){
        // break; // Прерывание цикла 
        continue; // Пропуск шага в цикле
    }

    console.log(i);
}