"use strict"

document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault() ;

    let numero = parseInt(document.getElementById("numero").value) ;
    let operacion = parseInt(document.getElementById("operacion").value) ;
    let resultado ;

    switch (operacion) {
        case 1:
            resultado = (numero >= 0)? numero.toString(2): "error" ;
            break;

        case 2:
            resultado = (numero >= 0)? numero.toString(8): "error" ;
            break;

        case 3:
            resultado = (numero >= 0)? numero.toString(16): "error" ;
            break;
    
        default:
            resultado = "" ;
    }

    if(resultado === "error") {
        document.getElementById("resultado").innerHTML = "Error en la introducción de datos" ;

    } else if(resultado === "") {
        document.getElementById("resultado").innerHTML = "Seleccione una de las opciones" ;
        
    } else { 
        document.getElementById("resultado").innerHTML = "El <strong>resultado</strong> es: <strong>" + resultado + "</strong>" ;

    }

}) ;