<?php

namespace Database\Factories;

use App\Models\Testimonials;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TestimonialsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Testimonials::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'avatar' => $this->faker->image(),
            'name' => $this->faker->name(),
            'comment' => $this->faker->text(200),
            'from' => 'Google',
            'user_id' => User::first()->id
        ];
    }
}
