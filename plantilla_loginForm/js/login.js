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
        alert("Usuario o contraseña incorrectas") ;
        resetForm() ;
        return ;
    } 

    alert("¡Bienvenido!") ;

    loginCard.style.display = 'none' ;
    mainContent.style.display = 'flex' ;
    cabecera.style.display = 'flex' ;
    navBar.style.display = 'block' ;
    footer.style.display = 'block' ;

}) ;

// Limpia los campos de login form
function resetForm() {
    document.getElementById('loginForm').reset() ;
}
