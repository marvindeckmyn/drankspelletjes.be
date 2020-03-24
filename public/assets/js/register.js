"use strict";

const USERNAME = "input[name='gebruikersnaam']";
const REGISTER = "input[type='submit']";
const FOUTMELDING = "label[for='foutmeldingusername']";
const WACHTWOORD = "input[name='wachtwoord']";
const WACHTWOORDBEVESTIGING = "input[name='wachtwoordbevestigen']";
document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector(REGISTER).addEventListener('click', validateForm);
}

function validateUsername(username) {
    return /^[0-9a-zA-Z]{1,15}$/.test(username);
}

function validatePassword(password, confirmedpassword) {
    return password === confirmedpassword;
}

function validateForm(e) {

    let username = document.querySelector(USERNAME).value;
    let password = document.querySelector(WACHTWOORD).value;
    let confirmedpassword = document.querySelector(WACHTWOORDBEVESTIGING).value;

    if (validateUsername(username) === false) {
        document.querySelector(FOUTMELDING).innerHTML = "Je gebruikersnaam mag alleen bestaan uit letters en/of cijfers & je gebruikersnaam mag maximum 15 karakters bevatten.";
        return false;
    }

    else if (validatePassword(password, confirmedpassword) === false) {
        document.querySelector(FOUTMELDING).innerHTML = "Je wachtwoord komt niet overeen.";
        return false;
    }

    else {
        document.querySelector(FOUTMELDING).innerHTML = "";
        return true;
    }
}
