var usInput = document.getElementsByTagName('button');
var inputConcat = '';
var num1, num2, operator, operatorArr = ['+', '-', '*', '/'];

function initial(n) {
    inputConcat += usInput[n].textContent;
    document.getElementById('result').innerHTML = inputConcat;
    for (var i = 0; i < operatorArr.length; i++) {
        if (inputConcat.indexOf(operatorArr[i]) + 1) {
            num1 = inputConcat.substring(0, i);
            num2 = inputConcat.substring(i);
            operator = operatorArr[i];
        }
    }
    document.getElementById('result').innerHTML = num1 + " " + operator + " " + num2;
}
/*
document.getElementById('result');
*/