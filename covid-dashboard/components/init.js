import { getByDateWorld } from './api';

const actualUpdate = document.querySelector('.actual-update');

async function getUpdateTime() {
    const data = await getByDateWorld();
    const dataCases = Object.keys(data.cases);
    actualUpdate.innerHTML = `Last update: ${dataCases[dataCases.length - 1]}`;
}

getUpdateTime();