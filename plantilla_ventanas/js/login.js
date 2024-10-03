"use strict"

const storedUsername = "jota" ;
const storedPassword = "dejame" ;

function login() {

    const mainContent = document.getElementById("mainContent") ;
    let tryAgain = true ; //variable que controlará el bucle do...while()

    do {

        const username = prompt("Usuario: ", storedUsername) ;
        const password = prompt("Contraseña: ", storedPassword) ;

        if(username.length < 3 && username !== "") {
            alert("El nombre de usuario debe tener al menos 3 caracteres. ") ;
            const introduceUsernameAgain = confirm("¿Quiere volver a introducir el usuario?") ;
            
            if(!introduceUsernameAgain) {
                tryAgain = false ;
            }

        } else { 

            if((username === null || username === "") && (password === null || password === "")) {
                alert("Debe introducir un usuario y contraseña. ") ;
                tryAgain = true ;

            } else {
                
                if(username === storedUsername && password === storedPassword) {
                    alert("¡Bienvenido!") ;
                    mainContent.style.display = "block" ;
                    tryAgain = false ;

                } else {
                    alert("Usuario o contraseña incorrectas. ") ;
                    tryAgain = confirm("¿Desea intentarlo de nuevo?") ;

                    if(!tryAgain) {
                        mainContent.style.display = "none" ;
                    } 
                }

            }

        }

    } while(tryAgain);

}

window.onload = function() {
    login() ;
}