<?php

use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\CustomerLoginController;
use App\Http\Controllers\CustomerRegisterController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', LandingController::class)->name('landing');


Route::post('register-customer', [CustomerRegisterController::class, 'store'])->name('customer_register');
Route::post('login-customer', [CustomerLoginController::class, 'login'])->name('customer_login');
Route::post('logout-customer', [CustomerLoginController::class, 'logout'])->name('customer_logout');


Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {

    Route::get('login', [LoginController::class, 'login'])->name('login');
    Route::post('login', [LoginController::class, 'login'])->name('login');

    Route::get('home', [HomeController::class, 'index'])->name('home');

    Route::resource('users', UserController::class);
    Route::resource('products', ProductController::class);
});
