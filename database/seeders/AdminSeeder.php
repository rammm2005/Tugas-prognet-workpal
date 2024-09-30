<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */


    public function run(): void
    {

        User::create(
            [
                'id' => (string) \Ramsey\Uuid\Uuid::uuid4(),
                'name' => 'Admin',
                'email' => 'admin@workpal.com',
                'email_verified_at' => now(),
                'password' => Hash::make('AkusukaReact@2024'),
                'remember_token' => Str::random(10),
            ],
        )->assignRole('admin');
    }
}
