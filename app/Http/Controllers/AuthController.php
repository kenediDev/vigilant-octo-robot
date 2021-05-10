<?php

namespace App\Http\Controllers;

use App\Mail\EmailResetUser;
use App\Models\Accounts;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:api", ["except" => ['login', 'me', 'reset']]);
    }

    public function login(Request $request)
    {
        $val = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);
        if ($val->fails()) {
            return response()->json($val->errors(), 400);
        };
        if (!$token = JWTAuth::attempt($request->all())) {
            return response()->json(['message' => 'Nama pengguna atau kata sandi salah'], 400);
        };
        return $this->responseWithToken($token);
    }

    public function reset(Request $request)
    {
        $val = Validator::make($request->all(), [
            'email' => 'required'
        ]);
        if ($val->fails()) {
            return response()->json($val->errors(), 400);
        };
        $user = User::where("users.email", "=", $request->email)->first();
        Mail::send("welcome", ["user" => $user], function ($m) use ($user) {
            $m->from(env("MAIL_USERNAME"), "Laravel");
            $m->to($user->email, $user->name)->subject("Hello Worlds");
        });
        return response()->json(['message' => 'Akun telah direset, silahkan periksa inbox email anda untuk mendapatkan kata sandi baru'], 200);
    }

    public function me()
    {
        $auth = User::first();
        return response()->json($auth, 200);
    }

    public function update(Request $request)
    {
        if (!auth()->user()) {
            return response()->json(false, 401);
        };
        $val = Validator::make($request->all(), [
            'brand' => 'required',
            'name' => 'required',
            'title' => 'required',
            'phone_numbers' => 'required',
            'address' => 'required'
        ]);
        if ($val->fails()) {
            return response()->json($val->errors(), 400);
        };
        $user = auth()->user();
        if (!$user->accounts) {
            $this->createAccounts($user, $request);
        } else {
            $this->updateAccounts($user, $request);
        }
        return response()->json(['message' => "Profil has been updated"], 200);
    }

    protected function createAccounts($user, $request)
    {
        $accounts = Accounts::create([
            'brand' => $request->brand,
            'title' => $request->title,
            'background' => Storage::disk("upload_public")->put('image/accounts', $request->file('background')),
            'phone_numbers' => $request->phone_numbers,
            'address' => $request->phone_numbers,
            'user_id' => $user->id
        ]);
        $accounts->save();
        $user->name = $request->name;
        $user->save();
    }

    protected function updateAccounts($user, $request)
    {
        $user->name = $request->name;
        $user->accounts->brand = $request->brand;
        $user->accounts->title = $request->title;
        if ($request->hasFile("background")) {
            $user->accounts->background = Storage::disk("upload_public")->put("images/accounts", $request->file('background'));
        }
        $user->accounts->phone_numbers = $request->phone_numbers;
        $user->accounts->address = $request->address;
        $user->accounts->save();
        $user->save();
    }

    protected function responseWithToken($token)
    {
        return [
            'token' => $token,
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
            'type' => 'bearer'
        ];
    }
}
