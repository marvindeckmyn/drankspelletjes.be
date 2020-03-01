<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/", "DrankspelletjesController@showDrankspelletjes");
Route::get("/drankspelletjes/{spelletje}", "DrankspelletjesController@showSpelletje");

Route::get("/contact", "ContactController@showContact");

Route::post("/", "DrankspelletjesController@search");