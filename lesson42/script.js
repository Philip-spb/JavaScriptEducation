'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + "px";
    console.log(box.scrollTop);  // Определяем сколько пикселей мы уже пролистали
});

console.log(box.getBoundingClientRect().top);

// Узнаем, отображен ли уже элемент на странице или нет
const style = window.getComputedStyle(box);
console.log(style.display);

// Получаем количество пикселей которое пользоваталь уже проистал на странице
console.log(document.documentElement.scrollTop);

// scrollTop мы можем присваевать и тем самым перемещать видимую область 
document.documentElement.scrollTop = 50;

// Скролим на 400 пикселей вниз относительно текущего положения
// window.scrollBy(0, 400);

// Скролим на 400 пикселей вниз относительно начала страницы
// window.scrollTo(0, 400);