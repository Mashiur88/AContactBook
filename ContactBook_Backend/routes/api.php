<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/contactlist',[ContactController::class,'listbycontact']);
Route::get('/contactlist/bycountry/{value}',[ContactController::class,'listbycountry']);
Route::get('/contactlist/bystate/{value}',[ContactController::class,'listbystate']);
Route::get('/contactlist/bycity/{value}',[ContactController::class,'listbycity']);


Route::post('/createcontact',[ContactController::class,'createProfile']);

Route::get('/updatecontact/{id}',[ContactController::class,'updatePage']);
Route::post('/updatecontact/{id}',[ContactController::class,'updateProfile']);

Route::get('/details/{id}',[ContactController::class,'contactDetails']);

Route::get('/deletecontact/{id}',[ContactController::class,'deleteContact']);



