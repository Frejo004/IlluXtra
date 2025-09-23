<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $verificationCode = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'verification_code' => $verificationCode,
            'verification_code_expires_at' => Carbon::now()->addMinutes(15),
            'is_verified' => false,
        ]);

        // Envoyer l'email de vérification
        Mail::send('emails.verification', ['code' => $verificationCode], function ($message) use ($user) {
            $message->to($user->email)
                    ->subject('Code de vérification - IlluXtra');
        });

        return response()->json([
            'success' => true,
            'message' => 'Inscription réussie. Vérifiez votre email pour le code de confirmation.',
            'user_id' => $user->id
        ], 201);
    }

    public function verifyEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'code' => 'required|string|size:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::find($request->user_id);

        if (!$user->verification_code || $user->verification_code !== $request->code) {
            return response()->json([
                'success' => false,
                'message' => 'Code de vérification invalide'
            ], 400);
        }

        if (Carbon::now()->isAfter($user->verification_code_expires_at)) {
            return response()->json([
                'success' => false,
                'message' => 'Code de vérification expiré'
            ], 400);
        }

        $user->update([
            'is_verified' => true,
            'verification_code' => null,
            'verification_code_expires_at' => null,
            'email_verified_at' => Carbon::now(),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Email vérifié avec succès',
            'user' => $user,
            'token' => $token
        ]);
    }

    public function resendCode(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::find($request->user_id);

        if ($user->is_verified) {
            return response()->json([
                'success' => false,
                'message' => 'Email déjà vérifié'
            ], 400);
        }

        $verificationCode = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);

        $user->update([
            'verification_code' => $verificationCode,
            'verification_code_expires_at' => Carbon::now()->addMinutes(15),
        ]);

        Mail::send('emails.verification', ['code' => $verificationCode], function ($message) use ($user) {
            $message->to($user->email)
                    ->subject('Code de vérification - IlluXtra');
        });

        return response()->json([
            'success' => true,
            'message' => 'Nouveau code envoyé'
        ]);
    }
}