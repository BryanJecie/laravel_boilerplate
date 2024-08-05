<?php

namespace Database\Seeders;

use App\Core\v1\Platform\Models\Platform;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlatformSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Platform::create([
            'name' => 'Offerwave',
            'api_provider' => Platform::API_PROVIDER_NETWORK,
            'credentials' => json_encode([
                'name' => 'offerwave',
                'key' => 'NETo0hHClWlNl9I4uL0U213IaMd6St',
                'url' => 'https://offerwave.api.hasoffers.com/Apiv3/json?'
            ])
        ]);
    }
}
