// query selectors
const screen = document.querySelector('.calculator-screen');
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector('.equal-sign');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.all-clear');

// variable init
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

// functions
const updateScreen = (number) => {
    screen.value = number;
};

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
        result = parseFloat(prevNumber) + parseFloat(currentNumber);
        break;
    case "-":
        result = parseFloat(prevNumber) - parseFloat(currentNumber);
        break;
    case "*":
        result = parseFloat(prevNumber) * parseFloat(currentNumber);
        break;
    case "/":
        result = parseFloat(prevNumber) / parseFloat(currentNumber);
        break;
    default:
        break;
    }
    currentNumber = result;
    calculationOperator = '';
}

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}

// Event Listener
numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", (e)=>{
        inputOperator(e.target.value);
    });
});


equalSign.addEventListener('click', ()=>{
    calculate();
    updateScreen(currentNumber);
});

clear.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

decimal.addEventListener('click', (e)=>{
    inputDecimal(e.target.value);
    updateScreen(currentNumber);
});