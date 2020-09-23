var usInput = document.getElementsByTagName('button'),
    inputConcat = '',
    num1,
    num2,
    operator,
    operatorTemp = /^[0-9]{0,20}[\+\-\*\/]{1}[0-9]{0,20}$/,
    backspaceTemp = /[\d\*\/\+\-]Backspace/;

function initial(n) {
    inputConcat += usInput[n].textContent;
    if (inputConcat.indexOf('Delete') != (-1)) {
        document.getElementById('result').innerHTML = '0';
    } else if (inputConcat.indexOf('Backspace') != (-1)) {
        inputConcat = document.getElementById('result').innerHTML = inputConcat.replace(backspaceTemp, '');
    } else {
        document.getElementById('result').innerHTML = inputConcat;
    }
}


/*

1.получаем значение от ввода
2.цикл проходится по строке и проверяет ее длину. Если длина меньше 3, то выходим из усл. оператора.
  Если значение >=3, то запускается второй цикл, который проходит по строке и ищет индекс оператора
*/