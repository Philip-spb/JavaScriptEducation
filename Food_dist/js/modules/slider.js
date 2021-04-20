function slider({ container, slide, nexArrow, prevArrow, totalCounter, currentCounter, wraper, field }) {

    // Slider

    // Моя версия

    // const slidersWrapper = document.querySelector('.offer__slider-wrapper');
    // const sliders = slidersWrapper.querySelectorAll('.offer__slide');
    // const totalSlidersLabel = document.querySelector('.offer__slider-counter #total');
    // const currenSliderLabel = document.querySelector('.offer__slider-counter #current');
    // const prevSlider = document.querySelector('.offer__slider-prev');
    // const nexSlider = document.querySelector('.offer__slider-next');
    // const totalSliders = sliders.length;
    // let currentSlider = 1;

    // function showCurrentSlider() {
    //     sliders[currentSlider - 1].classList.remove('hide');
    //     sliders[currentSlider - 1].classList.add('show');
    // }

    // function hideCurrentSlider() {
    //     sliders[currentSlider - 1].classList.remove('show');
    //     sliders[currentSlider - 1].classList.add('hide');
    // }

    // nexSlider.addEventListener('click', () => {
    //     hideCurrentSlider();
    //     if (currentSlider === totalSliders) {
    //         currentSlider = 1;
    //     } else {
    //         currentSlider++;
    //     }
    //     setCurrentSliderLabel();
    //     showCurrentSlider();
    // });

    // prevSlider.addEventListener('click', () => {
    //     hideCurrentSlider();
    //     if (currentSlider === 1) {
    //         currentSlider = totalSliders;
    //     } else {
    //         currentSlider--;
    //     }
    //     setCurrentSliderLabel();
    //     showCurrentSlider();
    // });

    // function setCurrentSliderLabel() {
    //     currenSliderLabel.textContent = (currentSlider >= 10) ? currentSlider : '0' + currentSlider;
    // }

    // totalSlidersLabel.textContent = (totalSliders >= 10) ? totalSliders : '0' + totalSliders;
    // setCurrentSliderLabel();


    // sliders.forEach(slider => {
    //     slider.classList.add('hide');
    // });

    // showCurrentSlider();

    // ВАРИАНТ С ПЛАВНОЙ ПРОКРУТКОЙ

    const slides = document.querySelectorAll(slide);
    const slider = document.querySelector(container);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nexArrow);
    const total = document.querySelector(totalCounter);
    const current = document.querySelector(currentCounter);
    const slidesWraper = document.querySelector(wraper);
    const slidesField = document.querySelector(field);
    const width = window.getComputedStyle(slidesWraper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = `0${slideIndex}`;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWraper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    const dots = [];
    indicators.classList.add('carousel-indicatoes');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNoteGigits(str) {
        return +str.replace(/\D/g, '');
    }


    next.addEventListener('click', () => {
        if (offset == deleteNoteGigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNoteGigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNoteGigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNoteGigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;

    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = deleteNoteGigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;

        });
    });
}

export default slider;