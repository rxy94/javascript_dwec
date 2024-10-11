"use strict"

function getCookie(name) {
    const user = name + "=" ;
    const cookies = document.cookie.split("; ") ;
    console.log(`Cookies almacenadas: ${cookies}`) ;
    let resultado = null;
    
    for(let cookie of cookies) {
        console.log(`Clave: ${cookie}`) ;
        if(cookie.indexOf(user) === 0) {
            console.log(`Valor: ${cookie.substring(user.length)}`) ;
            resultado = decodeURIComponent(cookie.substring(user.length)) ;
        }
    }

    return resultado ;
}
