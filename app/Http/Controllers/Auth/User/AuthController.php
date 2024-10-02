<?php

namespace App\Http\Controllers\Auth\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\User\LoginRequest;
use App\Http\Requests\Auth\User\RegisterRequest;
use App\Http\Requests\Auth\User\VerifyRequest;
use App\Mail\VerificationMail;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Session;
class AuthController extends Controller
{
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function login()
    {
        return Inertia::render('Auth/User/Login', [

        ]);
    }

    public function register()
    {
        return Inertia::render('Auth/User/Register', [

        ]);
    }


    public function registerCall(RegisterRequest $request)
    {
        try {
            $existingUser = User::where('email', $request->email)->first();

            if ($existingUser) {
                Session::flash('errorFE', 'User already exists with this email.');
                return redirect()->back();
            }

            $verificationUrlCode = Str::random(120);
            $verificationCode = str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'verification_code' => $verificationCode,
                'verification_url_code' => $verificationUrlCode,
            ]);

            $user->syncRoles('user');
            Mail::to($user->email)->send(new VerificationMail($verificationCode, $user->email, $user->name, $verificationUrlCode));
            Session::flash('notif', 'Register Successful, Now Check your Email and verify your Account.');
            return back();
        } catch (\Exception $e) {
            // dd('Registration errorFE: ' . $e->getMessage());
            Session::flash('errorFE', 'Registration failed. Please try again later.');
            return back();
        }
    }



    public function showRegisterSuccessful($verificationUrlCode)
    {
        $user = Auth::user();

        if ($user) {
            return response()->json(['message' => 'You cannot access this URL because you are already logged in.'], 403);
        }

        if (is_null($verificationUrlCode)) {
            return response()->json(['message' => 'Verification URL cannot be accessed because it was removed.'], 400);
        }


        $userWithCode = User::where('verification_url_code', $verificationUrlCode)->first();

        if (!$userWithCode) {
            return response()->json(['message' => 'Verification URL code not found.'], 404);
        }

        return Inertia::render('Auth/User/RegisterSuccessful', [
            'message' => 'Registration successful! Please check your email to get the verification code.',
            'verificationUrlCode' => $verificationUrlCode,
        ]);
    }



    public function verify(VerifyRequest $request, $verificationCode)
    {
        $user = User::where('verification_code', $verificationCode)->first();

        if (!$user) {
            return response()->json(['messages' => 'Invalid verification code.'], 404);
        }

        $user->email_verified_at = now();
        $user->verification_code = null;
        $user->verification_url_code = null;
        $user->save();

        return response()->json(['messages' => 'Email verified successfully!']);
    }

    public function resendVerification(Request $request)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'User not authenticated.'], 403);
        }

        $verificationCode = str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);
        $verificationUrlCode = Str::random(120);
        $user->verification_code = $verificationCode;
        $user->verification_url_code = $verificationUrlCode;
        $user->save();

        Mail::to($user->email)->send(new VerificationMail($verificationCode, $user->email, $user->name, $verificationUrlCode));

        return response()->json(['message' => 'Verification code has been resent to your email.']);
    }

    public function loginCall(LoginRequest $request)
    {

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if (!$user->hasRole('user')) {
                Auth::logout();
                return response()->json(['messages' => 'Access denied. User role not authorized.'], 403);
            }

            return response()->json(['messages' => 'Login successful!', 'user' => $user]);
        }

        return response()->json(['messages' => 'Invalid credentials. If your account is new, please verify your email address before logging in.'], 401);
    }

    public function handleProviderCallback($provider)
    {
        try {
            $socialUser = Socialite::driver($provider)->stateless()->user();
            $this->registerOrLoginUser($socialUser, $provider);

            Session::flash('redirect', "Login successful using {$provider} Account!");
            return to_route('Welcome');
        } catch (\Exception $e) {
            Session::flash('errorFE', "Failed to login with {$provider}. Please try again.");
            return back();
        }
    }

    protected function registerOrLoginUser($socialUser, $provider)
    {
        $user = User::where('email', $socialUser->email)->first();

        if (!$user) {
            $user = User::create([
                'name' => $socialUser->name,
                'email' => $socialUser->email,
                'google_id' => $provider === 'google' ? $socialUser->id : null,
                'facebook_id' => $provider === 'facebook' ? $socialUser->id : null,
                'profile_picture' => $socialUser->avatar,
                'password' => null,
                'email_verified_at' => now(),
            ]);

            $user->syncRoles('user');
            event(new Registered($user));
            Auth::login($user);
        } else {
            if ($provider === 'google') {
                $user->google_id = $socialUser->id;
                $user->email_verified_at = now();
                $user->profile_picture = $socialUser->avatar;

            } elseif ($provider === 'facebook') {
                $user->facebook_id = $socialUser->id;
                $user->email_verified_at = now();
                $user->profile_picture = $socialUser->avatar;
            }
            $user->save();

            Auth::login($user);
        }
    }
}
