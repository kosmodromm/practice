let burgerBtn = document.querySelector('.burger__menu');
let burgerContent = document.querySelector('.burger__bg');
let burgerMenu = document.querySelector('.list');

const body = document.querySelector('body');

// Open/close burger menu
burgerBtn.onclick = function () {
    if (burgerContent.style.opacity === '0') {
        burgerContent.style.opacity = '1';
        burgerMenu.style.opacity = '1';

        body.style.overflow = 'hidden';
        burgerBtn.style.transform = 'rotate(90deg)';
        burgerMenu.style.animation = 'ease-in-out 1s';
        burgerMenu.style.transform = 'translateX(0)';
        burgerContent.style.animation = 'ease-in-out 1s';
        burgerContent.style.transform = 'translateX(0)';
    } else {
        burgerContent.style.opacity = '0';
        burgerMenu.style.opacity = '0';
        burgerMenu.style.transform = 'translateX(100%)';
        burgerContent.style.transform = 'translateX(100%)';
        body.style.overflow = 'visible';

        burgerBtn.style.transform = 'rotate(0deg)';
    }
}