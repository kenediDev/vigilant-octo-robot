<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;
use Faker\Factory as Faker;

class UserTest extends TestCase
{
    public function test_user_login()
    {
        $user = User::first();
        $response = $this->post("/api/v1/auth", [
            'email' => $user->email,
            'password' => "Password"
        ]);
        $response->assertStatus(200);
        $this->assertNotEquals($response['token'], null);
    }

    public function test_user_reset()
    {
        $user = User::first();
        if ($user) {
            $response = $this->post("/api/v1/auth/reset", [
                'email' => $user->email,
            ]);
            $response->assertStatus(200);
            $this->assertEquals($response['message'], "Akun telah direset, silahkan periksa inbox email anda untuk mendapatkan kata sandi baru");
            $this->assertNotEquals($response['message'], null);
        } else $this->markTestSkipped("User not have data");
    }

    public function test_user_me()
    {
        $user = User::first();
        if ($user) {
            $response = $this->actingAs($user, 'api')->get("/api/v1/auth");
            $response->assertStatus(200);
            $this->assertNotEquals($response, null);
        } else  $this->markTestSkipped("User not have data");
    }

    public function test_user_update()
    {
        $faker = Faker::create();
        $user = User::first();
        if ($user) {
            $response = $this->actingAs($user, 'api')->withHeaders([
                'Content-Type' => 'multipart/form-data'
            ])->post("/api/v1/auth/update", [
                'brand' => $faker->jobTitle(),
                'name' => $faker->firstName(),
                'title' => $faker->jobTitle(),
                'phone_numbers' => $faker->phoneNumber(),
                'address' => $faker->streetAddress()
            ]);
            $response->assertStatus(200);
            $this->assertEquals($response['message'], 'Profil has been updated');
        } else  $this->markTestSkipped("User not have data");
    }
}
