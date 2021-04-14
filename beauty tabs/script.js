document.addEventListener("DOMContentLoaded", function () {
    let tabs = document.querySelectorAll('.tab-content');
    let tabButtons = document.querySelectorAll(".btn");
    tabButtons.forEach(el => addClickListener(el));

    function addClickListener(el) {
        el.addEventListener('click', function () {
            if (!el.classList.contains('selected')) {
                let oldSelectedBtn = document.querySelector('.selected');
                let oldActiveTab = document.querySelector('.active');
                let name = el.getAttribute('data-name');
                let targetTab = document.querySelector(`.tab-content[data-name=${name}]`);

                oldSelectedBtn.classList.remove('selected');
                el.classList.add('selected');
                oldActiveTab.classList.remove('active');
                targetTab.classList.add('active');
            }
        })
    }
})
