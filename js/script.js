var usInput = document.getElementsByTagName('button');
var inputConcat = '';
var num1, num2, operator, operatorTemp = /^[0-9]{0,20}[\+\-\*\/]{1}[0-9]{0,20}$/;

function initial(n) {
    inputConcat += usInput[n].textContent;
    if (inputConcat.length < 3) {
        document.getElementById('result').innerHTML = inputConcat;
    } else {
        valiNum(inputConcat);
    }
}

function valiNum(inNum) {
    this.inNum = inNum;
    if (inNum == operatorTemp) {

    }
}
/*
document.getElementById('result');
1.получаем значение от ввода
2.цикл проходится по строке и проверяет ее длину. Если длина меньше 3, то выходим из усл. оператора.
  Если значение >=3, то запускается второй цикл, который проходит по строке и ищет индекс оператора
*/