var textInput = document.getElementById('res');
var firstNumber='', operator='+', secondNumber='';
var numberState = false;

function submitNumbers(numberState, number){
    if(!numberState){
        if(firstNumber.length == 0)
            textInput.value = '';
        firstNumber += number;
    } else {
        if(secondNumber.length == 0){
            textInput.value = '';
        }
        secondNumber += number;
    }
    textInput.value += number;
}

function opSelect(id){
    if(id != operator)
        setColor(operator, '#00072D', 'white');
    operator = id;
    setColor(id, '#ffee00', '#00072D');
    
    numberState = true;
    textInput.value = Number(firstNumber);
}

function setColor(id, bgColor, fontColor){
    document.getElementById(id).style.backgroundColor = bgColor;
    document.getElementById(id).style.color = fontColor;
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
                if(secondNumber == 0){
                    textInput.value = 'ERROR';
                    numberState = false;
                    firstNumber = secondNumber = '';
                    setColor(operator, '#00072D', 'white');
                    operator = '+';
                    return;
                }
                result = firstNumber / secondNumber;
                break;
        }
        textInput.value = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
    }
    numberState = false;
    firstNumber = secondNumber = '';
    setColor(operator, '#00072D', 'white');
}

function clearEcho(){
    textInput.value = '';
    firstNumber = secondNumber = '';
    setColor(operator, '#00072D', 'white');
}