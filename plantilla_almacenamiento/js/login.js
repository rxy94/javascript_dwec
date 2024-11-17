"use strict"

const validUsername = /[a-zA-Z]{3,10}/;
const validPassword = /[0-9a-zA-Z]{3,20}/;

//Abrimos la base de datos
openDB()
    .then(() => {
        console.log("Base de datos abierta");

    })
    .catch((error) => {
        console.log("Error al abrir la base de datos: ", error);
    })

document.getElementById("loginButton").addEventListener("click", async function(event) {
    event.preventDefault() ;

    const usernameInput = document.getElementById("username").value ;
    const passwordInput = document.getElementById("password").value ;

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
        showMessage("Usuario o contraseña incorrectas", "red");
        resetForm() ;
        return ;

    } 
        
    showMessage("¡Bienvenido!", "green");

    //Establecemos el par clave=valor
    await setIndexedDB(usernameInput, passwordInput);
    console.log(`Almacenado: ${usernameInput}, ${passwordInput}`);

    setTimeout(() => {
        window.location.href = "./index.html" ;
    }, 2000) ;

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

