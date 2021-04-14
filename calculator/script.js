let buttons = document.querySelectorAll('button');
let screen = document.querySelector('.current-operand');
let operands = ['', ''];
let operator = null;
let overwrite = false;
let previousScreen = document.querySelector('.previous-operand');
let errorScreen = document.querySelector('.error');


for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    if (this.hasAttribute('data-number')) {
      enterNumberButton(this.innerText);
    } else if (this.hasAttribute('data-operation')) {
      enterOperatorButton(this.innerText);
    } else if (this.hasAttribute('data-equals')) {
      getResult();
    } else if (this.hasAttribute('data-all-clear')) {
      clean();
    } else if (this.hasAttribute('data-delete')) {
      del();
    }
  });
}

function enterNumberButton(number) {
  let index = operator ? 1 : 0;
  if (number === '.') {
    if (operands[index].indexOf('.') !== -1) {
      return;
    }
    if (operands[index] === '') {
      number = '0.';
    }
  }
  if (overwrite === true) {
    screen.innerText = number;
    operands[index] = number;
    overwrite = false;
  } else {
    screen.innerText += number;
    operands[index] += number;
  }
  errorScreen.innerText = '';
}

function enterOperatorButton(op) {
  let index = operator ? 1 : 0;
  //для бага двойного минуса
  if ((operands[0] === '' && op !== '-') || operands[index] === '-') {
    return;
  }
  // для недопустимости ввода оператора после ошибки вычисления
  if (operands[0] !== '' && operands[1] !== '' && operator) {
    // if (!getResult()) {
    //   return;
    // }
    index = 0;
  }
  if (op === '-') {
    if (operands[index] === '') {
      operands[index] = op;
      screen.innerText = `-${screen.innerText}`;
      overwrite = false;
      errorScreen.innerText = '';
      return;
    }
  }
  getResult();
  operator = op;
  if (op === '√') {
    getResult();
  } else {
    previousScreen.innerText = screen.innerText + op;
    screen.innerText = '';
    errorScreen.innerText = '';
  }
}

function getResult() {
  let result;
  if (operator === '+') {
    result = +operands[0] + +operands[1];
  } else if (operator === '-') {
    result = operands[0] - operands[1];
  } else if (operator === '*') {
    result = operands[0] * operands[1];
  } else if (operator === '/') {
    if (operands[1] === '0' || operands[1] === '-0') {
      alert('Делить на ноль можно бесконечно долго..');
      return false;
    }
    result = operands[0] / operands[1];
  } else if (operator === '√') {
    if (operands[0] >= 0) {
      result = Math.sqrt(operands[0]);
    } else {
      errorScreen.innerText = 'Error';
      result = '';
    }
  } else if (operator === '^') {
    result = Math.pow(operands[0], operands[1]);
  } else {
    return false;
  }
  if (result !== '') {
    result = round(result);
  }
  operands[0] = result;
  operands[1] = '';
  operator = null;
  screen.innerText = result;
  previousScreen.innerText = '';
  overwrite = true;
  return result === '' ? result : false;

}

function clean() {
  operands = ['', ''];
  operator = null;
  screen.innerText = '';
  previousScreen.innerText = '';
}

function del() {
  let index = operator ? 1 : 0;
  if (operands[index] !== '') {
    operands[index] = operands[index].slice(0, -1);
    screen.innerText = screen.innerText.slice(0, -1);
  }
}

function round(result) {
  return Math.round(result * 100000) / 100000;
}