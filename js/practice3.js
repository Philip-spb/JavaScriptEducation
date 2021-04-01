/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

'use strict';

let numberOfFilms;

function start() {

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

    let i = 0;

    while (i < 2) {
        const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', ''),
            filmRate = prompt('На сколько оцените его?', '');

        if (!lastWatchedFilm || !filmRate || lastWatchedFilm.length > 50) {
            continue;
        }
        personalMovieDB.movies[lastWatchedFilm] = filmRate;
        i++;
    }

}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {

    while (personalMovieDB.genres.length < 3) {

        let genre;
        const genreIndex = personalMovieDB.genres.length;

        while (!genre) {
            genre = prompt(`Ваш любимый жанр под номером ${genreIndex + 1}`, "");
        }

        personalMovieDB.genres[genreIndex] = genre;
    }

}

writeYourGenres();
