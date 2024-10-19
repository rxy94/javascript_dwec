"use strict"

const validUsername = /[a-zA-Z]{3,10}/;
const validPassword = /[0-9a-zA-Z]{3,20}/;

document.getElementById("loginButton").addEventListener('click', function(event) {
    event.preventDefault() ;

    const usernameInput = document.getElementById("username").value ;
    const passwordInput = document.getElementById("password").value ;
    const message = document.getElementById("message") ;

    if(!usernameInput || !passwordInput) {
        showMessage("Por favor, complete todos los campos", "red");
        resetForm() ;
        return ;

    }

    if(usernameInput.length < 3) {
        showMessage("El nombre de usuario debe tener al menos 3 caracteres.", "red") ;
        resetForm() ;
        return ;

    }

    if(!validUsername.test(usernameInput) || !validPassword.test(passwordInput)) {
        message.style.color = "red" ;
        message.style.display = 'block' ;
        message.innerHTML = "Usuario o contraseña incorrectas" ;
        resetForm() ;
        return ;

    } else {
        showMessage("¡Bienvenido!", "green");

        //Establecemos el par clave=valor
        setLocalStorage(usernameInput, passwordInput);
        console.log(`Almacenado: ${usernameInput}, ${passwordInput}`);

        //Eliminamos la clave de control de sesión "loggedOut"
        localStorage.removeItem("loggedOut");

        setTimeout(function() {
            window.location.href = "./index.html" ;
        }, 2000) ;

    }

}) ;

// Muestra mensajes
function showMessage(msg, color) {
    const message = document.getElementById("message");
    message.style.color = color;
    message.style.display = 'block';
    message.innerHTML = msg;
}

// Limpia los campos de login form
function resetForm() {
    document.getElementById('loginForm').reset() ;
}

