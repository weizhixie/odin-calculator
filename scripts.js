let inputFirstNumber = "";
let inputSecondNumber = "";
let inputOperator = "";

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

function updateCalculatorDisplay(displayContent) {
    const calculatorDisplay = document.querySelector(".calculator-display");
    calculatorDisplay.textContent = displayContent;
}

function handleNumberButtonClick() {
    const numberButtons = document.querySelectorAll(".number-buttons");
    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (inputOperator === "") {
                inputFirstNumber += button.value;
                updateCalculatorDisplay(inputFirstNumber);
            } else {
                inputSecondNumber += button.value;
                updateCalculatorDisplay(inputSecondNumber);
            }
        });
    });
}

function handleOperatorButtonClick() {
    const operatorButtons = document.querySelectorAll(".operator-buttons");
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (inputSecondNumber) {
                calculateAndDisplayResult();
            }
            inputOperator = button.value;
        });
    });
}

function handleEqualButtonClick() {
    const equalButton = document.querySelector("#equal-to-button");
    equalButton.addEventListener("click", () => {
        if (inputSecondNumber) {
            calculateAndDisplayResult();
        }
    });
}

function calculateAndDisplayResult() {
    let currentResult = operate(inputFirstNumber, inputOperator, inputSecondNumber);
    inputFirstNumber = currentResult;
    inputSecondNumber = "";
    updateCalculatorDisplay(currentResult);
}

handleNumberButtonClick();
handleOperatorButtonClick();
handleEqualButtonClick();