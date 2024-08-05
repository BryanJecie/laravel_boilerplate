<?php

namespace Database\Seeders;

use Core\settings\companies\models\BrandCredentialType;
use Core\settings\companies\models\Company;
use Core\settings\companies\models\CompanyBrandAccount;
use Core\settings\companies\models\CompanyBrandCredential;
use Core\settings\companies\models\CompanyUser;
use Illuminate\Database\Seeder;

class CompanyBrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $company = Company::updateOrCreate([
            'name' => 'Prepared Patriot',
            'website' => 'https://www.preparedpatriot.com',
            'logo' => 'https://cdn.shopify.com/s/files/1/0543/8668/8171/products/PreparedPatriotDecalImageforShopify_a2eb86d9-833a-4ff4-b014-fca1efc7263e_x100.png?v=1672178070',
            'email' => 'preparedpatriot@gmail.com',
        ]);

        CompanyUser::updateOrCreate([
            'company_id' => $company->id,
            'user_id' => 1,
            'is_main_account' => 1,
        ]);

        $cba = CompanyBrandAccount::updateOrCreate([
            'name' => 'VNSH',
            'company_id' => $company->id,
        ]);

        $count = 1;
        foreach (['GA4', 'Checkoutchamp/Konnektive'] as $key => $name) {
            BrandCredentialType::create([
                'id' =>  $count,
                'name' =>  $name,
            ]);
            $count += 1;
        }

        $credentials = [
            [
                'type_id' => 1,
                'credentials' => [
                    [
                        'name' => 'propertyId',
                        'value' => 'GA1234JSAW2',
                    ],
                    [
                        'name' => 'file',
                        'value' => '/storage/app/analytics/admin-app-417920-a1ea7779af73.json',
                    ],
                ]
            ],
            [
                'type_id' => 2,
                'credentials' => [
                    [
                        'name' => 'username',
                        'value' => 'adminapp-api-vnsh',
                    ],
                    [
                        'name' => 'password',
                        'value' => 'password',
                    ],
                ]
            ]
        ];


        collect($credentials)->each(function ($cred) use ($cba) {

            foreach ($cred['credentials'] as $value) {
                $brandCredential = CompanyBrandCredential::create([
                    'name' => $value['name'],
                    'value' => $value['value'],
                ]);

                $brandCredential->brandAccountCredentials()->create([
                    'brand_account_id' => $cba->id,
                    'brand_credential_type_id' => $cred['type_id'],
                ]);
            }
        });
    }
}
