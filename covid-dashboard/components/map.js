import { getSummaryCovid } from './api';

document.addEventListener("DOMContentLoaded", async function () {
    const data = await getSummaryCovid();
    const formattedData = formatData(data);

    const mapBtns = [...document.querySelectorAll('.map-btns button')];
    for (let i = 0; i < mapBtns.length; i++) {
        const param = mapBtns[i].getAttribute('data-param');
        mapBtns[i].addEventListener('click', () => {
            mapInit(formattedData[param], param);
            mapBtns.forEach((e) => e.classList.remove('active'));
            mapBtns[i].classList.add('active');
        }
        );
    }

    mapInit(formattedData.cases, 'cases');

});

function formatData(data) {
    return {
        cases: formatParam(data, 'cases'),
        deaths: formatParam(data, 'deaths'),
        recovered: formatParam(data, 'recovered'),
    };
}

function formatParam(data, param) {
    return data.map((e) => {
        return {
            name: e.country,
            value: e[param],
            code: e.countryInfo.iso2,
        };
    });
}

function mapInit(data, param) {
    Highcharts.mapChart('map-chart', {
        chart: {
            backgroundColor: '#22272b',
            map: 'custom/world-highres'
        },

        title: {
            text: 'Zoom in on country by double click'
        },

        mapNavigation: {
            enabled: true,
            enableDoubleClickZoomTo: true
        },

        colorAxis: {
            minColor: '#9cd479',
            maxColor: '#d9434d',
            min: 0,
        },

        series: [{
            data: data,
            joinBy: ['iso-a2', 'code'],
            name: `COVID ${param}`,
            states: {
                hover: {
                    color: '#e5e5e5'
                }
            },
        }]
    });
}