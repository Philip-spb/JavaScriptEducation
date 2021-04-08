// classList и Делегирование

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// // console.log(btns[0].classList.length);

// // С помощью метода item мы можем получить элемент под указанным номером
// // console.log(btns[0].classList.item(1));

// // Метод add добавляет класс
// console.log(btns[0].classList.add('red', 'newClass'));

// // Метод remove удаляет класс
// console.log(btns[0].classList.remove('blue'));

// // Метод toggle позволяет добавить (если его нет) или удалить (если он есть) указанный класс
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')){
//     console.log('red');
// }


btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});


// Устаревший способ получения классов
// console.log(btns[0].className);

wrapper.addEventListener('click', (e) => {
    // console.dir(e.target);
    // if (e.target && e.target.tagName == "BUTTON"){
    if (e.target && e.target.matches("button.red")) {
        console.log('Hello!');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);