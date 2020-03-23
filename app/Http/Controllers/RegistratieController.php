<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegistratieController extends Controller
{
    function showRegistratie() {
        return view("registratie");
    }
}
