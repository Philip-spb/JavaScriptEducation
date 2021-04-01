'use strict';

// Устаревшие способы получения элементов со страницы
// Получаем элемент по ID
// const box = document.getElementById('box');
// console.log(box);

// Получаем все элементы button (получаем псевдо массив)
const btns = document.getElementsByTagName('button');
console.log(btns);

// Получаем все элементы по классам
const circles = document.getElementsByClassName('circle');
console.log(circles);

// Актуальные способы получение элементов со страницы
// Получение элементов по CSS селлектору
const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});

// Этот метод получает первый элемент по селлеатору на странице
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);