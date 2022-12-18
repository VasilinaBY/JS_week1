let YourName = prompt('Как Вас зовут?', '');
alert(`Привет, ${YourName}!`);

function summ(x, y) {
    let firstNum = prompt('Введите первое значение', '');
    let secondNum = prompt('Введите второе значение', '');
    alert( `${firstNum} плюс ${secondNum} равно ${+firstNum + +secondNum}` )
}

function subtract(x, y) {
    let firstNum = prompt('Введите первое значение?', '');
    let secondNum = prompt('Введите второе значение', '');
    alert( `${firstNum} минус ${secondNum} равно ${+firstNum - +secondNum}` )
}

function mult(x, y) {
    let firstNum = prompt('Введите первое значение?', '');
    let secondNumber = prompt('Введите второе значение', '');
    alert( `${firstNum} умножить на ${secondNum} равно ${+firstNum * +secondNum}` )
}

function division(x, y) {
    let firstNum = prompt('Введите первое значение?', '');
    let secondNum = prompt('Введите второе значение', '');
    alert( `${firstNum} разделить на ${secondNum} равно ${+firstNum / +secondNum}` )
}