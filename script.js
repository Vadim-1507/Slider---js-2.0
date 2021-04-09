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

slider.addEventListener('touchstart', handlerStartSwipe, false);
slider.addEventListener('touchmove', handlerMoveSwipe, false);

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
    swipeSlider()
}

function swipeSlider() {
    if (right === true) {
        count++;
        rollSlider();
        right = false;
    } else if (left === true) {
        count--;
        rollSlider();
        left = false;
    }

}

document.querySelector('.slider__arrow-next').addEventListener('click', () => {
    count++;
    rollSlider();
});

document.querySelector('.slider__arrow-prev').addEventListener('click', () => {
    count--;
    rollSlider();
});

function rollSlider() {
    if (count >= sliderItem.length) {
        count = 0;
    } else if (count < 0) {
        count = sliderItem.length - 1;
    }
    sliderLine.style.transform = `translate(-${count * width}px)`;
}
