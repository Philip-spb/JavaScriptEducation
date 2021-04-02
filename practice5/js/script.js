/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adds = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const promoBg = document.getElementsByClassName('promo__bg')[0];
const promoInteractiveList = document.querySelector('.promo__interactive-list');
const promoInteractiveItems = promoInteractiveList.querySelectorAll('.promo__interactive-item');

adds.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';
promoBg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';

// promoInteractiveItems.forEach(item => {
//     item.remove();
// });

// Можно удалить все значения путем запись пустой строки вместо имеющегося элемента
promoInteractiveList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((value, index) => {
    promoInteractiveList.innerHTML += `
    <li class="promo__interactive-item">
        ${++index} – ${value}
        <div class="delete"></div>
    </li>`;
});