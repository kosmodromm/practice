$(function () {
    let $scrollUpBtn = $('.scroll-to-top');
    let shaker;
    let $rocket = $('.rocket');
    $scrollUpBtn.click(function () {
        clearInterval(shaker);
        $scrollUpBtn.addClass('fly');
        $("html").animate({ scrollTop: 0 }, 2000);
        $scrollUpBtn.css("top", "0%");
        $rocket.css('opacity', '0');
        if (document.body.scrollTop === 0) {
            setTimeout(() => {
                // todo тут можно сразу $scrollUpBtn.css(...).removeClass(...)
                $scrollUpBtn.css('top', '90%').removeClass('fly');
                $rocket.css('opacity', '1');
            }, 2000)
        }
    })

    $(window).scroll(function () {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        $(".progress-bar").css('width', `${(winScroll / height) * 100}%`);


        $scrollUpBtn.attr("hidden", pageYOffset < document.documentElement.clientHeight);
        // todo тело ифов всегда пиши с новой строки, а в данном случае этот if-else можно заменить одной строкой кода (даже не используя тернарник ("?"))
    });

    $scrollUpBtn.mouseover(function () {
        let positionTop = parseInt($scrollUpBtn.css("top"));
        let positionLeft = parseInt($scrollUpBtn.css("left"));

        shaker = setInterval(function () {
            $scrollUpBtn.css({
                "top": `${positionTop + getRandomIntInclusive(-1, 1)}px`,
                "left": `${positionLeft + getRandomIntInclusive(-1, 1)}px`
            });
        }, 100);
    })

    // todo не стоит без нужды вешать обработчик внутри другого обработчика. если бы я к примеру искал на глаз где навешивается onmouseout я бы проверил сперва первый уровень вложенности (там где onmouseover, scroll и click) и не нашёл бы его
    $scrollUpBtn.mouseout(function () {
        // todo если условие переписать на обратное можно обойтись без else и return
        // альтернативный вариант - убрать else и скобки, т. к. return уже гарантирует невыполнение дальнейшего кода функции
        if (!$scrollUpBtn.hasClass('fly')) {
            clearInterval(shaker);
            $scrollUpBtn.css({
                "top": '90%',
                "left": '69%'
            });
        }
    })

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})