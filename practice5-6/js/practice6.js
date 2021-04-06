/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// 'DOMContentLoaded' – Это событие которое срабатывает когда вся DOM структура страницы уже загружена

document.addEventListener('DOMContentLoaded', () => {

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
    const adding = document.querySelector('.adding__input');
    const addButton = document.querySelector('.add button');
    let delButtons;
    // Checkbox удобнее всего найти через атрибуты
    const favorite = document.querySelector('[type="checkbox"]');

    const deleteAdv = (arr) => {
        // Удаляем блоки со страницы
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        // Вносим необходимые изменения на страницу
        genre.textContent = 'драма';
        promoBg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';
    };

    function clearFilms() {
        // Очищаем список фильмов на странице
        promoInteractiveList.innerHTML = "";
    }

    function sortFilms() {
        // Сортируем фильмы по алфавиту
        movieDB.movies.sort();
    }

    const deleteMove = (e) => {
        // Удаляем фильм из БД
        const index = e.target.parentElement.getAttribute('data-index');
        movieDB.movies.splice(index, 1);
        clearFilms();
        sortFilms();
        fillFilms();
    };

    function fillFilms() {
        // Выводим список фильмов
        movieDB.movies.forEach((value, index) => {
            const curIndex = ++index;
            promoInteractiveList.innerHTML += `
            <li class="promo__interactive-item" data-index="${curIndex - 1}">
                ${curIndex} – ${value}
                <div class="delete"></div>
            </li>`;
        });
        delButtons = document.querySelectorAll('.delete');

        delButtons.forEach(button => {
            button.addEventListener('click', deleteMove);
        });
    }

    deleteAdv(adds);
    makeChanges();

    clearFilms();
    sortFilms();
    fillFilms();

    function isMovieInDb(movie) {
        // Определяем есть ли уже фильм в нашей базе
        let idDb = false;
        movieDB.movies.forEach(element => {
            if (movie.toLowerCase() === element.toLowerCase()) {
                idDb = true;
            }
        });
        return idDb;
    }

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let movie = adding.value;

        if (movie.length > 21) {
            movie = movie.substr(0, 21) + '...';
        }

        if (movie && !isMovieInDb(movie)) {

            delButtons.forEach(button => {
                button.removeEventListener('click', deleteMove);
            });

            movieDB.movies.push(movie);

            clearFilms();
            sortFilms();
            fillFilms();

            if (favorite.checked) {
                console.log("Добавляем любимый фильм");
            }
        }

    });

});