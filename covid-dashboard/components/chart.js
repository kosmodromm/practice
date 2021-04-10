import { getByDateWorld, getByDateCovid } from './api';
import { eventManager } from './event-manager';

document.addEventListener("DOMContentLoaded", async function () {

    eventManager.subscribe('countryChange', initChart);

    initChart();
}
);

function formatData(data) {
    const source = data.timeline || data;
    return {
        cases: formatParam(source.cases),
        deaths: formatParam(source.deaths),
        recovered: formatParam(source.recovered),
    };
}


function formatParam(source) {
    return Object.keys(source).map((e) => {
        return {
            x: Date.parse(e),
            y: source[e],
        }
    });
}

function initChart(country) {
    const get = country ? getByDateCovid : getByDateWorld;
    get(country).then(function (data) {
        const formattedData = formatData(data);
        drowChart(formattedData);
    }).catch(function () {
        drowChart({ cases: [], deaths: [], recovered: [] })
    })

}

function drowChart(data) {
    Highcharts.chart('graph', {
        chart: {
            zoomType: 'x',
            backgroundColor: 'transparent',
        },
        title: {
            text: 'Cases over time'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Amount'
            },
            max: null,
            endOnTick: false,
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            data: data.cases,
            color: '#FC2',
            name: 'Cases',
        },
        {
            type: 'area',
            data: data.deaths,
            color: '#FF0000',
            name: 'Deaths'
        },
        {
            type: 'area',
            data: data.recovered,
            color: '#888',
            name: 'Recovered'

        }]
    });
}