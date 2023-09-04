<?php

namespace App\Http\Controllers;

use App\Enums\UserRoleEnum;
use App\Http\Requests\CustomerRegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Notifications\CustomerPasswordNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CustomerRegisterController extends Controller
{

    function store(CustomerRegisterRequest $request)
    {
        $password = Str::random(6);
        $data = [...$request->validated(), 'role' => UserRoleEnum::customer, 'password' => Hash::make($password)];
        $customer = User::create($data);

        $customer->notify(new CustomerPasswordNotification($customer, $password));

        return redirect('/');
    }
}
