
function add(num1, num2) {
    return parseInt(num1)+parseInt(num2);
} 

function subtract(num1, num2) {
    return parseInt(num1)-parseInt(num2);
}

function multiply(num1, num2) {
    return parseInt(num1)*parseInt(num2);
}

function divide(num1, num2) {
    return parseInt(num1)/parseInt(num2);
}

function operate(operationSymbol, num1, num2) {
    let result;
    if (operationSymbol === "+") {
        result = add(num1, num2);
    }
    else if (operationSymbol === "-") {
        result = subtract(num1, num2);
    }
    else if (operationSymbol === "*") {
        result = multiply(num1, num2);
    }
    else {
        result = divide(num1, num2);
    }
    return result;
}

function clickedDigit(number, symbol) {
    if (symbol === '') {
        num1 += `${number}`;
        console.log(num1, "num1")
        displayText.textContent = num1;
    }
    else {
        num2 += `${number}`;
        console.log(num2, "num2", num1, "num1")
        displayText.textContent = num2;
    }
}

let num1 = '';
let operationSymbol ='';
let num2 ='';

const displayText = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digits");
const operationButtons = document.querySelectorAll(".operation");
const equals = document.querySelector("#equals-button");

digitButtons.forEach((button) => {
    button.addEventListener("click", () => clickedDigit(button.textContent, operationSymbol))
})

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operationSymbol = button.textContent;
        displayText.textContent = "";
    })
})


equals.addEventListener("click", () => {
    console.log(operationSymbol, num1, num2)
    displayText.textContent = operate(operationSymbol, num1, num2);
})
