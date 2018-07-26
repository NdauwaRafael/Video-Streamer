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

Route::get('/', function () {
    return view('welcome');
});

Route::group(['namespace' => 'VideoStreamer'], function () {
    Route::get('/play-video{id}', 'VideoController@getVideo');
});
Route::get('/user/verify/{token}', 'Auth\RegisterController@verifyUser');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('{vue_capture?}', function () {
    if (!\Illuminate\Support\Facades\Auth::user()) {
        return redirect('/login');
    }
    return view('layouts.app');
})->where('vue_capture', '[\/\w\.-]*');



