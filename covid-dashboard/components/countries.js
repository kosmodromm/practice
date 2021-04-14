import { getSummaryCovid } from './api';
import { eventManager } from './event-manager';

document.addEventListener("DOMContentLoaded", async function () {
    const data = await getSummaryCovid();
    const listAll = document.querySelector('[data-name="list-all-time"]');
    const listLast = document.querySelector('[data-name="list-last-day"]');

    for (let i = 0; i < data.length; i++) {
        listAll.appendChild(createListElem(data[i].country, data[i].countryInfo.iso2, data[i].cases, data[i].countryInfo.flag));
    }

    data.sort((a, b) => b.todayCases - a.todayCases);

    for (let i = 0; i < data.length; i++) {
        listLast.appendChild(createListElem(data[i].country, data[i].countryInfo.iso2, data[i].todayCases, data[i].countryInfo.flag));
    }

    const input = document.querySelector('input');
    input.addEventListener('input', function () {
        const listArr = listAll.classList.contains('hidden') ? listLast.querySelectorAll('li') : listAll.querySelectorAll('li');
        for (let i = 0; i < listArr.length; i++) {
            if (listArr[i].querySelector('b').innerText.toLowerCase().indexOf(input.value.toLowerCase()) === -1) {
                listArr[i].style.display = 'none';
            } else {
                listArr[i].style.display = 'block';
            }
        }
    })
});

function createListElem(country, code, cases, flag) {
    const el = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerHTML = `<b><img src="${flag}" alt="${code}">${country}</b>${cases}`;
    el.appendChild(btn);
    el.addEventListener('click', function (event) {
        eventManager.trigger('countryChange', [code]);
    })
    return el;
}
