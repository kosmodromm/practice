let setLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ru';

const textArea = document.createElement('textarea');
document.body.appendChild(textArea);
// volume on/off
const volume = document.createElement('button');
volume.classList.add('volume_on');
document.body.appendChild(volume);
volume.addEventListener('click', function () {
    if (document.querySelector('.volume_on')) {
        volume.classList.remove('volume_on');
        volume.classList.add('volume_off');
        keyAudio.volume = 0;
        keyEnAudio.volume = 0;
        backspaceAudio.volume = 0;
        shiftAudio.volume = 0;
        enterAudio.volume = 0;
        capsAudio.volume = 0;
    } else if (document.querySelector('.volume_off')) {
        volume.classList.remove('volume_off');
        volume.classList.add('volume_on');
        keyAudio.volume = 1;
        keyEnAudio.volume = 1;
        backspaceAudio.volume = 1;
        shiftAudio.volume = 1;
        enterAudio.volume = 1;
        capsAudio.volume = 1;
    }
});

//
const keyBoard = document.createElement('div');
keyBoard.classList.add('keyboard');
document.body.appendChild(keyBoard);

let cursorPosition = 0;

let keyData = [];

const keyAudio = new Audio('./assets/sound/keys-s.wav');
const keyEnAudio = new Audio('./assets/sound/keys_en-s.wav');
const backspaceAudio = new Audio('./assets/sound/backspace-s.wav');
const shiftAudio = new Audio('./assets/sound/shift-s.wav');
const enterAudio = new Audio('./assets/sound/enter-s.wav');
const capsAudio = new Audio('./assets/sound/capslock-s.wav');

function isActionButton(buttonName) {
    const wideButtons = ['backspace', 'enter', 'language', 'capslock', 'space', 'shift', 'KeyBoard show/hide'];
    return wideButtons.indexOf(buttonName) !== -1 ? true : false;
}

let capsLock = false;
let shift = false;

const keyStorage = {
    en: {
        standard: [
            "KeyBoard show/hide", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "language",
            "capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space", "&larr;", "&rarr;"
        ],
        alt: [
            "KeyBoard show/hide", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "language",
            "capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "/",
            "space", "&larr;", "&rarr;"
        ]

    },
    ru: {
        standard: [
            "KeyBoard show/hide", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "language",
            "capslock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "enter",
            "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/",
            "space", "&larr;", "&rarr;"
        ],
        alt: [
            "KeyBoard show/hide", "!", "\"", "№", "%", ":", ",", ".", ";", "(", ")", "backspace",
            "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "language",
            "capslock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "enter",
            "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/",
            "space", "&larr;", "&rarr;"
        ]
    }
};

function init() {
    keyBoard.innerHTML = '';
    keyData = keyStorage[setLang];
    if (shift) {
        keyData = keyData.alt
    } else {
        keyData = keyData.standard
    }


    for (let i = 0; i < keyData.length; i++) {
        let keyBtn = document.createElement('button');
        keyBtn.classList.add('kb-btn');
        keyBtn.innerHTML = keyData[i];

        if (isActionButton(keyBtn.innerText)) {
            keyBtn.classList.add('wide');
        } else if (capsLock && !shift || !capsLock && shift) {
            keyBtn.innerText = keyBtn.innerText.toUpperCase();

        }

        switch (keyBtn.innerText) {
            case 'backspace':
                keyBtn.addEventListener('click', backspace);
                setCursor();
                break;
            case 'language':
                keyBtn.classList.add('language-ru');
                keyBtn.addEventListener('click', function () {
                    switchLang(false);
                });
                setCursor();
                break;
            case 'enter':
                keyBtn.addEventListener('click', function () {
                    onSymbolInput('\n');
                    enterAudio.play();
                });
                break;
            case 'capslock':
                if (capsLock) {
                    keyBtn.classList.add('active');
                }
                keyBtn.addEventListener('click', function () {
                    capsLock = !capsLock;
                    capsAudio.play();
                    init();
                });
                setCursor();
                break;
            case 'space':
                keyBtn.classList.add('extra-wide');
                keyBtn.addEventListener('click', function () {
                    onSymbolInput(' ');
                });
                break;
            case 'shift':
                if (shift) {
                    keyBtn.classList.add('active');
                }
                keyBtn.addEventListener('click', function () {
                    shift = !shift;
                    shiftAudio.play();
                    init();
                });
                break;
            case '←':
                keyBtn.addEventListener('click', function () {
                    cursorPosition--;
                    setCursor();
                });
                break;
            case '→':
                keyBtn.addEventListener('click', function () {
                    cursorPosition++;
                    setCursor();
                });
                break;
            case 'KeyBoard show/hide':
                keyBtn.classList.add('show');
                keyBtn.addEventListener('click', hiddenKb);
                setCursor();
                break;
            default:
                keyBtn.addEventListener('click', function () {
                    onSymbolInput(keyBtn.innerText);
                    if (setLang === 'ru') {
                        keyAudio.play();
                    } else {
                        keyEnAudio.play();
                    }
                });
        }

        keyBoard.appendChild(keyBtn);

        if (keyData[i] === 'backspace' || keyData[i] === 'language' || keyData[i] === 'enter' || keyData[i] === '/') {
            keyBoard.appendChild(document.createElement('br'));
        }
    }
}

