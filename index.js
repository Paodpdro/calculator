
function add(num1, num2) {
    if(num1.includes('.') || num2.includes('.') ) { 
        return parseFloat(num1)+parseFloat(num2);
    }
    else{
        return parseInt(num1)+parseInt(num2);
    }
} 

function subtract(num1, num2) {
    if(num1.includes('.') || num2.includes('.') ) { 
        return parseFloat(num1)-parseFloat(num2);
    }
    else{
        return parseInt(num1)-parseInt(num2);
    }
}

function multiply(num1, num2) {
    if(num1.includes('.') || num2.includes('.') ) { 
        return parseFloat(num1)*parseFloat(num2);
    }
    else{
        return parseInt(num1)*parseInt(num2);
    }
}

function divide(num1, num2) {
    if(num1.includes('.') || num2.includes('.') ) { 
        return parseFloat(num1)/parseFloat(num2);
    }
    else{
        return parseInt(num1)/parseInt(num2);
    }
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
    if (resultExist) { //So consecutive operations work. Num2 here is needed so consecutive operations work since num1 is already the result.
        console.log('displayclicked1')
        console.log(operationSymbol)
        num2 += `${number}`;
        console.log(num1, 'num1')
        console.log(num2, "num2")
        displayText.textContent = num2;
        // resultExist=false;
        console.log(decimalClicked)
        num1Active = false;
        num2Active =true;
        console.log(num1Active, 'num1')
        console.log(num2Active, 'num2')
        return;
    }

    if (operationClickedFirst) {
        console.log('displayclicked2')
        console.log(operationSymbol)
        num2 = `${number}`;
        console.log(num1, "num1")
        console.log(num2, "num2")
        displayText.textContent = num2;
        console.log(decimalClicked)
        num1Active = false;
        num2Active = true;
        console.log(num1Active, 'num1')
        console.log(num2Active, 'num2')
        operationClickedFirst = false;
        console.log(operationClickedFirst, 'clicked first')
        return;
    }

    if(num2Active) {
        console.log('displayclicked3')
        console.log(operationSymbol)
        if (num2 =='0') {
            num2 ='';
            num2 += `${number}`;
            console.log(num2, "num2", num1, "num1")
            displayText.textContent = num2;
            console.log(decimalClicked)
            num2Active = true;
            num1Active = false;
            console.log(num1Active, 'num1')
            console.log(num2Active, 'num2')
            
        }
        else {
            num2 += `${number}`;
            console.log(num2, "num2", num1, "num1")
            displayText.textContent = num2;
            console.log(decimalClicked)
            num2Active = true;
            num1Active = false;
            console.log(num1Active, 'num1')
            console.log(num2Active, 'num2')
        }
        

    }
    else if (num1Active) {
        console.log('displayclicked4')
        console.log(operationSymbol)
        if (num1 == 0) {
            num1='';
            num1 += `${number}`;
            console.log(num1, "num1")
            displayText.textContent = num1;
            console.log(decimalClicked)
            num1Active = true;
            num2Active = false;
            console.log(num1Active, 'num1')
            console.log(num2Active, 'num2')
        }
        else {
            if (resultExist) {
                num1='';
                num1 += `${number}`;
                console.log(num1, "num1")
                displayText.textContent = num1;
                console.log(decimalClicked)
                num1Active = true;
                num2Active = false;
                console.log(num1Active, 'num1')
                console.log(num2Active, 'num2') 
            }
            else {
                num1 += `${number}`;
                console.log(num1, "num1")
                displayText.textContent = num1;
                console.log(decimalClicked)
                num1Active = true;
                num2Active = false;
                console.log(num1Active, 'num1')
                console.log(num2Active, 'num2')
            }
        }
    }
}

let num1 = '';
let operationSymbol ='';
let num2 ='';
let resultExist;
let decimalClicked = false;
let num1Active = true;
let num2Active = false;
let operationClickedFirst;
let result;

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
        //i think add if result active here
        if (operationSymbol!= '' && num2!=='') { //For automatically solving a pair with an operation if another operation is clicked
            console.log('here2')
            console.log(operationSymbol)
            result = operate(operationSymbol, num1, num2);
            if (!Number.isInteger(result)) {
                result = Number(result.toFixed(2))
            }
            operationSymbol = button.textContent
            console.log(operationSymbol)

            displayText.textContent = result;
            num1 = `${result}`;
            num2 = '';
            decimalClicked=false;
            resultExist=true; //most important
            console.log(resultExist, 'results Exist')
            console.log(decimalClicked)
            num1Active = true; //Need this especially for backspacing
            num2Active =false;
            console.log(num1Active, 'num1')
            console.log(num2Active, 'num2')
            operationClickedFirst = false;
            console.log(operationClickedFirst, 'clicked first')
            return;
        }
        else if(num1==='') {
            console.log('here3')
            operationSymbol = button.textContent;
            console.log(operationSymbol)
            num1='0';
            num1 = displayText.textContent;
            decimalClicked=false;
            console.log(decimalClicked)
            operationClickedFirst = true;
            console.log(operationClickedFirst, 'clicked first')
            return;
        }
        else {
            console.log('here4')
            operationSymbol = button.textContent;
            console.log(operationSymbol)
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
        if(num2==='0' && operationSymbol==='/'){
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
            console.log(num2, "num2", num1, "num1")
            return;
        }
        console.log(operationSymbol, num1, num2)
        result = operate(operationSymbol, num1, num2);
        if (!Number.isInteger(result)) {
            result = Number(result.toFixed(2))
        }
        displayText.textContent = result;
        num1 = `${result}`;
        num2='';
        // resultExist=true; problem
        console.log(resultExist, 'resultExist')
        num1Active = true;
        num2Active =false;
        console.log(num1Active, 'num1')
        console.log(num2Active, 'num2')
        console.log(num2, "num2", num1, "num1")

    }  
})

clear.addEventListener("click", () => {
    displayText.textContent='0';
    num1='0';
    num2='';
    operationSymbol='';
    decimalClicked=false;
    num1Active = true;
    num2Active =false;
    console.log(num1Active, 'num1')
    console.log(num2Active, 'num2')
})

decimal.addEventListener('click', () => {
    if (resultExist) { //This code is needed because without this, adding a decimal after the equal sign will go to if result exist.
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
            console.log(num2, "num2", num1, "num1")
            console.log(num1Active, 'num1')
            console.log(num2Active, 'num2')

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
            console.log(num2, "num2", num1, "num1")
            console.log(num1Active, 'num1')
            console.log(num2Active, 'num2')

        }
        else {
            return
        }
    }
    
})

backspace.addEventListener('click', () => {

    if (num1Active) {
        num1 = num1.slice(0,-1)
        displayText.textContent = num1;
        console.log(num2, "num2", num1, "num1")
        console.log(num1Active, 'num1')
        console.log(num2Active, 'num2')
        resultExist=false;
        console.log(resultExist, 'results Exist')

   
    }
    else if(num2Active) {
        num2 = num2.slice(0,-1)
        displayText.textContent = num2;
        console.log(num2, "num2", num1, "num1")
        console.log(num1Active, 'num1')
        console.log(num2Active, 'num2')
        console.log(resultExist, 'results Exist')


    }
})

