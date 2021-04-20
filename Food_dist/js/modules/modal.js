function modal() {

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

}

module.exports = modal;