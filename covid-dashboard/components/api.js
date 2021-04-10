let summaryCache = null;
let countryCache = {};
let worldCache = null;

const summaryUrl = `https://disease.sh/v3/covid-19/countries?sort=cases`;
const byDateUrl = `https://disease.sh/v3/covid-19/historical/[country]?lastdays=all`;
const byDateAllCountries = `https://disease.sh/v3/covid-19/historical/all?lastdays=all`;

async function getSummaryCovid(useCache = true) {
    if (summaryCache && useCache) {
        return summaryCache;
    }
    const url = summaryUrl;
    const res = await fetch(url);
    const data = await res.json();
    summaryCache = data;
    return data;
}

async function getByDateCovid(country, useCache = true) {
    if (countryCache[country] && useCache) {
        return countryCache[country];
    }
    const url = byDateUrl.replace('[country]', country);
    const res = await fetch(url);
    const data = await res.json();
    countryCache[country] = data;
    return data;
}

async function getByDateWorld(useCache = true) {
    if (worldCache && useCache) {
        return worldCache;
    }
    const url = byDateAllCountries;
    const res = await fetch(url);
    const data = await res.json();
    worldCache = data;
    console.log(data);
    return data;
}


function getTotal(data, param) {
    let source = data.timeline || data;
    let total = source[param];
    let maxValue = Math.max(...Object.values(total));
    return maxValue;
}

export {
    getSummaryCovid,
    getByDateCovid,
    getByDateWorld,
    getTotal,
};
