<?php

namespace Tests\Unit;

use App\Models\User;
use App\Models\Vision;
use Tests\TestCase;
use Faker\Factory as Faker;

class VisionTest extends TestCase
{
    public function test_vision_create()
    {
        $user = User::first();
        if ($user) {
            $faker = Faker::create();
            $response = $this->actingAs($user, 'api')->withHeaders(['Content-Type', 'multipart/form-data'])->post('/api/v1/vision', [
                'title' => $faker->jobTitle(),
                'caption' => $faker->text(200),
                'image' => $faker->image()
            ]);
            $response->assertStatus(201);
            $this->assertEquals($response['message'], 'Visi telah dibuat');
        } else $this->markTestSkipped("User not have data");
    }

    public function test_vision_list()
    {
        $response = $this->get('/api/v1/vision');
        $response->assertStatus(200);
        $this->assertNotEquals($response, null);
    }

    public function test_vision_destroy()
    {
        $vision = Vision::first();
        if ($vision) {
            $response = $this->actingAs($vision->user, 'api')->delete('/api/v1/vision/' . $vision->id);
            $response->assertStatus(200);
            $this->assertEquals($response['message'], 'Visi telah dihapus');
        } else $this->markTestSkipped("Vision not have data");
    }

    public function test_vision_update()
    {
        $vision = Vision::first();
        if ($vision) {
            $faker = Faker::create();
            $response = $this->actingAs($vision->user, 'api')->withHeaders(['Content-Type', 'multipart/form-data'])->post('/api/v1/vision/' . $vision->id, [
                'title' => $faker->title(),
                'caption' => $faker->text(200),
                'image' => $faker->image()
            ]);
            $response->assertStatus(200);
            $this->assertEquals($response['message'], 'Visi telah diperbarui');
        } else $this->markTestSkipped("Vision not have data");
    }
}
