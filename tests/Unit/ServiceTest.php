<?php

namespace Tests\Unit;

use App\Models\Service;
use App\Models\User;
use Tests\TestCase;
use Faker\Factory as Faker;

class ServiceTest extends TestCase
{
    public function test_service_create()
    {
        $user = User::first();
        if ($user) {
            $faker = Faker::create();
            $response = $this->actingAs($user, 'api')->withHeaders(['Content-Type', 'multipart/form-data'])->post('/api/v1/service', ['name' => $faker->name(), 'description' => $faker->text(200), 'image' => $faker->image()]);
            $response->assertStatus(201);
            $this->assertEquals($response["message"], "Service telah dibuat");
        } else $this->markTestSkipped("User not have data");
    }

    public function test_service_list()
    {
        $response = $this->get('/api/v1/service');
        $response->assertStatus(200);
        $this->assertNotEquals($response, null);
    }

    public function test_service_put()
    {
        $service = Service::first();
        if ($service) {
            $faker = Faker::create();
            $response = $this->actingAs($service->user, 'api')->withHeaders(['Content-Type', 'multipart/form-data'])->post('/api/v1/service/' . $service->id, [
                'name' => $faker->name() . "Update",
                'image' => $faker->image(),
                'description' => $faker->text(200)
            ]);
            $response->assertStatus(200);
        } else $this->markTestSkipped("Service not have data");
    }

    public function test_service_destroy()
    {
        $service = Service::first();
        if ($service) {
            $response = $this->actingAs($service->user, 'api')->delete("/api/v1/service/" . $service->id);
            $response->assertStatus(200);
            $this->assertEquals($response['message'], 'Service telah dihapus');
        } else $this->markTestSkipped("Service not have data");
    }
}
