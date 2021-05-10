<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'v1/auth'
], function () {
    Route::post('', [AuthController::class, 'login']);
    Route::post("reset", [AuthController::class, 'reset']);
    Route::post('update', [AuthController::class, "update"]);
    Route::get("", [AuthController::class, "me"]);
});
