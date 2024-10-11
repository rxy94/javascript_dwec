"use strict"

const storedUsername = "jota" ;
const storedPassword = "dejame" ;

if(getCookie("loggedIn") === "true") {
    window.location.href = "./index.html" ;

}

document.getElementById("loginButton").addEventListener('click', function(event) {
    event.preventDefault() ;

    const usernameInput = document.getElementById("username").value ;
    const passwordInput = document.getElementById("password").value ;
    
    const message = document.getElementById("message") ;

    if(!usernameInput || !passwordInput) {
        alert("Por favor, complete todos los campos") ;
        resetForm() ;
        return ;

    }

    if(usernameInput.length < 3 && usernameInput !== "") {
        alert("El nombre de usuario debe tener al menos 3 caracteres. ") ;
        resetForm() ;
        return ;

    }

    if(usernameInput !== storedUsername || passwordInput !== storedPassword) {
        message.style.color = "red" ;
        message.style.display = 'block' ;
        message.innerHTML = "Usuario o contraseña incorrectas" ;
        resetForm() ;
        return ;

    } else {
        message.style.color = "green" ;
        message.style.display = 'block' ;
        message.innerHTML = "¡Bienvenido!" ;

        setCookie("loggedIn", "true", 1) ;

        setTimeout(function() {
            window.location.href = "./index.html" ;
            resetForm() ;
        }, 2000) ;

    }

}) ;

// Limpia los campos de login form
function resetForm() {
    document.getElementById('loginForm').reset() ;
}

