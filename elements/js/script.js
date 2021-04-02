// Получение элементов на странице и работас ними

'use strict';

// const { wrap } = require("module");

// Устаревшие способы получения элементов со страницы
// Получаем элемент по ID
const box = document.getElementById('box');
// console.log(box);

// Получаем все элементы button (получаем псевдо массив)
const btns = document.getElementsByTagName('button');
// console.log(btns);

// Получаем все элементы по классам
const circles = document.getElementsByClassName('circle');
// console.log(circles);

// Актуальные способы получение элементов со страницы
// Получение элементов по CSS селлектору
const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item);
// });

// Этот метод получает первый элемент по селлектору на странице
const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

const wraper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// Так можно перебрать все элементы, но так не делают
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// Добавляем элемент в конец страницы
// document.body.append(div);

// Добавляем элемент в конец блока wrapper (родителя)
wraper.append(div);
// wraper.appendChild(div); // Это устаревший метод

// Добавляем элемент в начало блока wrapper (родителя)
// wraper.prepend(div);

// Добавляем элемент перед заданным элементом
// hearts[1].before(div);

// Добавляем элемент после заданного элемента
// hearts[1].after(div);

// Устаревший метод
// wraper.insertBefore(div, hearts[1]);  // Первым параметром мы указываем какой элемент вставляем, вторым – перед каким элементом мы его вставляем.

// Удаление элемента со страницы
// circles[0].remove();

// Устаревший метод удаления элемента
// wraper.removeChild(hearts[1]);

// Заменяем один элемент на странице другим элементом со страницы
// hearts[0].replaceWith(circles[1]);

// Устаревший метод замены элемента
// wraper.replaceChild(circles[1], hearts[0]); // Первым аргументом указываем тот элемент на который меняем, вторым – тот каокторый меняем


// Добавляем наполнение для созданного элемента
div.innerHTML = "<h1>Hello, World!</h1>";  // Подходиьт для вставки HTML

// div.textContent = "<h1>Hello</h1>"; // Подходиьт для вставки только текста (не HTML)

div.insertAdjacentHTML('afterend', '<h2>Hello2</h2>'); //Первый аргумент – это специальное слово, второй – текст который мы хотим вставить

// afterbegin – после начала
// afterend – после окончания
// beforebegin – перед началом
// beforeend – после окончания элемента