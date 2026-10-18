function add(a,b) {return a + b;}
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {
    if (b == 0) {
        return "ERROR";
    } else {
        return a/b;
    }
}

let num1 = '';
let num2 = '';
let operator = '';

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*': 
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    } 
}

let display = document.querySelector('.display');
const number_buttons = document.querySelectorAll('.number');
number_buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator === '') {
            num1 = num1 + `${button.textContent}`;
            console.log(`num1 changed to ${num1}`);
            display.textContent = num1;
        } else {
            num2 = num2 + `${button.textContent}`;
            console.log(`num2 changed to ${num2}`);
            display.textContent = num2;
        }
    })
})
const operator_buttons = document.querySelectorAll('.operator');
operator_buttons.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.id;
        console.log(`operator changed to ${operator}`);
    })
})