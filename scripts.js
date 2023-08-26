let inputFirstNumber = "";
let inputSecondNumber = "";
let operator = "";
let currentResult = "";

function add(firstNumber, secondNumber) {
    return +firstNumber + +secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(firstNumber, operator, secondNumber) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
    }
    return Math.round(result * 100) / 100;
}

function setCalculatorDisplay(displayContent) {
    const calculatorDisplay = document.querySelector(".calculator-display");
    calculatorDisplay.textContent = displayContent;
}

function numberButtonHandler() {
    const numberButtons = document.querySelectorAll(".number-buttons");
    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (operator === "") {
                inputFirstNumber += button.value;
                setCalculatorDisplay(inputFirstNumber);
            } else {
                inputSecondNumber += button.value;
                setCalculatorDisplay(inputSecondNumber);
            }
        });
    });
}

function operatorButtonHandler() {
    const operatorButtons = document.querySelectorAll(".operator-buttons");
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (inputSecondNumber) {
                currentResult = operate(inputFirstNumber, operator, inputSecondNumber);
                inputFirstNumber = currentResult;
                inputSecondNumber = "";
                setCalculatorDisplay(currentResult);
            }
            operator = button.value;
        });
    });
}

function evaluateNumbers() {
    const equalButton = document.querySelector("#equal-to-button");
    equalButton.addEventListener("click", () => {
        if (inputSecondNumber) {
            currentResult = operate(inputFirstNumber, operator, inputSecondNumber);
            inputFirstNumber = currentResult;
            inputSecondNumber = "";
            setCalculatorDisplay(currentResult);
        }
    });
}

numberButtonHandler();
operatorButtonHandler();
evaluateNumbers();