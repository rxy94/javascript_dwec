"use strict"

function eraseCookie(name) {
    document.cookie = encodeURIComponent(name) + "=; Max-Age=0; path=/; SameSite=Strict;" ;
    console.log(document.cookie) ;

}
