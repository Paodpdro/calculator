
function add(num1, num2) {
    return parseFloat(num1)+parseFloat(num2);
} 

function subtract(num1, num2) {
    return parseFloat(num1)-parseFloat(num2);
}

function multiply(num1, num2) {
    return parseFloat(num1)*parseFloat(num2);
}

function divide(num1, num2) {
    return parseFloat(num1)/parseFloat(num2);
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
    if (resultExist) {
        num1='';
        num1 += `${number}`;
        console.log(num1, "num1")
        displayText.textContent = num1;
        operationSymbol='';
        num2='';
        resultExist=false;
        return
    }

    if(symbol !== '') {
        num2 += `${number}`;
        console.log(num2, "num2", num1, "num1")
        displayText.textContent = num2;
    }
    else {
        num1 += `${number}`;
        console.log(num1, "num1")
        displayText.textContent = num1;
        passed = true;
    }
}

let num1 = '';
let operationSymbol ='';
let num2 ='';
let passed;
let resultExist;
let decimalClicked = false;

const displayText = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digits");
const operationButtons = document.querySelectorAll(".operation");
const equals = document.querySelector("#equals-button");
const clear = document.querySelector('#clear-button');
const decimal = document.querySelector('#decimal-button');

digitButtons.forEach((button) => {
    button.addEventListener("click", () => clickedDigit(button.textContent, operationSymbol))
})

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(num1==='0' && button.textContent==='/'){
            displayText.textContent="Error";
            operationSymbol='';
            num1='';
            decimalClicked =false;
        }

        if (operationSymbol!= '' && num2!=='') {
            displayText.textContent = operate(operationSymbol, num1, num2).toFixed(2);
            num1 = displayText.textContent;
            num2 = '';
            decimalClicked=false;
        }
        operationSymbol = button.textContent;
                
    })
})

equals.addEventListener("click", () => {
    if (num1!=='' && operationSymbol!=='' && num2!=='') {
        console.log(operationSymbol, num1, num2)
        displayText.textContent = operate(operationSymbol, num1, num2).toFixed(2);
        resultExist=false;
    }  
})

clear.addEventListener("click", () => {
    displayText.textContent='';
    num1='';
    num2='';
    operationSymbol='';
    decimalClicked=false
})

decimal.addEventListener('click', () => {
    if(!decimalClicked) {
        clickedDigit(decimal.textContent, operationSymbol);
        decimalClicked = true;
        console.log(decimalClicked)
    }
   
})