var usInput = document.getElementsByTagName('button'),
    inputConcat = '',
    num1,
    num2,
    operator,
    operatorTemp = /^[0-9]{0,20}[\+\-\*\/]{1}[0-9]{0,20}$/,
    backspaceTemp = /[\d\*\/\+\-]Backspace/;

function main(n) {
    valid(init(n));
    /*if (inputConcat.indexOf('Delete') != (-1)) {
        cleaningMethods('Delete');
    } else if (inputConcat.indexOf('Backspace') != (-1)) {
        cleaningMethods('Backspace');
    } else {
        document.getElementById('result').innerHTML = inputConcat;
    }*/
}

function init(inp) {
    return inputConcat += usInput[inp].textContent;
}

function valid(validVar) {
    document.getElementById('test').innerHTML = validVar;
}

function cleaningMethods(delOrBac) {
    switch (delOrBac) {
        case 'Delete':
            inputConcat = '';
            document.getElementById('result').innerHTML = '0';
            break;
        case 'Backspace':
            document.getElementById('result').innerHTML = inputConcat.replace(backspaceTemp, 'test');
            break;

        default:
            document.getElementById('result').innerHTML = 'err';
            break;
    }
}