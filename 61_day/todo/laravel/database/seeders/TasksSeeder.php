<?php

namespace Database\Seeders;

use App\Models\Tasks;
use Illuminate\Database\Seeder;


class TasksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tasks::factory()->count(20)->create([

            'title'=>'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
        ]);
    }
}
