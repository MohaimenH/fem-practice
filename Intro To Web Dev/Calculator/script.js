const display = document.querySelector(".screen");

let total = 0;
let a = 0;
let b = 0;
let operator = 'add';

let aReserved = false;

const updateDisplay = (num) => {
    if (display.innerHTML[0] === '0') {
        display.innerHTML = num;    
    }
    else {
        display.innerHTML += num;
    }
}

const clearDisplay = () => {
    display.innerHTML = 0;
}

document.querySelector(".main-flex").addEventListener("click", (event) => {
    let eventContent = event.target.innerHTML;

    if (event.target.tagName.toLowerCase() === "button") {
        
        if (!aReserved) a = parseInt(display.innerHTML);
        else b = parseInt(display.innerHTML);
        
        if (eventContent === '+') {
            operator = '+';
            aReserved = true;
        }

        if (eventContent === '-') {
            operator = '-';
            aReserved = true;
        }

        if (eventContent === '*') {
            operator = "*";
            aReserved = true;
        }

        if (eventContent === "=") {
            clearDisplay();
            console.log(a);
            console.log(b);
            a = a + b;
            b = 0;

            console.log(a);
            updateDisplay(a);
            aReserved = true;
        }

        else if (eventContent === 'C') {
            clearDisplay();
            aReserved = false;
        }

        else {
            updateDisplay(eventContent);
        }
    }

    event.stopPropagation();
});

