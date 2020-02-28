<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DrankspelletjesController extends Controller
{
    function showDrankspelletjes() {
        return view("drankspelletjes");
    }
}
