const calculator = document.querySelector('.calculator')
const calcBtn = calculator.querySelector('.calculator__keys')
const calcDisplay = document.querySelector('.calculator__display')

calcBtn.addEventListener('click', e => {
 if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const calcDisplayedNum = calcDisplay.textContent 
    const previousKeyType = calculator.dataset.previousKeyType

    if (!action) {
        if (calcDisplayedNum === '0' || previousKeyType === 'operator') {
            calcDisplay.textContent = keyContent 
        } else {
            calcDisplay.textContent = calcDisplayedNum + keyContent 
        } 
        
    }

    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' 
    ) {
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.firstValue = calcDisplayedNum
        calculator.dataset.operator = action 
    }
    if (action === 'decimal') {
        calcDisplay.textContent = calcDisplayedNum + '.'
    }
    
    if (action === 'clear') {
        firstValue = 0; 
        secondValue = 0;
        calcDisplay.textContent = 0; 
    }
    
    if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue 
        const operator = calculator.dataset.operator
        const secondValue = calcDisplayedNum 

        calcDisplay.textContent = calculate(firstValue, operator, secondValue)
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