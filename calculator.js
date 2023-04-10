let firstNum = null, secondNum = null, operator = null;
const result = document.getElementById("result");
const total = document.getElementById("total");
const clear = document.getElementById("clear");
const oper = document.getElementById("oper");
const numbers = document.querySelectorAll(".number");
const btnOperators = document.querySelectorAll(".operator");

clear.onclick = () => {
    firstNum = null;
    secondNum = null; 
    operator = null;
    result.value = 0;
    oper.innerHTML = operator;
};

function operate(x, y, op) {
    if (x && y) {
        switch (op) {
            case "/":
                return result.value = x / y;
            case "*":
                return result.value = x * y;
            case "-":
                return result.value = x - y;
            case "+":
                return result.value = Number(x) + Number(y);
            default:
                break;
        }
    }
    
}

const appendNumber = (num, clickedNum) => (num ? num + clickedNum : clickedNum);

numbers.forEach(number => {
    number.onclick = function () {
            if (!operator) {
                firstNum = appendNumber(firstNum, number.textContent);
                result.value = firstNum;
            }else {
                secondNum = appendNumber(secondNum, number.textContent);
                result.value = secondNum;
            }
    }
});

btnOperators.forEach(btnOperator => {
    btnOperator.onclick = function () {
        if (operator) {
            firstNum = operate(firstNum, secondNum, operator);
            secondNum = null;
        } 
        btnOperators.forEach(btnOperator => btnOperator.style.backgroundColor = "rgb(246, 139, 0)");
        this.style.backgroundColor = "rgb(249 176 81)";
        operator = btnOperator.textContent;
        oper.innerHTML = operator;
    }
});

total.onclick = () => {
    firstNum = operate(firstNum, secondNum, operator);
    secondNum = null;
    operator = null;
    oper.innerHTML = operator;
    btnOperators.forEach(btnOperator => btnOperator.style.backgroundColor = "rgb(246, 139, 0)");
};