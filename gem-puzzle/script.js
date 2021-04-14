const gameSpace = document.createElement('div');
gameSpace.classList.add('playground_4');
const controlPanel = document.createElement('div');
controlPanel.classList.add('controlPanel');
const gameTimer = document.createElement('div');
gameTimer.classList.add('timer');
const counter = document.createElement('div');
counter.classList.add('counter');
const gameBtn = document.createElement('button');
gameBtn.classList.add('newGame');
const soundBtn = document.createElement('div');
soundBtn.classList.add('soundBtn_on');
const saveLoadBtn = document.createElement('div');
saveLoadBtn.classList.add('saveLoadBtn');
const saveBtn = document.createElement('div');
saveBtn.classList.add('saveBtn');
const loadBtn = document.createElement('div');
loadBtn.classList.add('loadBtn');


document.body.appendChild(gameSpace);
document.body.appendChild(controlPanel);
document.body.appendChild(soundBtn);
document.body.appendChild(saveLoadBtn);
document.querySelector('.saveLoadBtn').appendChild(saveBtn);
document.querySelector('.saveLoadBtn').appendChild(loadBtn);
document.querySelector('.controlPanel').appendChild(gameTimer);
document.querySelector('.controlPanel').appendChild(counter);
document.querySelector('.controlPanel').appendChild(gameBtn);


const moveSound = new Audio('./assets/sound/shift.mp3');
saveBtn.innerHTML = 'Save';
loadBtn.innerHTML = 'Load';
soundBtn.innerHTML = 'Sound';
gameBtn.innerHTML = 'New Game';
gameTimer.innerHTML = '';
let timer = null;
let moveCounter = 0;
const gemSize = 8;

let gameState = [];

localStorage.setItem('loadable', 'no');

function init() {
    while (gameSpace.firstChild) {
        gameSpace.removeChild(gameSpace.firstChild);
    }
    moveCounter = 0;
    counter.innerHTML = '';

    showTime();

    const emptyGem = {
        left: 3,
        top: 3,
        value: 16,
    };

    let gems = [];

    gems.push(emptyGem);

    const randomizeGems = [...Array(15).keys()]
        .map(x => x + 1)
        .sort(() => Math.random() - 0.5);

    for (let i = 0; i < 15; i++) {
        const gem = document.createElement('div');
        let value;
        value = randomizeGems[i];

        gem.classList.add('gem');
        gem.innerHTML = value;

        const left = i % 4;
        const top = (i - left) / 4;

        gems.push({
            left: left,
            top: top,
            elem: gem,
            value: value,
        });

        gem.style.left = `${left * gemSize}vw`;
        gem.style.top = `${top * gemSize}vw`;

        gameSpace.appendChild(gem);

        gem.addEventListener('click', () => {
            move(i + 1);
        });
    }

    // проверка на решаемость 4x4
    function isSolvable() {
        let sum = 0;
        for (i = 1; i < gems.length; i++) {
            for (j = i + 1; j < gems.length; j++) {
                gems[j].value < gems[i].value ? sum++ : sum = sum;
            }
        }
        sum += 4;
        return (sum % 2 === 0) ? true : false;
    }
    if (isSolvable() === false && localStorage.getItem('loadable') === 'no') {
        init();
    }

    function move(gemIndex) {
        const gem = gems[gemIndex];
        const leftShift = Math.abs(emptyGem.left - gem.left);
        const topShift = Math.abs(emptyGem.top - gem.top);

        if ((leftShift + topShift) !== 1) {
            return;
        } else {

            gem.elem.style.left = `${emptyGem.left * gemSize}vw`;
            gem.elem.style.top = `${emptyGem.top * gemSize}vw`;

            const emptyGemLeft = emptyGem.left;
            const emptyGemTop = emptyGem.top;
            emptyGem.left = gem.left;
            emptyGem.top = gem.top;
            gem.left = emptyGemLeft;
            gem.top = emptyGemTop;


            moveCounter++;
            counter.innerHTML = moveCounter;

            moveSound.play();

            const isGameFinish = gems.every(
                gem => gem.value === gem.top * 4 + gem.left + 1
            );

            if (isGameFinish) {
                alert(`Ура! Вы решили головоломку за ${gameTimer.innerText} и ${moveCounter} ходов`);
            }
        }
    }

    localStorage.setItem('loadable', 'no')
}

init();

gameBtn.addEventListener('click', () => {
    init();
})

function showTime() {

    let hour = 0,
        min = 0,
        sec = 0;
    clearTimeout(timer);

    timer = setTimeout(function tick() {
        if (sec > 58) {
            min++;
            sec = -1;
            if (min > 58) {
                hour++;
                min = 0;
            }
        }
        sec++;
        gameTimer.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;
        timer = setTimeout(tick, 1000);
    }, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

soundBtn.addEventListener('click', () => {
    if (document.querySelector('.soundBtn_on')) {
        soundBtn.classList.remove('soundBtn_on');
        soundBtn.classList.add('soundBtn_off');
        moveSound.volume = 0;
    } else if (document.querySelector('.soundBtn_off')) {
        soundBtn.classList.remove('soundBtn_off');
        soundBtn.classList.add('soundBtn_on');
        moveSound.volume = 1;
    }
});