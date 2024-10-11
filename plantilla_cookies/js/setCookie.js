"use strict"

function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    let expires = "; expires=" + date.toUTCString();
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value || "") + expires + "; path=/; SameSite=Strict;" ;
    console.log(document.cookie) ;
} 