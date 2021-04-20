function openModal(modalSelector, modalTimerId) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';  // Не позволяем прокручиваться сайту пока открыто окно
    if (modalTimerId) {
        clearInterval(modalTimerId);  // Не позволяем модельному окну появиться еще раз если пользователь на него уже заходил
    }
}

function closeModal(modalSelector) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(modalSelector, modalTimerId) {

    // Modal

    const body = document.body;
    // const modalButtons = document.querySelectorAll('[data-modal]');
    const modalWindow = document.querySelector(modalSelector);
    // const modalClose = document.querySelector('[data-close]');

    body.addEventListener('click', (e) => {
        if (e.target && e.target.dataset.modal == "") {
            openModal(modalSelector, modalTimerId);
        }
    });

    // modalClose.addEventListener('click', () => {
    //     closeModal();
    // });


    // Реализуем возможность закрытия модального окна при клике на подложку
    modalWindow.addEventListener('click', (e) => {
        if (e.target == modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalWindow.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    // Реализуем функционал показа модального окна при прокрутке до низа страницы

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }

    }

    window.addEventListener('scroll', showModalByScroll);

}

export default modal;

export { closeModal, openModal };