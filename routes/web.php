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


Route::post('register-customer', [CustomerRegisterController::class, 'store'])->name('customer_register')->middleware('guest');
Route::post('login-customer', [CustomerLoginController::class, 'login'])->name('customer_login')->middleware('guest');
Route::post('logout-customer', [CustomerLoginController::class, 'logout'])->name('customer_logout')->middleware('auth');

Route::redirect('admin', 'dashboard');
Route::get('login', [LoginController::class, 'index'])->name('login')->middleware('guest');
Route::post('login', [LoginController::class, 'store'])->name('login')->middleware('guest');

Route::group(['middleware' => ['auth', 'check_role:admin']], function () {
    Route::get('dashboard', [HomeController::class, 'index'])->name('dashboard');
    Route::resource('users', UserController::class)->except(['create', 'edit', 'show', 'destroy']);
    Route::resource('products', ProductController::class);

    Route::post('logout', [LoginController::class, 'destroy'])->name('logout');
});
