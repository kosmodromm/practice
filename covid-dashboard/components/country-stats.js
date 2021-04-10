import { getByDateCovid, getByDateWorld, getTotal, getSummaryCovid } from './api';
import { eventManager } from './event-manager';

document.addEventListener("DOMContentLoaded", function () {

    let currentCountry = '';
    let currentPeriod = 'all-time';
    let currentPopulation = 'total';

    const countryStats = document.querySelector('.stats-country');
    const casesStats = document.querySelector('.stats-cases');
    const deathsStats = document.querySelector('.stats-deaths');
    const recoveredStats = document.querySelector('.stats-recovered');

    eventManager.subscribe('countryChange', function (country) {
        currentCountry = country;
        getStats();
    });

    getStats();

    async function getStats() {
        const get = currentCountry ? getSummaryCovid : getByDateWorld;
        const data = await get();
        let paramNames = currentPeriod === 'last-day' ? {
            cases: 'todayCases',
            deaths: 'todayDeaths',
            recovered: 'todayRecovered'
        } : {
                cases: 'cases',
                deaths: 'deaths',
                recovered: 'recovered'
            }

        if (currentCountry) {
            const country = data.find((e) => e.countryInfo.iso2 === currentCountry);
            let cases = country[paramNames.cases];
            let deaths = country[paramNames.deaths];
            let recovered = country[paramNames.recovered];

            if (currentPopulation === 'per-100k') {
                cases = Math.round(cases / country.population * 100000);
                deaths = Math.round(deaths / country.population * 100000);
                recovered = Math.round(recovered / country.population * 100000);
            }

            countryStats.innerText = country.country || 'All world';
            casesStats.innerHTML = `${cases} <span>cases</span>`;
            deathsStats.innerHTML = `${deaths} <span>deaths</span>`;
            recoveredStats.innerHTML = `${recovered} <span>recovered</span>`;
        } else {
            countryStats.innerText = 'All world';
            casesStats.innerHTML = `${getTotal(data, 'cases')} <span>cases</span>`;
            deathsStats.innerHTML = `${getTotal(data, 'deaths')} <span>deaths</span>`;
            recoveredStats.innerHTML = `${getTotal(data, 'recovered')} <span>recovered</span>`;
        }
    }

    const tableBtns = [...document.querySelectorAll('.table-btns button')];
    for (let i = 0; i < tableBtns.length; i++) {
        const period = tableBtns[i].getAttribute('data-period');
        const population = tableBtns[i].getAttribute('data-population');
        tableBtns[i].addEventListener('click', () => {
            currentPeriod = period || currentPeriod;
            currentPopulation = population || currentPopulation;
            getStats();
            const sameBtns = [...tableBtns[i].parentElement.children];
            sameBtns.forEach((e) => e.classList.remove('active'));
            tableBtns[i].classList.add('active');
        }
        );
    }
})



