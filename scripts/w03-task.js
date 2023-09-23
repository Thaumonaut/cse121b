/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let add1 = Number(document.querySelector("#add1").value)
    let add2 = Number(document.querySelector("#add2").value)
    let sum = add(add1, add2);

    document.querySelector("#sum").value = sum;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers)

/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
    return number1 - number2;
}

let subtractNumbers = function () {
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.getElementById("subtract2").value);

    document.getElementById("difference").value = subtract(subtract1, subtract2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumber = () => {
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);

    document.getElementById("product").value = multiply(factor1, factor2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumber)

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

function divideNumber () {
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);

    document.getElementById("quotient").value = divide(dividend, divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumber);

/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear()

document.getElementById("year").innerText = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

document.querySelector("#array").innerHTML = numbers;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbers.filter((number) => number % 2 == 1)
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbers.filter((number) => number % 2 == 0)
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbers.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbers.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbers.map(number => number * 2).reduce((sum, number) => sum + number);
