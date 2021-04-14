document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('.btn');
    const progress = document.querySelector('#progress');
    const bar = document.querySelector('#bar');

    btn.addEventListener('click', fill);

    function fill() {
        if (progress.style.width !== '100%') {
            let i = Math.ceil(progress.clientWidth / (bar.clientWidth / 100));
            const interval = setInterval(grow, 20);

            function grow() {
                i++;
                progress.style.width = `${i}%`;
                if (i === 100) {
                    clearInterval(interval);
                }
            }
        }
    }
})