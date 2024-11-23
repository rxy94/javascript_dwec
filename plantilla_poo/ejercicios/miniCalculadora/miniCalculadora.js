"use strict"

document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault() ;

    let n1 = parseFloat(document.getElementById("numero1").value) ;
    let n2 = parseFloat(document.getElementById("numero2").value) ; 
    let operacion = parseFloat(document.getElementById("operacion").value) ;
    let resultado ;

    switch (operacion) {
        case 1:
            resultado = n1 + n2 ;
            break ;
        case 2:
            resultado = n1 - n2 ;
            break ;
        case 3:
            resultado = n1 * n2 ;
            break ;
        case 4:
            resultado = n1 / n2 ;
            break ;
        default:
            resultado = "" ;
    }

    if(isNaN(resultado)) {
        document.getElementById("resultado").innerHTML = "Error en la introducción de datos" ;

    }  else if(resultado === "") {
        document.getElementById("resultado").innerHTML = "Seleccione una de las opciones" ;
        
    } else { 
        document.getElementById("resultado").innerHTML = "El <strong>resultado</strong> es: <strong>" + resultado + "</strong>" ;

    }

}) ;

document.getElementById("entero").addEventListener("click", function(event) {
    event.preventDefault() ;

    let resultado = parseFloat(document.getElementById("resultado").textContent.split(": ")[1]) ;

    if(!isNaN(resultado)) {
        document.getElementById("parteEntera").innerHTML = Math.trunc(resultado) ;
    
    } else {
        document.getElementById("parteEntera").innerHTML = "NaN" ;

    }

}) ;

document.getElementById("decimal").addEventListener("click", function(event) {
    event.preventDefault() ;

    let resultado = parseFloat(document.getElementById("resultado").textContent.split(": ")[1]) ;

    if(!isNaN(resultado)) {
        let parteDecimal = resultado - Math.trunc(resultado) ;
        document.getElementById("parteDecimal").innerHTML = parteDecimal ;
    
    } else {
        document.getElementById("parteDecimal").innerHTML = "NaN" ;

    }

}) ;

document.getElementById("factorial").addEventListener("click", function(event) {
    event.preventDefault() ;

    let n1 = parseFloat(document.getElementById("numero1").value) ;
    let factorial = 1;

    if(n1 > 1) {
        for(let i = 1; i <= n1; i++) {
            factorial *= i ;
        }

    } else if(n1 === 0 || n1 === 1) {
        factorial = 1 ;
    
    } else {
        factorial = "valor inválido";
    }

    return document.getElementById("resultadoFactorial").innerHTML = factorial ;

}) ;



