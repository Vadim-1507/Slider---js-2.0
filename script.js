'use strict'

const sliderItem = document.querySelectorAll('.slider__item'),
    sliderLine = document.querySelector('.slider__line'),
    slider = document.querySelector('.slider__body');
let count = 0,
    x1 = null,
    y1 = null,
    width,
    right = false,
    left = false;

init();
window.addEventListener('resize', init);
slider.addEventListener('touchstart', handlerStartSwipe, false);
slider.addEventListener('touchmove', handlerMoveSwipe, false);
slider.addEventListener('touchend', swipeSlider)
document.querySelector('.slider__arrow-next').addEventListener('click', nextSlide);
document.querySelector('.slider__arrow-prev').addEventListener('click', prevSlide);

function init() {
    width = slider.offsetWidth;
    sliderLine.style.width = `${width * sliderItem.length}px`;
    sliderItem.forEach(item => {
        item.style.width = `${width}px`;
        item.style.height = 'auto';
    })
    const video = document.querySelector('.slider__item iframe');
    video.style.width = `${width}px`;
    rollSlider();
}

function handlerStartSwipe(e) {
    const touchStart = e.touches[0];
    x1 = touchStart.clientX;
    y1 = touchStart.clientY;
}

function handlerMoveSwipe(e) {
    if (!x1 || !y1) return false;
    const x2 = e.touches[0].clientX,
        y2 = e.touches[0].clientY,
        xDifference = x2 - x1,
        yDifference = y2 - y1;
    if (Math.abs(xDifference) > Math.abs(yDifference)) {
        if (xDifference > 0) {
            right = true;
        } else {
            left = true;
        }
    }
}

function swipeSlider() {
    if (right === true) {
        prevSlide();
        right = false;

    } else if (left === true) {
        nextSlide();
        left = false;
    }
}

function nextSlide() {
    count++;
    rollSlider();
    activeDot();
}

function prevSlide() {
    count--;
    rollSlider();
    activeDot();
}

function rollSlider() {
    if (count >= sliderItem.length) {
        count = 0;
    } else if (count < 0) {
        count = sliderItem.length - 1;
    }
    sliderLine.style.transform = `translate(-${count * width}px)`;
}

// dots

const dotsWrapper = document.createElement('ul'),
    dots = [];
dotsWrapper.classList.add('carousel');
document.querySelector('.slider').append(dotsWrapper);

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');
        count = slideTo - 1;
        sliderLine.style.transform = `translate(-${count * width}px)`;
        activeDot();
    });
});

function activeDot() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[count].classList.add('active');
}

for (let i = 0; i < sliderItem.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    if (i === 0) {
        dot.classList.add('active');
    }
    dotsWrapper.append(dot);
    dots.push(dot);
}
