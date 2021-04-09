/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/slider/slider.js":
/*!*****************************!*\
  !*** ./js/slider/slider.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Slider({slider_item, slider_line, slider_body, arrow_next, arrow_prev}) {
    const sliderItem = document.querySelectorAll(slider_item);
    const sliderLine = document.querySelector(slider_line);
    const slider = document.querySelector(slider_body);
    let count = 0;
    let x1 = null;
    let y1 = null;
    let width;
    let right = false;
    let left = false;

    window.addEventListener('resize', init);
    slider.addEventListener('touchstart', handlerStartSwipe, false);
    slider.addEventListener('touchmove', handlerMoveSwipe, false);
    slider.addEventListener('touchend', swipeSlider)
    document.querySelector(arrow_next).addEventListener('click', nextSlide);
    document.querySelector(arrow_prev).addEventListener('click', prevSlide);

    init();

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
    dotsWrapper.classList.add('slider__carousel');
    document.querySelector('.slider').append(dotsWrapper);

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            count = slideTo - 1;
            sliderLine.style.transform = `translate(-${count * width}px)`;
            activeDot();
        });
    });

    for (let i = 0; i < sliderItem.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('slider__dot');
        if (i === 0) {
            dot.classList.add('slider__dot_active');
        }
        dotsWrapper.append(dot);
        dots.push(dot);
    }

    function activeDot() {
        dots.forEach(dot => dot.classList.remove('slider__dot_active'));
        dots[count].classList.add('slider__dot_active');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider/slider */ "./js/slider/slider.js");


(0,_slider_slider__WEBPACK_IMPORTED_MODULE_0__.default)({
    slider_item: '.slider__item',
    slider_line: '.slider__line',
    slider_body: '.slider__body',
    arrow_next: '.slider__arrow-next',
    arrow_prev: '.slider__arrow-prev'
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map