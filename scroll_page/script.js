document.addEventListener("DOMContentLoaded", function () {
    let scrollUpBtn = document.querySelector('.scroll-to-top');
    let rocket = document.querySelector('.rocket');
    let shaker;

    scrollUpBtn.addEventListener('click', function () {
        clearInterval(shaker);
        scrollUpBtn.classList.add('fly');
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

        scrollUpBtn.style.top = '0%';
        rocket.style.opacity = '0';
        if (document.body.scrollTop === 0) {
            setTimeout(() => {
                scrollUpBtn.style.top = '90%';
                rocket.style.opacity = '1';
                scrollUpBtn.classList.remove('fly');
            }, 2000)
        }
    });

    window.addEventListener('scroll', function () {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        document.querySelector(".progress-bar").style.width = (winScroll / height) * 100 + "%";
        scrollUpBtn.hidden = (pageYOffset < document.documentElement.clientHeight);
    });

    // Rocket shake
    scrollUpBtn.onmouseover = function () {
        let positionTop = parseInt(getComputedStyle(scrollUpBtn).top);
        let positionLeft = parseInt(getComputedStyle(scrollUpBtn).left);

        shaker = setInterval(function () {
            scrollUpBtn.style.top = positionTop + getRandomIntInclusive(-1, 1) + 'px';
            scrollUpBtn.style.left = positionLeft + getRandomIntInclusive(-1, 1) + 'px';
        }, 50);
        // todo не стоит без нужды вешать обработчик внутри другого обработчика. если бы я к примеру искал на глаз где навешивается onmouseout я бы проверил сперва первый уровень вложенности (там где onmouseover, scroll и click) и не нашёл бы его
    }

    scrollUpBtn.onmouseout = function () {
        clearInterval(shaker);
        if (scrollUpBtn.classList.contains('fly')) {
            return;
        }
        scrollUpBtn.style.top = '90%';
        scrollUpBtn.style.left = '69%';
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})

