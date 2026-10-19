function add(a,b) {return a + b;}
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {
    if (b === 0) {
        return "ERROR";
    } else {
        return a/b;
    }
}

let num1 = '';
let num2 = '';
let operator = '';
let afterOperation = false;

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            console.log(typeof num1);
            console.log(typeof num2);
            result = add(num1, num2);
            console.log('addition done');
            result = Math.round(result * 1e6) / 1e6;
            return result;
        case '-':
            result = subtract(num1, num2);
            console.log('subtraction done');
            result = Math.round(result * 1e6) / 1e6;
            return result;
        case '*': 
            result = multiply(num1, num2);
            console.log('multiplication done');
            result = Math.round(result * 1e6) / 1e6;
            return result;
        case '/':
            result = divide(num1, num2);
            console.log('division done');
            if (result === 'ERROR') {
                return result
            }
            result = Math.round(result * 1e6) / 1e6;
            return result;
    } 
}

let display = document.querySelector('.display');
const number_buttons = document.querySelectorAll('.number');
number_buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!afterOperation) {
            if (operator === '') {
                num1 = num1 + `${button.textContent}`;
                console.log(`num1 changed to ${num1}`);
                display.textContent = num1;
            } else {
                num2 = num2 + `${button.textContent}`;
                console.log(`num2 changed to ${num2}`);
                display.textContent = num2;
            }
        } else {
            num1 = `${button.textContent}`;
            console.log(`num1 changed to 4{num1}`);
            display.textContent = num1;
            afterOperation = false;
            console.log(`afterOperation becomes ${afterOperation}`);
        }
    })
})
const deci_point = document.querySelector('.point');
deci_point.addEventListener('click', () => {
    if (!afterOperation) {
        if (operator === '') {
            if (!num1.includes('.')) {
                num1 = num1 + '.';
                console.log(`num1 changed to ${num1}`);
                display.textContent = num1;
            }
        } else {
            if (!num2.includes('.')) {
                num2 = num2 + '.';
                console.log(`num2 changed to ${num2}`);
                display.textContent = num2;
            }
        }
    } else {
        num1 = '.';
        console.log(`num1 changed to ${num1}`);
        display.textContent = num1;
        afterOperation = false;
        console.log(`afterOperation becomes ${afterOperation}`);
    }
})
const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {
    if (!afterOperation) {
        if (operator === '') {
            if (num1.length > 1) {
                num1 = num1.slice(0, -1);
                console.log(`num1 changed to ${num1}`);
                display.textContent = num1;
            } else {
                num1 = '';
                console.log(`num1 changed to ${num1}`);
                display.textContent = '0';
            }
        } else {
            if (num2.length > 1) {
                num2 = num2.slice(0, -1);
                console.log(`num2 changed to ${num2}`);
                display.textContent = num2;
            } else {
                num2 = '';
                console.log(`num2 changed to ${num2}`);
                display.textContent = num1;
            }
        }
    } 
})
const operator_buttons = document.querySelectorAll('.operator');
operator_buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator !== '' && num2 !== '') {
            num1 = operate(+num1, operator, +num2);
            operator = '';
            num2 = '';
            display.textContent = num1;
            console.log('operation done, operator and num2 reset');
            console.log(`operator becomes \'${operator}\'`);
            console.log(`num2 becomes \'${num2}\'`);
            afterOperation = true;
            console.log(`afterOperation becomes ${afterOperation}`);
        }
        if (num1 !== '') {
            operator = button.id;
            console.log(`operator changed to ${operator}`);
            afterOperation = false;
            console.log(`afterOperation becomes ${afterOperation}`);
        } 
    })
})
const ac = document.querySelector('#AC');
ac.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    console.log('num1, num2, operator are reset. ');
    display.textContent = '0';
    console.log('display reset');
    afterOperation = false;
    console.log(`afterOperation becomes ${afterOperation}`);
})
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    if (operator !== '' && num2 !== '') {
        num1 = String(operate(+num1, operator, +num2));
        console.log(`result calculated to be ${num1}`);
        operator = '';
        num2 = '';
        display.textContent = num1;
        console.log('operation done, operator and num2 reset');
        console.log(`operator becomes \'${operator}\'`);
        console.log(`num2 becomes \'${num2}\'`);
        afterOperation = true;
        console.log(`afterOperation becomes ${afterOperation}`);
    } 
})

