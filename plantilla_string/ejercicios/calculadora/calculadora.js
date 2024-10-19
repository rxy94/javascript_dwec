let screen = document.querySelector("#screen");
/* let btn = document.querySelectorAll(".btn"); */
let buttons = Array.from(document.querySelectorAll(".btn"));
let operator = "";
let operand1 = 0;
let operand2 = null;
let result = 0; 

/* for (item of btn) {
    
    item.addEventListener("click", (e) => {

        btnText = e.target.innerText;
        screen.value += btnText;

    });

    let square = document.getElementById("square");
    square.addEventListener("click", () => {

        let value = parseFloat(screen.value);
        if (!isNaN(value)) {
            screen.value = Math.sqrt(screen.value);
        } else {
            screen.value = "Error";
        }
        
    });

    function backspace() {
        screen.value = screen.value.substr(0, screen.value.length - 1); 
    }

    function ce() {
        screen.value = "";
        operand1 = 0;
        operand2 = null;
        operator = '';
    }

    function negative() {
        screen.value = parseFloat(screen.value) * - 1;
    }

} */

buttons.map(button => {
    button.addEventListener("click", (event) => {
        let value = event.target.innerText;

        if(!isNaN(value) || value ===".") {
            screen.value += value;

        } else if(value === "=") {
            operand2 = parseFloat(screen.value);

            switch (operator) {
                case "+":
                    result = operand1 + operand2;
                    break;
                case "-":
                    result = operand1 - operand2;
                    break;
                case "*":
                    result = operand1 * operand2;
                    break;
                case "/":
                    result = operand1 / operand2;
                    break;
                default:
                    result = "Error";
                    break;
            }

            screen.value = result;
            operand1 = result;
            operand2 = null;
            operator = "";

        }

        switch (value) {
            case "C":
                screen.value = "";
                break;
            case "CE":
                screen.value = "";
                operand1 = 0;
                operand2 = null;
                operator = '';
                break;
            case "<=":
                screen.value = screen.value.substr(0, screen.value.length - 1);
                break;
            case "M":
                
                break;
            case "+/-":
                screen.value = parseFloat(screen.value) * - 1;
                break;
            case "1/x":
                screen.value = 1 / parseFloat(screen.value);
                break;
            case "√":
                screen.value = Math.sqrt(parseFloat(screen.value));
                break;
            case "%":
                screen.value = parseFloat(screen.value) / 100;
                break;
            default:
                break;
        }

        /* if(!isNaN(value) || value ===".") {
            screen.value += value;

        } else if(value === "C") {
            screen.value = "";

        } else if(value === "CE") {
            screen.value = "";
            operand1 = 0 ;
            operand2 = null;
            operator = ""; 

        } else if(value === "=") {
            operand2 = parseFloat(screen.value);

            switch (operator) {
                case "+":
                    result = operand1 + operand2;
                    break;
                case "-":
                    result = operand1 - operand2;
                    break;
                case "*":
                    result = operand1 * operand2;
                    break;
                case "/":
                    result = operand1 / operand2;
                    break;
                default:
                    result = "Error";
                    break;
            }

            screen.value = result;
            operand1 = result;
            operand2 = null;
            operator = "";

        } else if(value === "+/-") {
            screen.value = parseFloat(screen.value) * - 1;

        } else if(value === "1/x") {
            screen.value = 1 / parseFloat(screen.value);

        } else if(value === "√") {
            screen.value = Math.sqrt(parseFloat(screen.value));

        } else if(value === "%") {
            screen.value = parseFloat(screen.value) / 100;

        } else {
            operand1 = parseFloat(screen.value);
            operator = value;
            /* screen.value = ""; 
            screen.value += value;

        }*/

    });
});  