textArea.addEventListener('blur', function () {
    cursorPosition = textArea.selectionStart;
});

function setCursor() {
    textArea.focus();
    textArea.selectionStart = cursorPosition;
    textArea.selectionEnd = textArea.selectionStart;
}

/**
 * 
 * @param {string} value 
 */
function onSymbolInput(value) {
    if (capsLock && value !== '\n') {
        value = value.toUpperCase();
    }
    textArea.value = textArea.value.slice(0, cursorPosition) + value + textArea.value.slice(cursorPosition);
    cursorPosition++;
    setCursor();
}

function backspace() {
    if (cursorPosition === textArea.selectionEnd) {
        if (cursorPosition !== 0) {
            textArea.value = textArea.value.slice(0, cursorPosition - 1) + textArea.value.slice(cursorPosition);
            cursorPosition--;
        }
    } else {
        textArea.value = textArea.value.slice(0, cursorPosition) + textArea.value.slice(textArea.selectionEnd);
    }
    backspaceAudio.play();
    setCursor();
    return;
}


function switchLang(toggleKeyDown) {
    setLang = setLang === 'ru' ? 'en' : 'ru';
    init();
    if (toggleKeyDown) {
        findButton('language').classList.toggle('keyDown');
    }
    if (setLang === 'en') {
        findButton('language').classList.remove('language-ru');
        findButton('language').classList.add('language-en');
    } else {
        findButton('language').classList.remove('language-en');
        findButton('language').classList.add('language-ru');
    }
    localStorage.setItem('lang', setLang);
}

function hiddenKb() {
    if (document.querySelector('.hidden')) {
        keyBoard.classList.remove('hidden');
    } else {
        keyBoard.classList.add('hidden');
    }
}

function findButton(btnValue) {
    let allButtons = document.querySelectorAll('button');
    for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i].innerText === btnValue) {
            return allButtons[i];
        }
    }
    return null;
}

document.body.addEventListener('keydown', function (event) {
    let button = findButton(event.key);
    if (event.shiftKey && event.altKey) {
        button = findButton('language');
        switchLang(true);
    }
    if (event.key === 'Enter') {
        button = findButton('enter');
    }

    if (event.key === 'Backspace') {
        button = findButton('backspace');
    }

    if (button) {
        button.classList.add('keyDown');
    }
});

document.body.addEventListener('keyup', function (event) {
    let button = findButton(event.key);
    if (button) {
        button.classList.remove('keyDown');
    }
    if (event.shiftKey || event.altKey) {
        button = findButton('language');
        button.classList.remove('keyDown');
    }
    if (event.key === 'Enter') {
        button = findButton('enter');
        button.classList.remove('keyDown');
    }
    if (event.key === 'Backspace') {
        button = findButton('backspace');
        button.classList.remove('keyDown');
    }
});

init();