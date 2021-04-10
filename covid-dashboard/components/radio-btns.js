document.addEventListener("DOMContentLoaded", function () {
    const lastDayTab = document.querySelector('#radio-1');
    const allTimeTab = document.querySelector('#radio-2');
    lastDayTab.addEventListener('change', tabSelection);
    allTimeTab.addEventListener('change', tabSelection);
})

function tabSelection() {
    const listAll = document.querySelector('[data-name="list-all-time"]');
    const listLast = document.querySelector('[data-name="list-last-day"]');
    listAll.classList.toggle('hidden');
    listLast.classList.toggle('hidden');
}

