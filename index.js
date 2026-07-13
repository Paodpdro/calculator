
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
        console.log(decimalClicked)
        num1Active = true;
        num2Active =false;
        console.log(num1Active, 'num1')
        console.log(num2Active, 'num2')
        return;
    }

    if(num2Active) {
        num2 += `${number}`;
        console.log(num2, "num2", num1, "num1")
        displayText.textContent = num2;
        console.log(decimalClicked)
        num2Active = true;
        num1Active = false;
        console.log(num1Active, 'num1')
        console.log(num2Active, 'num2')

    }
    else if (num1Active) {
        num1 += `${number}`;
        console.log(num1, "num1")
        displayText.textContent = num1;
        passed = true;
        console.log(decimalClicked)
        num1Active = true;
        num2Active = false;
        console.log(num1Active, 'num1')
        console.log(num2Active, 'num2')

    }
}

let num1 = '';
let operationSymbol ='';
let num2 ='';
let passed;
let resultExist;
let decimalClicked = false;
let num1Active = true;
let num2Active = false;
let operationClickedFirst;

const displayText = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digits");
const operationButtons = document.querySelectorAll(".operation");
const equals = document.querySelector("#equals-button");
const clear = document.querySelector('#clear-button');
const decimal = document.querySelector('#decimal-button');
const backspace = document.querySelector('#backspace-button');

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
            console.log(decimalClicked)
            num1Active = true;
            num2Active =false;
            console.log(num1Active, 'num1')
            console.log(num2Active, 'num2')
            operationClickedFirst = false;
            console.log(operationClickedFirst, 'clicked first')
            return;
        }

        if (resultExist) {
            operationSymbol = button.textContent;
            resultExist = false;
            decimalClicked=false;
            console.log(decimalClicked)
            num1Active = false;
            num2Active =true;
            console.log(num1Active, 'num1')
            console.log(num2Active, 'num2')
            operationClickedFirst = false;
            console.log(operationClickedFirst, 'clicked first')
        }
        
        else if (operationSymbol!= '' && num2!=='') {
            displayText.textContent = operate(operationSymbol, num1, num2).toFixed(2);
            num1 = displayText.textContent;
            num2 = '';
            decimalClicked=false;
            console.log(decimalClicked)
            num1Active = true;
            num2Active =false;
            console.log(num1Active, 'num1')
            console.log(num2Active, 'num2')
            operationClickedFirst = false;
            console.log(operationClickedFirst, 'clicked first')
        }
        else if(num1==='') {
            operationSymbol = button.textContent;
            num1='0';
            num1 = displayText.textContent;
            decimalClicked=false;
            console.log(decimalClicked)
            operationClickedFirst = true;
            console.log(operationClickedFirst, 'clicked first')
        }
        else {
            operationSymbol = button.textContent;
            decimalClicked=false;
            console.log(decimalClicked)
            num1Active = false;
            num2Active =true;
            console.log(num1Active, 'num1')
            console.log(num2Active, 'num2')
            operationClickedFirst = false;
            console.log(operationClickedFirst, 'clicked first')
            resultExist = false;
        }
        
    })
})

equals.addEventListener("click", () => {
    if (num1!=='' && operationSymbol!=='' && num2!=='') {
        console.log(operationSymbol, num1, num2)
        if(num1.includes(".") || num2.includes(".")){
            displayText.textContent = operate(operationSymbol, num1, num2).toFixed(2);
            num1 = displayText.textContent;
            num2='';
        }
        else {
            displayText.textContent = operate(operationSymbol, num1, num2);
            num1 = displayText.textContent;
            num2='';
        }
        resultExist=true;
        console.log(resultExist, 'resultExist')
        num1Active = false;
        num2Active =true;
        console.log(num1Active, 'num1')
        console.log(num2Active, 'num2')
    }  
})

clear.addEventListener("click", () => {
    displayText.textContent='';
    num1='';
    num2='';
    operationSymbol='';
    decimalClicked=false;
    num1Active = true;
    num2Active =false;
    console.log(num1Active, 'num1')
    console.log(num2Active, 'num2')
})

decimal.addEventListener('click', () => {
    if (resultExist) {
       if(!num1.includes(".")) {
            num1+='.';
            displayText.textContent = num1;
            decimalClicked = true;
            console.log(decimalClicked)
            num1Active = true;
            num2Active =false;
            console.log(num1Active, 'num1')
            console.log(num2Active, 'num2')
            resultExist = false;
        }
        else {
            return
        }     
    }

    if(num1Active) {
        if(!num1.includes(".")) {
            num1+='.';
            displayText.textContent = num1;
            decimalClicked = true;
            console.log(decimalClicked)
        }
        else {
            return
        }    
        
    }
    else if(num2Active) {
        if(!num2.includes(".")) {
            num2+='.';
            displayText.textContent = num2;
            decimalClicked = true;
            console.log(decimalClicked)
        }
        else {
            return
        }
    }
    
})

backspace.addEventListener('click', () => {
    // if(operationClickedFirst) {
    //     num1 = '';
    //     displayText.textContent = num1;

    // }

    if (num1Active) {
        num1 = num1.slice(0,-1)
        displayText.textContent = num1;
    }
    else if(num2Active) {
        num2 = num2.slice(0,-1)
        displayText.textContent = num2;
    }
})