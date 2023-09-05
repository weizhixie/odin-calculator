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

function exponent(firstNumber, secondNumber) {
    return Math.pow(firstNumber, secondNumber);
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
        case "x":
            result = multiply(firstNumber, secondNumber);
            break;
        case "÷":
            result = divide(firstNumber, secondNumber);
            break;
        case "^":
            result = exponent(firstNumber, secondNumber);
            break;
    }
    return Math.round(result * 100) / 100;
}

function updateCalculatorDisplay(displayContent) {
    const calculatorDisplay = document.querySelector(".current-numbers");
    calculatorDisplay.textContent = displayContent;
    displayOperationNumbers();
}

function displayOperationNumbers() {
    const operationNumbers = document.querySelector(".operation-numbers");
    const checkOperator = inputFirstNumber + inputOperator[0];
    let tempNum = `${inputFirstNumber} ${inputOperator} ${inputSecondNumber}`;

    if (checkOperator === "^" || checkOperator === "÷" || checkOperator === "x"
        || checkOperator === "-" || checkOperator === "+") {
        tempNum = `${inputFirstNumber} 0 ${inputOperator} ${inputSecondNumber}`;
    }
    operationNumbers.textContent = tempNum;
}

function handleNumberButtonClick() {
    const numberButtons = document.querySelectorAll(".number-buttons");
    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (inputOperator === "") {
                inputFirstNumber += button.value;
                inputFirstNumber = validateInput(inputFirstNumber);
                updateCalculatorDisplay(inputFirstNumber);
            } else {
                inputSecondNumber += button.value;
                inputSecondNumber = validateInput(inputSecondNumber);
                updateCalculatorDisplay(inputSecondNumber);
            }
        });
    });
}

function handleOperatorButtonClick() {
    const operatorButtons = document.querySelectorAll(".operator-buttons");
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            calculateAndDisplayResult();
            inputOperator = button.value;
            displayOperationNumbers();
        });
    });
}

function handleEqualButtonClick() {
    const equalButton = document.querySelector("#equal-to-button");
    equalButton.addEventListener("click", () => {
        calculateAndDisplayResult();
    });
}

function calculateAndDisplayResult() {
    if (inputSecondNumber) {
        let currentResult = operate(inputFirstNumber, inputOperator, inputSecondNumber);
        if (!Number.isFinite(currentResult)) {
            emptyData();
            updateCalculatorDisplay("Oops! Something Went Wrong");
        }
        else {
            updateCalculatorDisplay(currentResult);
            inputFirstNumber = validateInput(currentResult);
            inputSecondNumber = "";
            inputOperator = "";
        }
    }
}

function validateInput(input) {
    if (input[0] === ".") return `0${input}`;

    if (input.length === 1 && input == 0) return input;

    if (input.toString().split('.').length > 1) {
        return input.toString().slice("").replace(/\./g, (match, offset) => {
            return offset === input.toString().slice("").indexOf(".") ? match : "";
        });
    }
    return input.toString().slice("").replace(/^0/, "");
}

function handleDeleteButtonClick() {
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.value === "ac") {
                emptyData();
                updateCalculatorDisplay(0);
            } else if (button.value === "del") {
                sliceLastCharacter();
            }
        });
    });
}

function handleKeyboardEvent() {
    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        if ((e.key >= 0 && e.key <= 9 || e.key === ".")) {
            if (inputOperator === "") {
                inputFirstNumber += e.key;
                inputFirstNumber = validateInput(inputFirstNumber);
                updateCalculatorDisplay(inputFirstNumber);
            } else {
                inputSecondNumber += e.key;
                inputSecondNumber = validateInput(inputSecondNumber);
                updateCalculatorDisplay(inputSecondNumber);
            }
        } else if (e.key === "/" || e.key === "*" || e.key === "-" || e.key === "+" || e.key === "^") {
            let tempOperator = e.key;
            if (e.key === "*") {
                tempOperator = "x";
            } else if (e.key === "/") {
                tempOperator = "÷";
            }
            calculateAndDisplayResult();
            inputOperator = tempOperator;
            displayOperationNumbers();
        } else if (e.key === "Enter") {
            calculateAndDisplayResult();
        } else if (e.key === "Backspace") {
            sliceLastCharacter();
        } else if (e.key === "Escape") {
            emptyData();
            updateCalculatorDisplay(0);
        }
    });
}

function emptyData() {
    inputFirstNumber = "";
    inputSecondNumber = "";
    inputOperator = "";
}

function resetDisplace(input) {
    if (input.length === 0) {
        emptyData();
        updateCalculatorDisplay(0);
    }
}

function sliceLastCharacter() {
    if (inputSecondNumber) {
        inputSecondNumber = inputSecondNumber.slice(0, -1);
        updateCalculatorDisplay(inputSecondNumber);
        resetDisplace(inputSecondNumber);
    } else if (inputFirstNumber) {
        inputFirstNumber = inputFirstNumber.slice(0, -1);
        updateCalculatorDisplay(inputFirstNumber);
        resetDisplace(inputFirstNumber);
    } else if (inputOperator) {
        inputOperator = inputOperator.slice(0, -1);
        updateCalculatorDisplay(inputOperator);
        resetDisplace(inputOperator);
    }
}

handleNumberButtonClick();
handleOperatorButtonClick();
handleEqualButtonClick();
handleDeleteButtonClick();
handleKeyboardEvent();