<?php

namespace Database\Factories;

use App\Models\Accounts;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class AccountsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Accounts::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'brand' => $this->faker->jobTitle(),
            'title' => $this->faker->jobTitle(),
            'background' => $this->faker->image(),
            'phone_numbers' => $this->faker->phoneNumber(),
            'address' => $this->faker->streetAddress(),
            'user_id' => User::first()->id
        ];
    }
}
