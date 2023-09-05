<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Enums\UserRoleEnum;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Notifications\CustomerPasswordNotification;

class UserController extends Controller
{


    function index()
    {
        return inertia('Users/Index', [
            'users' => fn () => UserResource::collection(User::where('role', UserRoleEnum::customer)->get()),
        ]);
    }

    function store(StoreUserRequest $request)
    {
        $password = Str::random(6);
        $user = User::create([...$request->validated(), 'role' => 'customer', 'password' => $password, 'email_verified_at' => true]);
        $user->notify(new CustomerPasswordNotification($user, $password));

        return redirect()->back()->with(['message' => 'User Created', 'type' => 'success']);
    }

    function update(UpdateUserRequest $request, User $user)
    {
        $user = $user->update($request->validated());

        return redirect()->back()->with(['message' => 'User Updated', 'type' => 'success']);
    }

    function approve(User $user)
    {
        $user->email_verified_at = now();
        $user->save();

        return redirect()->back()->with(['message' => 'User Approved', 'type' => 'success']);
    }
}
