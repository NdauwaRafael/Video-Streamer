<?php

use Illuminate\Http\Request;

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

Route::group(['namespace' => 'VideoStreamer'], function () {
    Route::get('/users', 'UserController@index');
    Route::resource('/role', 'RoleController');
    Route::resource('/permission', 'PermissionController');
    Route::post('/role-permission/{id}', 'RolePermissionController@store');
    Route::post('/comment/{id?}', 'CommentController@store');
    Route::get('/comment/{id?}', 'CommentController@show');
    Route::resource('/video', 'VideoController');
});
