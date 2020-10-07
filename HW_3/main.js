'use strict';

const inputNumber1 = prompt('Запрос (1/3):\nВведите первое число для операции', '');
const inputOperator = prompt('Запрос (2/3):\nВведите оператор — (+, -, *, /, **)', '');
const inputNumber2 = prompt('Запрос (3/3):\nВведите второе число для операции', '');


alert(returnMathResult(inputNumber1, inputNumber2, inputOperator));

function returnMathResult(num1, num2, operator) {
    let result = 'Ответ:\n'+ num1 + operator + num2 + '= ';

    if (num1 !== '' && !!+num1 && num2 !== '' && !!+num2) {
        num1 = +num1;
        num2 = +num2;

        if (operator === '+') result += num1 + num2;
        else if (operator === '-') result += num1 - num2;
        else if (operator === '*') result += num1 * num2;
        else if (operator === '/') result += num1 / num2;
        else if (operator === '**') result += num1 ** num2;
        else result = '!Ошибка\nОператор не распознан';

    } else result = '!Ошибка\nЧисла не распознаны';

    return result;
}
