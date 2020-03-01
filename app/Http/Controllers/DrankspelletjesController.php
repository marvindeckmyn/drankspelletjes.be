<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DrankspelletjesController extends Controller
{
    function showDrankspelletjes() {
        return view("drankspelletjes");
    }

    function showSpelletje($spelletje) {
        return view("drankspel");
    }

    function search(Request $request) {
        return view("drankspelletjes");
    }
}
