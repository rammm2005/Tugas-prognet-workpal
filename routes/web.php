<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\Freelance\FreelanceAuthController;
use App\Http\Controllers\Auth\User\AuthController;
use App\Http\Controllers\Auth\User\UserProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;

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

// Route::get('/', function () {
//     return ['Laravel' => app()->version()];
// });

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Welcome');


Route::resource('/page/admin', AdminController::class);


Route::prefix('auth')->group(function () {
    // // Auth User Roles
    Route::get('/register/success/{verificationUrlCode}', [AuthController::class, 'showRegisterSuccessful'])->name('auth.register.success');
    Route::put('/verify', [AuthController::class, 'verify'])->name('api.userverify');
    Route::put('/resend-verification', [AuthController::class, 'resendVerification'])->name('verification.resend');
    Route::post('login', [AuthController::class, 'loginCall'])->name('auth.userAuthLogin');
    Route::post('register', [AuthController::class, 'registerCall'])->name('auth.userAuthRegister');

    Route::get('login', [AuthController::class, 'login'])->name('auth.userlogin');
    Route::get('register', [AuthController::class, 'register'])->name(name: 'auth.userRegister');

    // Google, facebook OAuth Routes
    Route::get('{provider}/redirect', [AuthController::class, 'redirectToProvider'])->name('auth.provider.redirect');
    Route::get('{provider}/callback', [AuthController::class, 'handleProviderCallback'])->name('auth.provider.callback');
});


Route::prefix('auth/freelance')->group(function () {
    // // Auth User Roles
    Route::get('/register/success/{verificationUrlCode}', [FreelanceAuthController::class, 'showRegisterSuccessful'])->name('auth.free.register.success');
    Route::put('/verify', [FreelanceAuthController::class, 'verify'])->name('api.free.freeverify');
    Route::put('/resend-verification', [FreelanceAuthController::class, 'resendVerification'])->name('free.verification.resend');
    Route::post('login', [FreelanceAuthController::class, 'loginCall'])->name('auth.freeAuthLogin');
    Route::post('register', [FreelanceAuthController::class, 'registerCall'])->name('auth.freeAuthRegister');

    Route::get('login', [FreelanceAuthController::class, 'login'])->name('auth.freeloginng');
    Route::get('register', [FreelanceAuthController::class, 'register'])->name(name: 'auth.free.register');
});

Route::middleware(['auth'])->prefix('auth/user')->group(function () {
    Route::post('/logout', [UserProfileController::class, 'logout'])
        ->name('auth.user.logout');
});


Route::get('/send-test-email', function () {
    Mail::to('recipient@example.com')->send(new TestMail());
    return 'Test email has been sent!';
});


require __DIR__ . '/auth.php';
