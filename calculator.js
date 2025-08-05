const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

function add(number1, number2) {
  return  number1 + number2;
}

add.addEventListener('click', () => {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;

}); 

function subtract(number1, number2) {
    return number1 - number2;
}

subtract.addEventListener('click', () => {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;

});

function multiply(number1, number2) {
    return number1 * number2;
}

multiply.addEventListener('click', () => {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;

});

function divide(number1, number2) {
    return number1 / number2;
}

divide.addEventListener('click', () => {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;

});