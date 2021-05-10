<?php

namespace Tests\Unit;

use App\Models\Testimonials;
use App\Models\User;
use Tests\TestCase;
use Faker\Factory as Faker;

class TestimonialsTest extends TestCase
{
    public function test_testimoni_list()
    {
        $response = $this->get('/api/v1/testimonials');
        $response->assertStatus(200);
        $this->assertNotEquals($response, null);
    }
    public function test_testimoni_create()
    {
        $user = User::first();
        if ($user) {
            $faker = Faker::create();
            $response = $this->actingAs($user, 'api')->withHeaders(['Content-Type', 'multipart/form-data'])->post('/api/v1/testimonials', [
                'avatar' => $faker->image(),
                'name' => $faker->firstName(),
                'comment' => $faker->text(200),
                'from' => 'Google'
            ]);
            $response->assertStatus(201);
            $this->assertEquals($response['message'], 'Testimoni telah dibuat');
        } else $this->markTestSkipped("User not have data");
    }
    public function test_testimoni_put()
    {
        $testimonials = Testimonials::first();
        if ($testimonials) {
            $faker = Faker::create();
            $response = $this->actingAs($testimonials->user, 'api')->withHeaders(['Content-Type', 'multipart/form-data'])->post('/api/v1/testimonials/' . $testimonials->id, [
                'avatar' => $faker->image(),
                'name' => $faker->firstName() . 'Update',
                'comment' => $faker->text(200),
                'from' => 'Yahoo'
            ]);
            $response->assertStatus(200);
            $this->assertEquals($response['message'], 'Testimoni telah diperbarui');
        } else $this->markTestSkipped("Testimonials not have data");
    }
    public function test_testmoni_destroy()
    {
        $testimonials = Testimonials::first();
        if ($testimonials) {
            $response = $this->actingAs($testimonials->user, 'api')->delete('/api/v1/testimonials/' . $testimonials->id);
            $response->assertStatus(200);
            $this->assertEquals($response['message'], 'Testimoni telah dihapus');
        } else $this->markTestSkipped("Testimonials not have data");
    }
}
