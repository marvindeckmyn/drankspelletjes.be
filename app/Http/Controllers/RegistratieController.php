<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegistratieController extends Controller
{
    function showRegistratie() {
        return view("registratie");
    }

    function registerUser(Request $request) {
        $name = $request -> input("naam");
        $email = $request -> input("email");
        $username = $request -> input("gebruikersnaam");
        $password = $request -> input("wachtwoord");

        $user = new \App\User();

        $user -> name = $name;
        $user -> email = $email;
        $user -> username = $username;
        $user -> password = $password;

        $user -> save();

        return view("login");
    }
}
