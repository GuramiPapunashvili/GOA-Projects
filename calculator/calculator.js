function updateDisplay(value) {
    const display = document.getElementById('calculatorDisplay');
    display.innerHTML += value;
}

function One() {
    updateDisplay('1');
}

function Two() {
    updateDisplay('2');
}

function Three() {
    updateDisplay('3');
}

function Four() {
    updateDisplay('4');
}

function Five() {
    updateDisplay('5');
}

function Six() {
    updateDisplay('6');
}

function Seven() {
    updateDisplay('7');
}

function Eight() {
    updateDisplay('8');
}

function Nine() {
    updateDisplay('9');
}

function Zero() {
    updateDisplay('0');
}

function Add() {
    updateDisplay('+');
}

function Minus() {
    updateDisplay('-');
}

function Multiply() {
    updateDisplay('*');
}

function Divide() {
    updateDisplay('/');
}

function Clear() {
    const display = document.getElementById('calculatorDisplay');
    display.innerHTML = '';
}

function Result() {
    const display = document.getElementById('calculatorDisplay');
    try {
        const result = eval(display.innerHTML);
        display.innerHTML = result;
    } catch (e) {
        display.innerHTML = 'Error';
    }
}