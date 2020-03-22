"use strict";

const LOGIN = "#login";
document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector(LOGIN).addEventListener('click', login);
}

function login() {
    window.location.href = "login";
}
