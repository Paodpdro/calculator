
function add(num1, num2) {
    return num1+num2;
} 

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(operationSymbol, num1, num2) {
    let result;
    if (operationSymbol === add) {
        result = add(num1, num2);
    }
    else if (operationSymbol === subtract) {
        result = subtract(num1, num2);
    }
    else if (operationSymbol === multiply) {
        result = multiply(num1, num2);
    }
    else {
        result = divide(num1, num2);
    }
    return result;
}

let num1;
let operationSymbol;
let num2;

const displayText = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digits");

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayText.textContent = button.textContent;
    })
})

