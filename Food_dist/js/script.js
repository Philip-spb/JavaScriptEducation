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
    // const modalClose = document.querySelector('[data-close]');

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

    // modalClose.addEventListener('click', () => {
    //     closeModal();
    // });


    // Реализуем возможность закрытия модального окна при клике на подложку
    modalWindow.addEventListener('click', (e) => {
        if (e.target == modalWindow || e.target.getAttribute('data-close') == '') {
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

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({ img, altimg, title, descr, price }) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu__field .container').render();
    //         });
    //     });

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu__field .container').render();
            });
        });

    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({ img, altimg, title, descr, price }) => {
    //         const element = document.createElement('div');
    //         element.classList.add('menu__item');

    //         price = price * 27;

    //         element.innerHTML = `
    //         <img src="${img}" alt="${altimg}">
    //         <h3 class="menu__item-subtitle">${title}</h3>
    //         <div class="menu__item-descr">${descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //             <div class="menu__item-cost">Цена:</div>
    //             <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //         </div>
    //         `;

    //         document.querySelector('.menu .container').append(element);
    //     });
    // }

    //forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не таке...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);

            // // request.setRequestHeader('Content-type', 'multipart/form-data');
            // // Когда мы работаем с FormData заголовок указывать не нужно
            // const formData = new FormData(form);

            // request.send(formData);

            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         statusMessage.textContent = message.success;
            //         form.reset();
            //         setTimeout(() => {
            //             statusMessage.remove();
            //         }, 2000);
            //     } else {
            //         statusMessage.textContent = message.failure;
            //     }
            // });

            // request.setRequestHeader('Content-type', 'application/json');

            const formData = new FormData(form);

            // Конвертируем FormData в JSON

            // const object = {};

            // formData.forEach((value, key) => {
            //     object[key] = value;
            // });

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');

        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);

        // Удаляем созданный диалог через 4 секунды
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

});