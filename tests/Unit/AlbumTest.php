<?php

namespace Tests\Unit;

use App\Models\Album;
use App\Models\User;
use Tests\TestCase;
use Faker\Factory as Faker;

class AlbumTest extends TestCase
{
    public function test_album_create()
    {
        $user = User::first();
        if ($user) {
            $faker = Faker::create();
            $response = $this->actingAs($user)->withHeaders(['Content-Type', 'multipart/form-data'])->post('/api/v1/album', [
                'title' => $faker->name(),
                'caption' => $faker->text(200),
                'photo' => $faker->image(),
            ]);
            $response->assertStatus(201);
            $this->assertEquals($response['message'], 'Album telah dibuat');
        } else {
            $this->markTestSkipped("This not have user");
        }
    }

    public function test_album_list()
    {
        $response = $this->get('/api/v1/album');
        $response->assertStatus(200);
        $this->assertNotEquals($response, null);
    }

    public function test_album_destroy()
    {
        $album = Album::orderByDesc("id")->first();
        if ($album) {
            $response = $this->actingAs($album->user, 'api')->delete('/api/v1/album/' . $album->id);
            $response->assertStatus(200);
            $this->assertEquals($response['message'], 'Album telah dihapus');
        } else $this->markTestSkipped("Album not have data");
    }

    public function test_album_update()
    {
        $album = Album::first();
        if ($album) {
            $faker = Faker::create();
            $response = $this->actingAs($album->user, 'api')->withHeaders(['Content-Type', 'multipart/form-data'])->post('/api/v1/album/' . $album->id, [
                'title' => $faker->name(),
                'caption' => $faker->text(200),
                'photo' => $faker->image()
            ]);
            $response->assertStatus(200);
            $this->assertEquals($response['message'], 'Album telah diperbarui');
        } else $this->markTestSkipped("Album not have data");
    }
}
