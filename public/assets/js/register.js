"use strict";

const USERNAME = "input[name='gebruikersnaam']";
const REGISTER = "input[type='submit']";
const FOUTMELDING = "label[for='foutmeldingusername']";
document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector(REGISTER).addEventListener('click', validateForm);
}

function validateUsername(username) {
    return /^[0-9a-zA-Z]{1,15}$/.test(username);
}

function validateForm(e) {

    let username = document.querySelector(USERNAME).value;

    if (validateUsername(username) === false) {
        document.querySelector(FOUTMELDING).innerHTML = "Je gebruikersnaam mag alleen bestaan uit letters en/of cijfers & je gebruikersnaam mag maximum 15 karakters bevatten.";
        return false;
    }

    else {
        return true;
    }
}
