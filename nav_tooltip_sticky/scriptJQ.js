$(function () {
    // todo старайся упрощать браузеру поиск элементов. Например $closeBtn можно искать в пределах $sidenav а не всей страницы ($sidenav.find('.closebtn'))
    // todo сли проскроллить страницу вниз а потом нажать на открытие меню страница резко скролится в начало, надо пофиксить
    let $main = $('#main');
    let $sidenav = $('#mySidenav');
    let $wrapper = $('.wrapper');
    let $sidenavOverlayBtn = $main.find('.sidenav-overlay-btn');
    let $sidenavPushBtn = $main.find('.sidenav-push-btn');
    let $closeBtn = $sidenav.find('.closebtn');
    $sidenavOverlayBtn.click(openSidenavOverlay);
    $sidenavPushBtn.click(openSidenavPush);
    $closeBtn.click(closeSidenav);
    $wrapper.click(closeSidenav);

    function openSidenavOverlay() {
        $sidenav.css('width', '250px');
        $wrapper.css({
            'visibility': 'visible',
            'opacity': '1'
        });
        document.body.style.overflow = "hidden";
    }

    function openSidenavPush() {
        $sidenav.css('width', '250px');
        $main.css('marginLeft', '250px');
        $wrapper.css({
            'visibility': 'visible',
            'opacity': '1'
        });
        document.body.style.overflow = "hidden";
    }

    function closeSidenav() {
        $sidenav.css('width', '0');
        $main.css('marginLeft', '0');
        $wrapper.css({
            'visibility': 'hidden',
            'opacity': '0'
        });
        document.body.style.overflow = "auto";
    }
})