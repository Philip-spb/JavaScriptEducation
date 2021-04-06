// События на мобильных устройствах

'use strict';

// touchstart – начало касания
// touchmove – срабатывает при движении пальцем
// touchend – когда отпускаем палец
// touchenter – когда мы ведем пальцем по экрану и "заскакиваем" на элемент на котором это событие
// touchleave – когда мы ведем пальцем по экрану и выходим за рамки элемента с этим событием
// touchcancel – когда мы ведем пальцем по экрану и выходим за пределы браузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    // box.addEventListener('touchstart', (e) => {
    //     // Когда описываем мобильное событие всегда рекомендуется выполнять preventDefault
    //     e.preventDefault();
    //     // console.log('Start');
    //     console.log(e.targetTouches);

    // });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        // console.log('Что-то движется');
        console.log(e.targetTouches[0].pageX);

    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('Окончание движения');

    // });
});

// touches – информация про все пальцы на экране
// targetTouches – Информация про все пальцы на rконкретном элементе
// changetTouches – Список пальцев учавсвующих в текущем событии