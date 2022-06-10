const screen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    screen.value = number;
};

const numbers = document.querySelectorAll(".number");

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    prevNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = '';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (e)=>{
        inputOperator(e.target.value);
    });
});

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', ()=>{
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseInt(prevNumber) + parseInt(currentNumber);
            break;
        case "-":
            result = parseInt(prevNumber) - parseInt(currentNumber);
            break;
        case "*":
            result = parseInt(prevNumber) * parseInt(currentNumber);
            break;
        case "/":
            result = parseInt(prevNumber) / parseInt(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}


numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});