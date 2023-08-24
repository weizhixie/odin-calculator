let inputFirstNumber = "";

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
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

function displayNumber() {
    const calculatorDisplay = document.querySelector(".calculator-display");
    const numberButtons = document.querySelectorAll(".number-buttons");

    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            calculatorDisplay.textContent += button.value;
            inputFirstNumber += button.value;
        });
    });
}

displayNumber();