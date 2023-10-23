const display = document.querySelector("#display");
const displayOperation = document.querySelector("#display-operation");
const numberButtons = document.querySelectorAll("[data-number]");
const decimalNumberButton = document.querySelector("#decimal");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");
const substractionButton = document.querySelector("#substraction");
const additionButton = document.querySelector("#addition");
const multiplicationButton = document.querySelector("#multiplication");
const divisionButton = document.querySelector("#division");
let previousOperand = "";
let currentOperand = "";
let currentOperation = 0;

const showDisplay = () => {
    display.value = currentOperand;
    displayOperation.value = previousOperand;
}

const addNumber = (value) => {
    if (currentOperand.length <= 12 && value != "0") {
        currentOperand += value;
        showDisplay();
    } else if (currentOperand.length <= 12 && !(currentOperand === "")) {
        currentOperand += value;
        showDisplay();
    }
}

const appendNumber = () => {
    if (!currentOperand.includes('.')) {
        currentOperand += '.';
        showDisplay();
    }
}

const startOperation = (operation, symbol) => {
    if (currentOperand != "") {
        previousOperand = currentOperand + " " + symbol;
        currentOperand = "";
    }
    currentOperation = operation;
    showDisplay();
}

const clear = () => {
    previousOperand = "";
    currentOperand = "";
    currentOperation = 0;
    showDisplay();
}

const calculate = () => {

    let result = 0;

    if (currentOperation == "addition") {
        result = parseFloat(previousOperand) + parseFloat(currentOperand);
    }

    if (currentOperation == "substraction") {
        result = parseFloat(previousOperand) - parseFloat(currentOperand);
    }

    if (currentOperation == "division") {
        result = parseFloat(previousOperand) / parseFloat(currentOperand);
    }

    if (currentOperation == "multiplication") {
        result = parseFloat(previousOperand) * parseFloat(currentOperand);
    }

    previousOperand = "";
    result.toString().length <= 15 ? currentOperand = result.toString() : currentOperand = "ERROR";
    showDisplay();
    currentOperation = 0;
}

const getResult = () => {
    if (currentOperand != "" && currentOperation != 0 && previousOperand != "") {
        calculate();
    }
}

additionButton.addEventListener("click", ()=> {
    startOperation("addition", "+");
})

substractionButton.addEventListener("click", ()=> {
    startOperation("substraction", "-");
})

multiplicationButton.addEventListener("click", ()=> {
    startOperation("multiplication", "*");
})

divisionButton.addEventListener("click", ()=> {
    startOperation("division", "/");
})

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        addNumber(button.innerText);
    });
})

decimalNumberButton.addEventListener("click", () => {
    appendNumber();
})

clearButton.addEventListener("click", () => {
    clear();
})

equalButton.addEventListener("click", ()=> {
    getResult();
})
