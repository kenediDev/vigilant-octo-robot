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
        $user = User::orderByDesc("id")->first();
        $faker = Faker::create();
        $response = $this->actingAs($user, 'api')->withHeaders(['Content-Type', 'multipart/form-data'])->post('/api/v1/album', [
            'title' => $faker->name(),
            'caption' => $faker->text(200),
            'photo' => $faker->image(),
        ]);
        $response->assertStatus(201);
        $this->assertEquals($response['message'], 'Album telah dibuat');
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
        $response = $this->actingAs($album->user, 'api')->delete('/api/v1/album/' . $album->id);
        $response->assertStatus(200);
        $this->assertEquals($response['message'], 'Album telah dihapus');
    }

    public function test_album_update()
    {
        $album = Album::orderByDesc('id')->first();
        $faker = Faker::create();
        $response = $this->actingAs($album->user, 'api')->withHeaders(['Content-Type', 'multipart/form-data'])->post('/api/v1/album/' . $album->id, [
            'title' => $faker->name(),
            'caption' => $faker->text(200),
            'photo' => $faker->image()
        ]);
        $response->assertStatus(200);
        $this->assertEquals($response['message'], 'Album telah diperbarui');
    }
}
