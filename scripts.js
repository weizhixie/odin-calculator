let inputFirstNumber = "";
let inputSecondNumber = "";
let operator = "";

const calculatorDisplay = document.querySelector(".calculator-display");

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

    return result;
}

function numberButtonHandler() {
    const numberButtons = document.querySelectorAll(".number-buttons");
    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (operator === "") {
                inputFirstNumber += button.value;
                calculatorDisplay.textContent = inputFirstNumber;
            } else {
                inputSecondNumber += button.value;
                calculatorDisplay.textContent = inputSecondNumber;
            }
        });
    });
}

function operatorButtonHandler() {
    const operatorButtons = document.querySelectorAll(".operator-buttons");
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            operator = button.value;
            calculatorDisplay.textContent = "";
        });
    });
}

numberButtonHandler();
operatorButtonHandler();