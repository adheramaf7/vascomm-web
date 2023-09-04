<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Enums\UserRoleEnum;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name'      => 'Admin',
            'email'     => 'admin@mail.com',
            'password'  => Hash::make('password'),
            'role'      => UserRoleEnum::admin,
            'is_active' => true,
        ]);
    }
}
