// CALCULATOR 

const display = document.getElementsByClassName("display");
console.log(display)

function appendToDisplay(input) {
    display[0].value += input;
}

function clearDisplay() {
    display[0].value = "";
}

function calculate() {
    try {
        display[0].value = eval(display[0].value);
    } catch (error) {
        display[0].value = "Error!";
    }
    
}