<?php

namespace Tests\Unit;

use App\Models\Background;
use App\Models\User;
use Tests\TestCase;
use Faker\Factory as Faker;

class BackgroundTest extends TestCase
{

    public function test_background_create()
    {
        $user = User::first();
        $faker = Faker::create();
        if ($user) {
            $response = $this->actingAs($user, "api")->withHeaders(["Content-Type", "multipart/form-data"])->post("/api/v1/background", [
                "background" => $faker->imageUrl(),
            ]);
            $response->assertStatus(201);
            $this->assertNotEquals($response['message'], null);
            $this->assertEquals($response['message'], "Background telah dibuat");
        } else {
            $this->markTestSkipped("Skip! User not have data");
        }
    }

    public function test_background_destroy()
    {
        $user = User::first();
        $background = Background::first();
        $faker = Faker::create();
        if ($user) {
            $response = $this->actingAs($user, "api")->withHeaders(['Content-Type', 'multipart/form-data'])->post('/api/v1/background/' . $background->id, [
                'background' => $faker->imageUrl()
            ]);
            $response->assertStatus(200);
            $this->assertEquals($response['message'], 'Background telah diperbarui');
            $this->assertNotEquals($response['message'], null);
        } else $this->markTestSkipped("Skip! User not have data");
    }

    public function test_background_put()
    {
        $user = User::first();
        $background = Background::first();
        if ($user) {
            $response = $this->actingAs($user, 'api')->delete('/api/v1/background/' . $background->id);
            $this->assertEquals($response['message'], 'Background telah dihapus');
            $response->assertStatus(200);
            $this->assertNotEquals($response['message'], null);
        } else $this->markTestSkipped("Skip! Background not have data");
    }

    public function test_background_list()
    {
        $response = $this->get("/api/v1/background");
        $response->assertStatus(200);
    }
}
