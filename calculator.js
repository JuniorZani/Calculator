var textInput = document.getElementById('res');
var firstNumber='', operator='+', secondNumber='';
var numberState = false;

function submitNumbers(numberState, number){
    if(!numberState){
        if(firstNumber.length == 0)
            textInput.value = '';
        firstNumber += number;
    } else {
        if(secondNumber.length == 0)
            textInput.value = '';
        secondNumber += number;
    }
    textInput.value += number;
}

function opSelect(id){
    operator = id;
    numberState = true;
    textInput.value = Number(firstNumber);
}

function calculate(){
    if(textInput.value.length == 0)
        textInput.value = 'Operação inválida'
    else{
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        switch(operator){
            case '+':
                result = firstNumber + secondNumber; 
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case 'x':
                result = firstNumber * secondNumber;
                break;
            default:
                result = firstNumber / secondNumber;
                break;
        }
        textInput.value = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
    }
    numberState = false;
    firstNumber = secondNumber = '';
}

function toggleOps(state){
    document.getElementById('+').disabled = state;
    document.getElementById('-').disabled = state;
    document.getElementById('*').disabled = state;
    document.getElementById('/').disabled = state;
}

function clearEcho(){
    textInput.value = '';
    firstNumber = secondNumber = '';
}