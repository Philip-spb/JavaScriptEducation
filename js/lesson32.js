// Навигация по DOM дереву

'use strict';

// console.log(document.body);

// document.documentElement – Получаем полный HTML код страницы
// console.log(document.documentElement);


// childNodes – получаем всех потомков (все ноды) родительского элемента body
// console.log(document.body.childNodes);


// Получем первого и последнего потомка родительского элемента
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);


// parentNode – Получаем родительский элемент
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// !!! Чтобы не получать пустые строки необходимо использовать функции previousElementSibling, parentElemen и тп.


// Переберем всех потомков body за исключением пустых строк '#text'
for (let node of document.body.childNodes){
    if (node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}