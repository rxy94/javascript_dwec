document.addEventListener("DOMContentLoaded", () => {

    let display = document.querySelector("#screen");
    let buttons = document.querySelectorAll("button");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const btnId = btn.id;

            if(btnId === "=") {
                try {
                    const resultado = eval(display.value);
                    if(resultado === Infinity) {
                        display.value = "Error: División por cero";

                    } else {
                        display.value = resultado;

                    }

                } catch (error) {
                    display.value = "Error: Entrada inválida";

                }

            } else if (btnId === "ac") {
                display.value = "";

            } else if(btnId === "del") {
                display.value = display.value.slice(0, -1);

            } else {
                const ultimo = display.value.slice(-1);
                const operadores = ["+", "-", "*", "/"];

                if (operadores.includes(ultimo) && operadores.includes(btnId)) {
                    display.value = display.value.slice(0, -1) + btnId;

                } else {
                    display.value += btnId;

                }

            }

        });

    });

});

