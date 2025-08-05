const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

function addFunc(number1, number2) {
  return  number1 + number2;
}

add.addEventListener('click', () => {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = addFunc(number1, number2);
    document.getElementById('calculation-result').textContent = result;

}); 

function subtractFunc(number1, number2) {
    return number1 - number2;
}

subtract.addEventListener('click', () => {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = subtractFunc(number1, number2);
    document.getElementById('calculation-result').textContent = result;

});

function multiplyFunc(number1, number2) {
    return number1 * number2;
}

multiply.addEventListener('click', () => {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = multiplyFunc(number1, number2);
    document.getElementById('calculation-result').textContent = result;

});

function divideFunc(number1, number2) {
    return number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
}

divide.addEventListener('click', () => {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = divideFunc(number1, number2);
    document.getElementById('calculation-result').textContent = result;

});