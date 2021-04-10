document.addEventListener("DOMContentLoaded", function () {
    // todo старайся упрощать браузеру поиск элементов. Например closeBtn можно искать в пределах sidenav а не всей страницы (sidenav.querySelector('.closebtn'))
    // todo сли проскроллить страницу вниз а потом нажать на открытие меню страница резко скролится в начало, надо пофиксить
    let main = document.querySelector('#main');
    let sidenav = document.querySelector('#mySidenav');
    let wrapper = document.querySelector('.wrapper');
    let sidenavOverlayBtn = main.querySelector('.sidenav-overlay-btn');
    let sidenavPushBtn = main.querySelector('.sidenav-push-btn');
    let closeBtn = sidenav.querySelector('.closebtn');
    sidenavOverlayBtn.addEventListener('click', openSidenavOverlay);
    sidenavPushBtn.addEventListener('click', openSidenavPush);
    closeBtn.addEventListener('click', closeSidenav);
    wrapper.addEventListener('click', closeSidenav);

    function openSidenavOverlay() {
        sidenav.style.width = "250px";
        wrapper.style.visibility = "visible";
        wrapper.style.opacity = "1";
        document.body.style.overflow = "hidden";
    }

    function openSidenavPush() {
        sidenav.style.width = "250px";
        main.style.marginLeft = "250px";
        wrapper.style.visibility = "visible";
        wrapper.style.opacity = "1";
        document.body.style.overflow = "hidden";
    }

    function closeSidenav() {
        sidenav.style.width = "0";
        main.style.marginLeft = "0";
        wrapper.style.visibility = "hidden";
        wrapper.style.opacity = "0";
        document.body.style.overflow = "auto";
    }
})