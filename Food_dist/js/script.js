window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });

    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        // Второй параметр требуется для того чтобы при клике на пространство рядом с сылкой ничего не происходило
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadline = '2021-12-09';

    function getTimeRemaining(endtime) {
        // endtime – время окончания акции
        const t = Date.parse(endtime) - Date.parse(new Date());
        // Math.floor – округление до ближайшего целого
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        // % – получаем остаток от деления
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else if (num >= 10) {
            return num;
        } else {
            return 0;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {

            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }

    }

    setClock('.timer', deadline);

    // Modal

    const body = document.body;
    // const modalButtons = document.querySelectorAll('[data-modal]');
    const modalWindow = document.querySelector('.modal');
    const modalClose = document.querySelector('[data-close]');

    function openModal() {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';  // Не позволяем прокручиваться сайту пока открыто окно
        clearInterval(modalTimerId);  // Не позволяем модельному окну появиться еще раз если пользователь на него уже заходил
    }

    function closeModal() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = '';
    }

    body.addEventListener('click', (e) => {
        if (e.target && e.target.dataset.modal == "") {
            openModal();
        }
    });

    modalClose.addEventListener('click', () => {
        closeModal();
    });


    // Реализуем возможность закрытия модального окна при клике на подложку
    modalWindow.addEventListener('click', (e) => {
        if (e.target == modalWindow) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });

    // Реализуем запуск модального окна через 15 секунд после входа

    const modalTimerId = setTimeout(openModal, 30000);

    // Реализуем функционал показа модального окна при прокрутке до низа страницы

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }

    }

    window.addEventListener('scroll', showModalByScroll);

    // Меню на день (Используем классы для карточек)

    const menuFieldWraper = document.querySelector('.menu__field .container');
    menuFieldWraper.innerHTML = "";

    // class MenuItem {
    //     constructor(src, alt, subtitle, descr, price, currency = "руб") {
    //         this.src = src;
    //         this.alt = alt;
    //         this.subtitle = subtitle;
    //         this.descr = descr;
    //         this.price = price;
    //         this.currency = currency;
    //     }

    //     returnHtml() {
    //         return `
    //         <div class="menu__item">
    //         <img src="${this.src}" alt="${this.alt}">
    //         <h3 class="menu__item-subtitle">${this.subtitle}</h3>
    //         <div class="menu__item-descr">${this.descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //             <div class="menu__item-cost">Цена:</div>
    //             <div class="menu__item-total"><span>${this.price}</span> ${this.currency}/день</div>
    //         </div>
    //         </div>`;
    //     }
    // }

    // const fitnes = new MenuItem('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229);

    // menuFieldWraper.innerHTML = fitnes.returnHtml() + fitnes.returnHtml() + fitnes.returnHtml();

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);  // Родительский элемент
            this.transfer = 27;
            this.changeToUAH();  // Преобразуем доллары в местную валюту
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                element.classList.add('menu__item');
            }
            else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>`;
            this.parent.append(element);
        }
    }

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu__field .container',
        'menu__item',
        'big'
    ).render();

    new MenuCard(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        20,
        '.menu__field .container',
    ).render();

    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        16,
        '.menu__field .container',
        'menu__item'
    ).render();

});