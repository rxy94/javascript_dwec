"use strict"

const storedUsername = "jota" ;
const storedPassword = "dejame" ;

document.getElementById("loginButton").addEventListener('click', function(event) {
    event.preventDefault() ;

    const usernameInput = document.getElementById("username").value ;
    const passwordInput = document.getElementById("password").value ;
    
    const mainContent = document.getElementById("mainContent") ;
    const loginCard = document.getElementById("loginCard") ;
    const cabecera = document.getElementById("head") ;
    const navBar = document.getElementById("navBar") ;
    const footer = document.getElementById("foot") ;
    const message = document.getElementById("message") ;
    const loginForm = document.getElementById("loginForm") ;

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

        setTimeout(function() {

            loginCard.style.display = 'none' ;
            mainContent.style.display = 'flex' ;
            cabecera.style.display = 'flex' ;
            navBar.style.display = 'block' ;
            footer.style.display = 'block' ;
            resetForm() ;

        }, 2000) ;

    }

}) ;

// Limpia los campos de login form
function resetForm() {
    document.getElementById('loginForm').reset() ;
}
