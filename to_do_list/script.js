window.onload = function() {
    let ul = document.querySelector('ul');
    let addBtn = document.querySelector('.addBtn');
    let input = document.querySelector('input');
    let listItems = document.querySelectorAll('li');
    let closeBtn;
    
    function createCloseBtn() {
        closeBtn = document.createElement('span');;
        closeBtn.innerHTML = '&#10006;';
        closeBtn.classList.add('close');
    }

    for (let i = 0; i < listItems.length; i++) {
        createCloseBtn();
        listItems[i].appendChild(closeBtn);
    }

    let closeBtns = document.querySelectorAll('.close');
    
    function close() {
        this.parentElement.style.display = 'none';
    }

    for (let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener('click', close);
    }

    let list = document.querySelector('ul');

    list.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
        }
    }, false);

    function createListElement() {
        let el = document.createElement('li');
        el.innerHTML = input.value;
        if (input.value === '') {
            input.setAttribute('placeholder', 'please enter some text');
        } else {
            ul.appendChild(el);
            input.value = '';
            createCloseBtn();
            closeBtn.addEventListener('click', close);
            el.appendChild(closeBtn);
        }
    }

    addBtn.addEventListener('click', createListElement);
    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            createListElement();
        }
    });

    
}