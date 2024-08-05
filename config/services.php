<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    /*
     * Socialite Credentials
     * Redirect URL's need to be the same as specified on each network you set up this application on
     * as well as conform to the route:
     * http://localhost/public/login/SERVICE/callback
     * Where service can github, facebook, twitter, google, linkedin, or bitbucket
     * Docs: https://github.com/laravel/socialite
     */
    'bitbucket' => [
        'active' => env('BITBUCKET_ACTIVE', false),
        'client_id' => env('BITBUCKET_CLIENT_ID'),
        'client_secret' => env('BITBUCKET_CLIENT_SECRET'),
        'redirect' => env('BITBUCKET_REDIRECT'),
    ],

    'facebook' => [
        'api_base_url' => env('FACEBOOK_API_BASE_URL'),
        'api_version' => env('FACEBOOK_API_VERSION', 'v20.0'),
        'active' => env('FACEBOOK_ACTIVE', false),
        'client_id' => env('FACEBOOK_CLIENT_ID'),
        'client_secret' => env('FACEBOOK_CLIENT_SECRET'),
        'access_token' => env('FACEBOOK_ACCESS_TOKEN'),
        'redirect' => env('FACEBOOK_REDIRECT'),
        'ads_accounts' => [
            'modern_needs' => env('FACEBOOK_AD_ACCOUNT_MODERN_NEEDS'),
            'vnsh' => env('FACEBOOK_AD_ACCOUNT_VNSH'),
            'pain_safari' => env('FACEBOOK_AD_ACCOUNT_PAIN_SAFARI'),
        ],
        'pixels' => [
            'modernneeds' => env('FACEBOOK_PIXELS_MODERNNEEDS'),
            'vnsh' => env('FACEBOOK_PIXELS_VNSH'),
            'painsafari' => env('FACEBOOK_PIXELS_PAINSAFARI'),
        ]
    ],

    'github' => [
        'active' => env('GITHUB_ACTIVE', false),
        'client_id' => env('GITHUB_CLIENT_ID'),
        'client_secret' => env('GITHUB_CLIENT_SECRET'),
        'redirect' => env('GITHUB_REDIRECT'),
    ],

    'google' => [
        'active' => env('GOOGLE_ACTIVE', false),
        'client_id' => env('GOOGLE_CLIENT_ID'),
        'client_secret' => env('GOOGLE_CLIENT_SECRET'),
        'redirect' => env('GOOGLE_REDIRECT'),
    ],

    'linkedin' => [
        'active' => env('LINKEDIN_ACTIVE', false),
        'client_id' => env('LINKEDIN_CLIENT_ID'),
        'client_secret' => env('LINKEDIN_CLIENT_SECRET'),
        'redirect' => env('LINKEDIN_REDIRECT'),
    ],

    'twitter' => [
        'active' => env('TWITTER_ACTIVE', false),
        'client_id' => env('TWITTER_CLIENT_ID'),
        'client_secret' => env('TWITTER_CLIENT_SECRET'),
        'redirect' => env('TWITTER_REDIRECT'),
    ],

    'notion' => [
        'database_id' => env('NOTION_DATABASE_ID'),
        'secret_key' => env('NOTION_SECRET_KEY'),
        'version' => env('NOTION_VERSION'),
        'base_url' => env('NOTION_BASE_URL'),
    ],

    'maropost' => [
        'base_url' => env('MAROPOST_BASE_URL'),
        'base_url_cloud_1' => env('MAROPOST_BASE_URL_CLOUD_1'),
        'base_url_reporting' => env('MAROPOST_BASE_UR_REPORTING'),
    ],

    'amazon_mn_vnsh' => [
        'AMAZON_LWA_CLIENT_ID' => env('AMAZON_LWA_CLIENT_ID'),
        'AMAZON_LWA_CLIENTSECRET' => env('AMAZON_LWA_CLIENTSECRET'),
        'AMAZON_LWA_REFRESHTOKEN' => env('AMAZON_LWA_REFRESHTOKEN')
    ],
    'amazon_ps' => [
        'AMAZON_LWA_CLIENT_ID' => env('PS_AMAZON_LWA_CLIENT_ID'),
        'AMAZON_LWA_CLIENTSECRET' => env('PS_AMAZON_LWA_CLIENTSECRET'),
        'AMAZON_LWA_REFRESHTOKEN' => env('PS_AMAZON_LWA_REFRESHTOKEN')
    ],
    'quickbox3pl' => [
        'access_token' => env('QUICKBOX3PL_ACCESS_TOKEN','NjI3ZmEzMzktYWI4ZC00ODI0LWI0ZDQtZjFlN2E0YWNiNDk1OldtY1FVbThUTml1QXFOaVh3S0R0bEdxTWF'),
        'base_url' => env('QUICKBOX3PL_BASE_URL','https://secure-wms.com'),
        'grant_type' => 'client_credentials',
        'client_id' => '627fa339-ab8d-4824-b4d4-f1e7a4acb495',
        'secret_key' => 'WmcQUm8TNiuAqNiXwKDtlGqMafvP731A',
    ],
    'google_ads' => [
        'dev_token' => env('GADS_DEV_TOKEN'),
        'login_cid' => env('GADS_LOGIN_CID'),

        'client_id' => env('GADS_CLIENT_ID'),
        'client_secret' => env('GADS_CLIENTSECRET'),
        'refresh_token' => env('GADS_REFRESH_TOKEN'),
    ]
];
