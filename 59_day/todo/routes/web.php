<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;

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



Route::get('/', [TaskController::class, 'show'])->name('index');
Route::post('/', [TaskController::class, 'add'])->name('addTask');


Route::get('/login', [UserController::class, 'showUser'])->name('login');
Route::post('/login', [UserController::class, 'getUser'])->name('getUser');

Route::get('/register', [UserController::class, 'showRegistr'])->name('register');
Route::post('/register', [UserController::class, 'addUser'])->name('addUser');

Route::get('/forgotpassword', [UserController::class, 'showForgotpassword'])->name('forgotpassword');
Route::post('/forgotpassword', [UserController::class, 'addEmail'])->name('addEmail');

Route::get('/logout', [UserController::class, 'logoutUser'])->name('logout');
