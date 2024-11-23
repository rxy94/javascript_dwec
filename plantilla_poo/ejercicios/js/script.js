"use strict"

// Control de sesión
let sessionActive = true;

document.getElementById("logout").addEventListener("click", async function() {
    // Verificamos que la sesión esté activa antes de proceder
    if (sessionActive) {
        // Obtenemos el nombre de usuario almacenado
        const username = await getIndexedDB();
        if (username) {
            console.log(`Eliminando: ${username}`);
            await deleteIndexedDB();
        }

        sessionActive = false;

        // Redirigimos al login.html después de cerrar la sesión
        window.location.replace("../../login.html");

    }
});

document.getElementById("logout").addEventListener("click", async function() {
    // Verificamos que la sesión esté activa antes de proceder
    if (sessionActive) {
        // Obtenemos el nombre de usuario almacenado
        const username = await getIndexedDB();
        if (username) {
            console.log(`Eliminando: ${username}`);
            await deleteIndexedDB();
        }

        sessionActive = false;

        //Para redirigir al login desde los ejercicios del dom
        window.location.replace("../../../login.html");

    }
});

// Evitar que el usuario vuelva a la página anterior después de hacer el logout
if (window.history.state) {
    window.history.pushState(null, null, window.location.href);
} else {
    window.history.replaceState(null, null, window.location.href);
}
window.onpopstate = function() {
    window.history.pushState(null, null, window.location.href);
};





