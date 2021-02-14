
let buttonLeft = document.querySelector('.left');
let buttonRight = document.querySelector('.right');
let button = document.querySelectorAll('.push');
let dots = document.querySelectorAll('.dot');
let touchstartX = 0;
let touchendX = 0;
let carousel = document.querySelector('.carousel');
   
let scroll = function (button) {
   var cards = document.querySelectorAll('.card');
   let point = document.querySelector('.arrow_container_right');
   let i = 0;
   let j = 'beforeBegin'
   if (button.classList.contains('right')) {
        point = document.querySelector('.arrow_container_left');
        i = cards.length - 1;
        j = 'afterEnd';
   }
   let temp = cards[i].cloneNode(true);
   cards[i].remove();
   point.insertAdjacentElement(j, temp);  
};

let clickDots320 = function (i) {
    var cards = document.querySelectorAll('.card');
    var dotSelected = document.querySelector('.dot_selected_320');
    let cardShow320 = document.querySelector('.card_show_320');
    cardShow320.classList.remove('card_show_320');
    cards[i].classList.add('card_show_320');           
    dotSelected.classList.remove('dot_selected_320');
    dots[i].classList.add('dot_selected_320'); 
};

let clickDots690 = function (i) {
    var cards = document.querySelectorAll('.card');
    var dotSelected = document.querySelectorAll('.dot_selected_690');
    let cardShow690 = document.querySelectorAll('.card_show_690');
    let numbDots = Number.parseInt(dots[i].textContent);
    for (let a = 0; a < dotSelected.length; a++) {
       let numbDotSelected = Number.parseInt(dotSelected[a].textContent);
        if (numbDotSelected - 1 === numbDots && numbDots + 2 < dots.length || numbDotSelected + 1 === numbDots && numbDots - 1 > 0|| numbDotSelected === numbDots) {} else {
                cardShow690[a].classList.remove('card_show_690');
                dotSelected[a].classList.remove('dot_selected_690');
            };
        };
    if (i < dots.length / 2) {
        cards[i + 1].classList.add('card_show_690'); 
        dots[i + 1].classList.add('dot_selected_690');
    } else {
        cards[i - 1].classList.add('card_show_690'); 
        dots[i - 1].classList.add('dot_selected_690');
    };
    cards[i].classList.add('card_show_690'); 
    dots[i].classList.add('dot_selected_690');
};

buttonLeft.addEventListener('click', function () {
    scroll(buttonLeft)
}
);

buttonRight.addEventListener('click', function () {
    scroll(buttonRight)
}
);
   
for (let i = 0; i < dots.length;  i++) {
    dots[i].addEventListener('click', function () {
        clickDots320(i);
        clickDots690(i)
    }
    ) 
};

function handleGesure() {
    let dotSelected690 = document.querySelectorAll('.dot_selected_690');
    let dotSelected320 = document.querySelector('.dot_selected_320');
    let i = Number.parseInt(dotSelected320.textContent);
    if (touchendX < touchstartX) {
        if (i + 1 >= dots.length) {
            i = 0;
            clickDots320(i);
        } else {
            clickDots320(i +1);
        };
        i = Number.parseInt(dotSelected690[1].textContent);
        if (i + 1 >= dots.length) {
            i = 0;
            clickDots690(i);
        } else {
            clickDots690(i + 1);
        };
    };
    if (touchendX > touchstartX) {
        if (i === 0) {
            i = dots.length - 1;
            clickDots320(i);
        } else {
            clickDots320(i - 1);
        };
        i = Number.parseInt(dotSelected690[0].textContent);
        if (i === 0) {
            i = dots.length - 1;
            clickDots690(i);
        } else {
            clickDots690(i - 1);
        };
    };
};

carousel.addEventListener('touchstart', function(e) {
    var touchobj = e.changedTouches[0];
    touchstartX = parseInt(touchobj.clientX);
    e.preventDefault();
}, false);

carousel.addEventListener('touchend', function(e) {
    var touchobj = e.changedTouches[0];
    touchendX = parseInt(touchobj.clientX);
    e.preventDefault();
    handleGesure();
}, false); 


function fff() {
    var bigCard = document.querySelector('.card_show_320');
    carousel.style.height = bigCard.scrollHeight + 20 + 'px';
}
window.onload = function() {
    fff();
    // var bigCard = document.querySelector('.card_show_320');
    // carousel.style.height = bigCard.scrollHeight + 20 + 'px';
};

document.addEventListener("DOMContentLoaded", function() {
    window.onresize = function() {
        fff();
        // var bigCard = document.querySelector('.card_show_320');
        // carousel.style.height = bigCard.scrollHeight + 20 + 'px';
    };
});
