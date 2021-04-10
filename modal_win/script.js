document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.querySelector('#open-modal-btn');
    const modalWindow = document.querySelector('#modal');
    const closeModalBtn = document.querySelectorAll('.close');

    openModalBtn.addEventListener('click', showModal);
    closeModalBtn[0].addEventListener('click', closeModal);
    closeModalBtn[1].addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target === modalWindow) {
            closeModal();
        }
    })

    function showModal() {
        modalWindow.style.visibility = 'visible';
        modalWindow.style.opacity = '1';
    }

    function closeModal() {
        modalWindow.style.visibility = 'hidden';
        modalWindow.style.opacity = '0';
    }
})