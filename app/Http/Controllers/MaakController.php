<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MaakController extends Controller
{
    function showMaakJeEigenDrankspelletje() {
        return view("maakjeeigendrankspelletje");
    }
}
