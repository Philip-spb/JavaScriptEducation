/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {

        let numberOfFilms;

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }

        this.count = numberOfFilms;
    },


    rememberMyFilms: function () {

        let i = 0;

        while (i < 2) {
            const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', ''),
                filmRate = prompt('На сколько оцените его?', '');

            if (!lastWatchedFilm || !filmRate || lastWatchedFilm.length > 50) {
                continue;
            }
            this.movies[lastWatchedFilm] = filmRate;
            i++;
        }

    },

    detectPersonalLevel: function () {
        if (this.count <= 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count > 10 && this.count <= 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    showMyDB: function () {
        if (this.privat) {
            console.log(this);
        }
    },

    writeYourGenres: function () {

        while (this.genres.length < 3) {

            let genre;
            const genreIndex = this.genres.length;

            while (!genre) {
                genre = prompt(`Ваш любимый жанр под номером ${genreIndex + 1}`, "");
            }

            this.genres[genreIndex] = genre;
        }

        this.genres.forEach(function (item, id) {
            console.log(`Любимый жанр ${id+1} – это ${item}`)
        });

    },

    toggleVisibleMyDB: function () {

        this.privat = !this.privat;

    }

};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();


// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();

// personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
