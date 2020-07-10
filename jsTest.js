const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent 
    const previousKeyType = calculator.dataset.previousKeyType

    if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator') {
            display.textContent = keyContent 
        } else {
            display.textContent = displayedNum + keyContent 
        } 
        
    }

    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' 
    ) {
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action 
    }
    if (action === 'decimal') {
        display.textContent = displayedNum + '.'
    }
    
    if (action === 'clear') {
        firstValue = 0; 
        secondValue = 0;
        display.textContent = 0; 
    }
    
    if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue 
        const operator = calculator.dataset.operator
        const secondValue = displayedNum 

        display.textContent = calculate(firstValue, operator, secondValue)
    }
 }
})

const calculate = (n1, operator, n2) => {
    let result = ''

    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
    } 
    return result 
}















const calculator = document.querySelector('.calculator'); 
const inputBtns = calculator.querySelector('.calculator__keys'); 
const screen = calculator.querySelector('.calculator__display');  
const previousKeyType = calculator.dataset.previousKeyType

inputBtns.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target; 
        const action = key.dataset.action; 
        const keyContent = key.textContent; 
        const initialDisplay = screen.textContent; 
        const operator = calculator.querySelector('.functionIn');
        const firstNumber = ""; 
        const secondNumber = ""; 

        if (!action) {
            if (initialDisplay === "0" || previousKeyType === 'operator') {
                screen.textContent = keyContent; 
            } else {
                screen.textContent = initialDisplay + keyContent; 
                let firstNumber = screen.textContent; 
                console.log(firstNumber);
            } 
        }
        if (    action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide') {
                screen.textContent = keyContent; 
                let operator = screen.textContent; 
            }
        if (action === 'equals') {
            screen.textContent = firstNumber + operator + secondNumber; 
        }
    }   
}); 