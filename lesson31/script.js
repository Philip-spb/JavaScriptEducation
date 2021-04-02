// События и их обработчики

'use strict';

// const div = document.createElement('div');
// div.classList.add('simple_text');
// div.innerHTML = 'Проверка добавления текста';

// function addText() {
//     document.body.append(div);
// }

// function delText() {
//     document.querySelector('.simple_text').remove();
// }


const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// Это плохой способ, так как последующие назначения аналогичных событий будут перезаписывать предыдущие
// btn.onclick = function() {
//     alert('Click');
// };

let i = 0;

const deleteElementOld = (e) => {
    console.log(e.target);  // e.target <- указатель на активный элемент
    // e.target.remove();
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

// В функцию передается объект Event, который можно называть абсолютно по любому
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(newBtn => {
    newBtn.addEventListener('click', deleteElement, {once: true});
});

// Всплытие событий это когда обработчик событий срабатывает вначале на самом вложенном элементе, 
// затем на родителе и так выше и выше


const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();  // Отменяем дефолтное действие при клике (например переход по ссылке)
    console.log(e.target);
});
