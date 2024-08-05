<?php
namespace App\Services\GoogleAdsApi;

use Google\Ads\GoogleAds\Lib\OAuth2TokenBuilder;
use Google\Ads\GoogleAds\Lib\V16\GoogleAdsClientBuilder;
use Google\Ads\GoogleAds\V16\Services\SearchGoogleAdsStreamRequest;

use Google\Ads\GoogleAds\V16\Services\ClickConversion;
use Google\Ads\GoogleAds\V16\Services\ClickConversionResult;
use Google\Ads\GoogleAds\V16\Services\UploadClickConversionsRequest;
use Google\Ads\GoogleAds\Util\V16\ResourceNames;
use Google\Ads\GoogleAds\V16\Common\UserIdentifier;

use Google\Ads\GoogleAds\V16\Enums\AssetFieldTypeEnum\AssetFieldType;
use Google\Ads\GoogleAds\V16\Enums\AssetSetTypeEnum\AssetSetType;
use Google\Ads\GoogleAds\V16\Enums\TargetingDimensionEnum\TargetingDimension;

use Illuminate\Console\Command;

class GoogleAdsApiService
{
    private $service_client = NULL;
    private $googleAdsClient = NULL;

    CONST FIELDS_MAPPING = [
        'campaign' => [
            'accessible_bidding_strategy',
            'ad_serving_optimization_status',
            'advertising_channel_sub_type',
            'advertising_channel_type',
            'video_brand_safety_suitability',
            'vanity_pharma.vanity_pharma_text',
            'vanity_pharma.vanity_pharma_display_url_mode',
            'url_expansion_opt_out',
            'url_custom_parameters',
            'travel_campaign_settings.travel_account_id',
            'tracking_url_template',
            'tracking_setting.tracking_url',
            'targeting_setting.target_restrictions',
            'target_spend.target_spend_micros',
            'target_spend.cpc_bid_ceiling_micros',
            'target_roas.target_roas',
            'target_roas.cpc_bid_floor_micros',
            'target_roas.cpc_bid_ceiling_micros',
            'target_impression_share.location_fraction_micros',
            'target_impression_share.location',
            'target_impression_share.cpc_bid_ceiling_micros',
            'target_cpm.target_frequency_goal.time_unit',
            'target_cpm.target_frequency_goal.target_count',
            'target_cpa.target_cpa_micros',
            'target_cpa.cpc_bid_floor_micros',
            'target_cpa.cpc_bid_ceiling_micros',
            'status',
            'start_date',
            'shopping_setting.use_vehicle_inventory',
            'shopping_setting.merchant_id',
            'shopping_setting.feed_label',
            'shopping_setting.enable_local',
            'shopping_setting.disable_product_feed',
            'shopping_setting.campaign_priority',
            'shopping_setting.advertising_partner_ids',
            'serving_status',
            'resource_name',
            'selective_optimization.conversion_actions',
            'real_time_bidding_setting.opt_in',
            'primary_status_reasons',
            'primary_status',
            'performance_max_upgrade.status',
            'performance_max_upgrade.pre_upgrade_campaign',
            'performance_max_upgrade.performance_max_campaign',
            'percent_cpc.cpc_bid_ceiling_micros',
            'percent_cpc.enhanced_cpc_enabled',
            'payment_mode',
            'optimization_score',
            'optimization_goal_setting.optimization_goal_types',
            'network_settings.target_youtube',
            'network_settings.target_search_network',
            'network_settings.target_partner_search_network',
            'network_settings.target_google_tv_network',
            'network_settings.target_google_search',
            'network_settings.target_content_network',
            'name',
            'maximize_conversions.target_cpa_micros',
            'maximize_conversion_value.target_roas',
            'manual_cpv',
            'manual_cpm',
            'manual_cpc.enhanced_cpc_enabled',
            'manual_cpa',
            'local_services_campaign_settings.category_bids',
            'local_campaign_setting.location_source_type',
            'listing_type',
            'labels',
            'id',
            'geo_target_type_setting.positive_geo_target_type',
            'geo_target_type_setting.negative_geo_target_type',
            'frequency_caps',
            'final_url_suffix',
            'experiment_type',
            'excluded_parent_asset_set_types',
            'excluded_parent_asset_field_types',
            'end_date',
            'dynamic_search_ads_setting.use_supplied_urls_only',
            'dynamic_search_ads_setting.language_code',
            'dynamic_search_ads_setting.feeds',
            'dynamic_search_ads_setting.domain_name',
            'discovery_campaign_settings.upgraded_targeting',
            'commission.commission_rate_micros',
            'campaign_group',
            'campaign_budget',
            'bidding_strategy_type',
            'bidding_strategy_system_status',
            'bidding_strategy',
            'audience_setting.use_audience_grouped',
            'asset_automation_settings',
            'base_campaign',
        ],
        'metrics' => [
            'absolute_top_impression_percentage',
            'active_view_cpm',
            'active_view_ctr',
            'active_view_impressions',
            'active_view_measurability',
            'active_view_measurable_cost_micros',
            'active_view_measurable_impressions',
            'active_view_viewability',
            'all_conversions',
            'all_conversions_by_conversion_date',
            'all_conversions_from_click_to_call',
            'all_conversions_from_directions',
            'all_conversions_from_interactions_rate',
            'all_conversions_from_menu',
            'all_conversions_from_order',
            'all_conversions_from_other_engagement',
            'all_conversions_from_store_visit',
            'all_conversions_from_store_website',
            'all_conversions_value',
            'all_conversions_value_by_conversion_date',
            'all_new_customer_lifetime_value',
            'average_cart_size',
            'average_cost',
            'average_cpc',
            'average_cpe',
            'average_cpm',
            'average_cpv',
            'average_impression_frequency_per_user',
            'average_order_value_micros',
            'average_page_views',
            'average_target_cpa_micros',
            'average_target_roas',
            'average_time_on_site',
            'bounce_rate',
            'clicks',
            'content_budget_lost_impression_share',
            'content_impression_share',
            'content_rank_lost_impression_share',
            'conversions',
            'conversions_by_conversion_date',
            'conversions_from_interactions_rate',
            'conversions_value',
            'conversions_value_by_conversion_date',
            'cost_micros',
            'cost_of_goods_sold_micros',
            'cost_per_all_conversions',
            'cost_per_conversion',
            'cost_per_current_model_attributed_conversion',
            'cross_device_conversions',
            'cross_device_conversions_value_micros',
            'cross_sell_cost_of_goods_sold_micros',
            'cross_sell_gross_profit_micros',
            'cross_sell_revenue_micros',
            'cross_sell_units_sold',
            'ctr',
            'current_model_attributed_conversions',
            'current_model_attributed_conversions_from_interactions_rate',
            'current_model_attributed_conversions_from_interactions_value_per_interaction',
            'current_model_attributed_conversions_value',
            'current_model_attributed_conversions_value_per_cost',
            'engagement_rate',
            'engagements',
            'gmail_forwards',
            'gmail_saves',
            'gmail_secondary_clicks',
            'gross_profit_margin',
            'gross_profit_micros',
            'impressions',
            'interaction_event_types',
            'interaction_rate',
            'interactions',
            'invalid_click_rate',
            'invalid_clicks',
            'lead_cost_of_goods_sold_micros',
            'lead_gross_profit_micros',
            'lead_revenue_micros',
            'lead_units_sold',
            'new_customer_lifetime_value',
            'orders',
            'percent_new_visitors',
            'phone_calls',
            'phone_impressions',
            'phone_through_rate',
            'publisher_organic_clicks',
            'publisher_purchased_clicks',
            'publisher_unknown_clicks',
            'relative_ctr',
            'revenue_micros',
            'search_absolute_top_impression_share',
            'search_budget_lost_absolute_top_impression_share',
            'search_budget_lost_impression_share',
            'search_budget_lost_top_impression_share',
            'search_click_share',
            'search_exact_match_impression_share',
            'search_impression_share',
            'search_rank_lost_absolute_top_impression_share',
            'search_rank_lost_impression_share',
            'search_rank_lost_top_impression_share',
            'search_top_impression_share',
            'sk_ad_network_installs',
            'sk_ad_network_total_conversions',
            'top_impression_percentage',
            'unique_users',
            'units_sold',
            'value_per_all_conversions',
            'value_per_all_conversions_by_conversion_date',
            'value_per_conversion',
            'value_per_conversions_by_conversion_date',
            'value_per_current_model_attributed_conversion',
            'video_quartile_p100_rate',
            'video_quartile_p25_rate',
            'video_quartile_p50_rate',
            'video_quartile_p75_rate',
            'video_view_rate',
            'video_views',
            'view_through_conversions'
        ],
        'ad_group' => [
            'url_custom_parameters',
            'type',
            'tracking_url_template',
            'targeting_setting.target_restrictions',
            'target_roas',
            'target_cpm_micros',
            'target_cpa_micros',
            'status',
            'resource_name',
            'primary_status_reasons',
            'primary_status',
            'percent_cpc_bid_micros',
            'optimized_targeting_enabled',
            'labels',
            'id',
            'name',
            'final_url_suffix',
            'excluded_parent_asset_set_types',
            'excluded_parent_asset_field_types',
            'effective_target_roas_source',
            'effective_target_roas',
            'effective_target_cpa_source',
            'effective_target_cpa_micros',
            'effective_cpc_bid_micros',
            'display_custom_bid_dimension',
            'cpv_bid_micros',
            'cpm_bid_micros',
            'cpc_bid_micros',
            'campaign',
            'base_ad_group',
            'audience_setting.use_audience_grouped',
            'ad_rotation_mode',
        ],
        'ad_group_ad' => [
            'action_items',
            'ad.added_by_google_ads',
            'ad.device_preference',

            'status',
            'resource_name',
            'primary_status_reasons',
            'policy_summary.review_status',
            'primary_status',
            'policy_summary.approval_status',
            'ad_strength',
            'labels',
            'policy_summary.policy_topic_entries',
            'ad_group',

            'ad.display_url',
            'ad.expanded_dynamic_search_ad.description2',
            'ad.expanded_dynamic_search_ad.description',


            'ad.final_app_urls',
            'ad.final_mobile_urls',
            'ad.final_url_suffix',
            'ad.final_urls',
            'ad.id',
            'ad.name',

            'ad.resource_name',
            'ad.legacy_app_install_ad',


            'ad.responsive_search_ad.headlines',
            'ad.responsive_search_ad.path1',
            'ad.responsive_search_ad.path2',
            'ad.responsive_search_ad.descriptions',

            'ad.shopping_product_ad',
            'ad.smart_campaign_ad.descriptions',
            'ad.smart_campaign_ad.headlines',
            'ad.system_managed_resource_source',
            'ad.tracking_url_template',
            'ad.travel_ad',
            'ad.type',
            'ad.url_custom_parameters',
            'ad.url_collections',

            // VIDEO RELATED
            'ad.video_ad.bumper.action_button_label',
            'ad.video_ad.bumper.action_headline',
            'ad.video_ad.bumper.companion_banner.asset',
            'ad.video_ad.in_feed.description1',
            'ad.video_ad.in_feed.description2',
            'ad.video_ad.in_feed.headline',
            'ad.video_ad.in_feed.thumbnail',
            'ad.video_ad.in_stream.action_button_label',
            'ad.video_ad.in_stream.action_headline',
            'ad.video_ad.in_stream.companion_banner.asset',
            'ad.video_ad.non_skippable.action_headline',
            'ad.video_ad.non_skippable.action_button_label',
            'ad.video_ad.non_skippable.companion_banner.asset',
            'ad.video_ad.video.asset',
            'ad.video_ad.out_stream.headline',
            'ad.video_ad.out_stream.description',
            'ad.video_responsive_ad.videos',
            'ad.video_responsive_ad.long_headlines',
            'ad.video_responsive_ad.headlines',
            'ad.video_responsive_ad.descriptions',
            'ad.video_responsive_ad.companion_banners',
            'ad.video_responsive_ad.call_to_actions',
            'ad.video_responsive_ad.breadcrumb2',
            'ad.video_responsive_ad.breadcrumb1',            
            'ad.discovery_video_responsive_ad.breadcrumb2',
            'ad.discovery_video_responsive_ad.breadcrumb1',
            'ad.discovery_video_responsive_ad.business_name',
            'ad.discovery_video_responsive_ad.call_to_actions',
            'ad.discovery_video_responsive_ad.descriptions',
            'ad.discovery_video_responsive_ad.headlines',
            'ad.discovery_video_responsive_ad.logo_images',
            'ad.discovery_video_responsive_ad.long_headlines',
            'ad.discovery_video_responsive_ad.videos',


            // Responsive display ad
            'ad.responsive_display_ad.control_spec.enable_autogen_video',
            'ad.responsive_display_ad.business_name',
            'ad.responsive_display_ad.allow_flexible_color',
            'ad.responsive_display_ad.accent_color',
            'ad.responsive_display_ad.control_spec.enable_asset_enhancements',
            'ad.responsive_display_ad.call_to_action_text',
            'ad.responsive_display_ad.descriptions',
            'ad.responsive_display_ad.format_setting',
            'ad.responsive_display_ad.headlines',
            'ad.responsive_display_ad.logo_images',
            'ad.responsive_display_ad.long_headline',
            'ad.responsive_display_ad.main_color',
            'ad.responsive_display_ad.marketing_images',
            'ad.responsive_display_ad.price_prefix',
            'ad.responsive_display_ad.promo_text',
            'ad.responsive_display_ad.square_logo_images',
            'ad.responsive_display_ad.square_marketing_images',
            'ad.responsive_display_ad.youtube_videos',
        ]
    ];


    public function __construct()
    {
        $services = config('services');
        $gads_creds = isset($services['google_ads']) ? $services['google_ads'] : false;

        if(!$gads_creds) return false;

        // Google Ads Cred
        $dev_token = $gads_creds['dev_token'];
        $login_cid = $gads_creds['login_cid'];

        // OAuth Creds
        $client_id = $gads_creds['client_id'];
        $client_secret = $gads_creds['client_secret'];
        $refresh_token = $gads_creds['refresh_token'];

        // Double check for null values
        if(!$dev_token && !$login_cid && !$client_id && !$client_secret && !$refresh_token) return false;

        $oAuth2Credential = (new OAuth2TokenBuilder())
            ->withClientId($client_id)
            ->withClientSecret($client_secret)
            ->withRefreshToken($refresh_token)
            ->build();

        $googleAdsClient = (new GoogleAdsClientBuilder())
            ->withDeveloperToken($dev_token)
            ->withLoginCustomerId($login_cid)
            ->withOAuth2Credential($oAuth2Credential)
            ->build();
        $this->googleAdsClient = $googleAdsClient;
        $this->service_client = $googleAdsClient->getGoogleAdsServiceClient();
    }


    public function formatFields(string $type, string $data_type = NULL)
    {
        $exclude_fields = [
            'ad_group' => [
                'all_conversions_from_click_to_call',
                'all_conversions_from_directions', 
                'all_conversions_from_menu', 
                'all_conversions_from_order', 
                'all_conversions_from_other_engagement', 
                'all_conversions_from_store_visit', 
                'all_conversions_from_store_website', 
                'average_impression_frequency_per_user', 
                'average_target_cpa_micros', 
                'average_target_roas', 
                'content_budget_lost_impression_share', 
                'current_model_attributed_conversions_from_interactions_rate', 
                'current_model_attributed_conversions_from_interactions_value_per_interaction', 
                'current_model_attributed_conversions_value_per_cost', 
                'invalid_click_rate', 
                'invalid_clicks', 
                'publisher_organic_clicks', 
                'publisher_purchased_clicks', 
                'publisher_unknown_clicks', 
                'search_budget_lost_impression_share', 
                'search_click_share', 
                'sk_ad_network_installs', 
                'sk_ad_network_total_conversions', 
                'unique_users'
            ],
            'ad_group_ad' => [
                'all_conversions_from_click_to_call',
                'all_conversions_from_directions', 
                'all_conversions_from_menu', 
                'all_conversions_from_order', 
                'all_conversions_from_other_engagement', 
                'all_conversions_from_store_visit', 
                'all_conversions_from_store_website', 
                'average_impression_frequency_per_user', 
                'average_target_cpa_micros', 
                'average_target_roas', 
                'content_budget_lost_impression_share', 
                'content_impression_share', 
                'content_rank_lost_impression_share', 
                'current_model_attributed_conversions_from_interactions_rate', 
                'current_model_attributed_conversions_from_interactions_value_per_interaction', 
                'current_model_attributed_conversions_value_per_cost', 
                'invalid_click_rate', 
                'invalid_clicks', 
                'phone_calls', 
                'phone_impressions', 
                'phone_through_rate', 
                'publisher_organic_clicks', 
                'publisher_purchased_clicks', 
                'publisher_unknown_clicks', 
                'relative_ctr', 
                'search_absolute_top_impression_share', 
                'search_budget_lost_absolute_top_impression_share', 
                'search_budget_lost_impression_share', 
                'search_budget_lost_top_impression_share', 
                'search_click_share', 
                'search_exact_match_impression_share', 
                'search_impression_share', 
                'search_rank_lost_absolute_top_impression_share', 
                'search_rank_lost_impression_share', 
                'search_rank_lost_top_impression_share', 
                'search_top_impression_share', 
                'sk_ad_network_installs', 
                'sk_ad_network_total_conversions', 
                'unique_users'
            ]
        ];


        // Get fields
        $fields = self::FIELDS_MAPPING[$type];
        // Remove not applicable fields
        if(isset($exclude_fields[$data_type])) $fields = array_diff($fields, $exclude_fields[$data_type]);        
        // Map
        $new_fields = array_map(function($field) use ($type) {
            return $type . '.' . $field;
        }, $fields);

        // Return string - comma-separated field
        return implode(',', $new_fields);
    }

    public function formatNetworkSettings($network_settings)
    {
        return json_encode([
            'targetGoogleSearch' => $network_settings->getTargetGoogleSearch(),
            'targetSearchNetwork' => $network_settings->getTargetSearchNetwork(),
            'targetContentNetwork' => $network_settings->getTargetContentNetwork(),
            'targetPartnerSearchNetwork' => $network_settings->getTargetPartnerSearchNetwork(),
            'targetYoutube' => $network_settings->getTargetYoutube(),
            'targetGoogleTvNetwork' => $network_settings->getTargetGoogleTvNetwork(),
        ]);
    }


    public function formatAssetAutomationSettings($asset_automation_settings)
    {
        $data = [];
        foreach($asset_automation_settings as $setting){
            $asset_field_type = $setting->getAssetAutomationType();
            $asset_automation_status = $setting->getAssetAutomationStatus();

            $data[] = [$asset_field_type, $asset_automation_status];
        }
        return $data ? json_encode($data) : NULL;
    }


    public function formatFrequencyCap($frequency_caps)
    {        
        $data = [];
        foreach($frequency_caps as $frequency_cap){
            $fc_key = $frequency_cap->getKey();
            $fc_cap = $frequency_cap->getCap();

            $data[] = [
                'fc_key' => [
                    'level' => $fc_key->getLevel(),
                    'event_type' => $fc_key->getEventType(),
                    'time_unit' => $fc_key->getTimeUnit(),
                    'time_length' => $fc_key->getTimeLength()
                ],
                'fc_cap' => $fc_cap
            ];
        }

        return $data ? json_encode($data) : NULL;
    }


    public function formatPrimaryStatusReasons($primary_status_reasons)
    {
        $data = [];
        foreach($primary_status_reasons as $reason){
            $data[] = $reason;
        }

        return json_encode($data);
    }

    public function formatShoppingSetting($shopping_setting)
    {
        return !is_null($shopping_setting) ?
            json_encode([
                'feed_label' => $shopping_setting->getFeedLabel(),
                'campaign_priority' => $shopping_setting->getCampaignPriority(),
                'enable_local' => $shopping_setting->getEnableLocal(),
                'use_vehicle_inventory' => $shopping_setting->getUseVehicleInventory(),
                'disable_product_feed' => $shopping_setting->getDisableProductFeed()
            ]) : NULL;
    }


    public function getClassMethods($class)
    {
        $methods = [];
        foreach(get_class_methods($class) as $method){
            if(substr($method, 0, 3) === 'get') $methods[$method] = $method;
        }

        return array_values(array_unique($methods));
    }

    public function formatTargetingSetting($targeting_setting)
    {
        $data = [];
        if(!is_null($targeting_setting)){
            foreach ($targeting_setting->getTargetRestrictions() as $targetRestriction) {
                $targetingDimension = $targetRestriction->getTargetingDimension();
                $bidOnly = $targetRestriction->getBidOnly() ? 'true' : 'false';

                $data[] = [
                    'dimension' => TargetingDimension::name($targetingDimension),
                    'bidOnly' => $bidOnly
                ];
            }
        }

        return $data ? json_encode($data) : NULL;
    }

    public function formatMaximizeConversions($maximize_conversions)
    {
        return !is_null($maximize_conversions) ?
            json_encode([
                'cpc_bid_ceiling_micros' => $maximize_conversions->getCpcBidCeilingMicros(),
                'cpc_bid_floor_micros' => $maximize_conversions->getCpcBidFloorMicros(),
                'target_cpa_micros' => $maximize_conversions->getTargetCpaMicros(),
            ]) : NULL;
    }

    public function formatTargetCPA($campaign_target_cpa)
    {
        return  !is_null($campaign_target_cpa) ? 
            json_encode([
                'target_cpa' => $campaign_target_cpa->getTargetCpaMicros(),
                'cpc_bid_ceiling_micros' => $campaign_target_cpa->getCpcBidCeilingMicros(),
                'cpc_bid_floor_micros' => $campaign_target_cpa->getCpcBidFloorMicros()
            ]) : NULL;
    }

    public function formatInteractionType($interaction_event_types)
    {   
        $data = [];
        foreach($interaction_event_types as $interaction_event_type){
            $data[] = $interaction_event_type;
        }

        return $data ? json_encode($data) : NULL;
    }

    public function formatExpandedDynamicSearchAd($expanded_dynamic_search_ad)
    {
        return !is_null($expanded_dynamic_search_ad) ?
            json_encode([
                'description' => $expanded_dynamic_search_ad->getDescription(),
                'description2' => $expanded_dynamic_search_ad->getDescription2()
            ]) : NULL;
    }



    public function formatResponsiveSearchAd($responsive_search_ad)
    {
        if(is_null($responsive_search_ad)) return NULL;

        $headlines = $responsive_search_ad->getHeadlines();
        $descriptions = $responsive_search_ad->getDescriptions();
        $path1 = $responsive_search_ad->getPath1();
        $path2 = $responsive_search_ad->getPath2();
        
        $headlines_arr = [];
        foreach($headlines as $headline){
            $text = $headline->getText();
            $pinned_field = $headline->getPinnedField();
            $performance_label = $headline->getAssetPerformanceLabel();
            $policy_summary_info = $headline->getPolicySummaryInfo();

            $headlines_arr[] = [
                'text' => $text,
                'pinned_field' => $pinned_field,
                'p_label' => $performance_label,
                'policy_summary_info' => [
                    'review_status' => $policy_summary_info->getReviewStatus(),
                    'approval_status' => $policy_summary_info->getApprovalStatus()
                ]
            ];
        }

        $descriptions_arr = [];
        foreach($descriptions as $description){
            $text = $description->getText();
            $performance_label = $description->getAssetPerformanceLabel();
            $policy_summary_info = $description->getPolicySummaryInfo();

            $descriptions_arr[] = [
                'text' => $text,
                'performance_label' => $performance_label,
                'policy_summary_info' => [
                    'review_status' => $policy_summary_info->getReviewStatus(),
                    'approval_status' => $policy_summary_info->getApprovalStatus()
                ]
            ];
        }

        return [
            'responsive_search_description' => json_encode($descriptions_arr),
            'responsive_search_headlines' => json_encode($headlines_arr),
            'responsive_search_path1' => json_encode($path1),
            'responsive_search_path2' => json_encode($path2)
        ];
    }

    public function formatVideoAd($video_ad)
    {
        if(is_null($video_ad)) return NULL;

        $video = $video_ad->getVideo();
        $in_stream = $video_ad->getInStream();

        return [
            'video_ad_video_asset' => json_encode($video->getAsset()),
            'video_ad_in_stream' => json_encode([
                'action_button_label' => $in_stream->getActionButtonLabel(),
                'action_headline' => $in_stream->getActionHeadline()
            ])
        ];
    }

    public function formatVideoResponsiveAd($video_responsive_ad)
    {
        if(is_null($video_responsive_ad)) return NULL;

        $fields = [
            'headlines' => ['getHeadlines', 'getText'],
            'long_headlines' => ['getLongHeadlines', 'getText'],
            'descriptions' => ['getDescriptions', 'getText'],
            'ctas' => ['getCallToActions', 'getText'],
            'videos' => ['getVideos', 'getAsset'],
            'companion_banners' => ['getCompanionBanners', 'getAsset'],
        ];

        $headlines = $long_headlines = $descriptions = $ctas = $videos = $companion_banners = [];
        foreach($fields as $key => $field){
            $method = $field[0];
            $value_method = $field[1];

            $data = $video_responsive_ad->$method();
            foreach($data as $row){
                $$key[] = $row->$value_method();
            }
        }

        $breadcrumb1 = $video_responsive_ad->getBreadcrumb1();
        $breadcrumb2 = $video_responsive_ad->getBreadcrumb2();

        return [
            'video_responsive_ad_headlines' => json_encode($headlines),
            'video_responsive_ad_long_headlines' => json_encode($long_headlines),
            'video_responsive_ad_descriptions' => json_encode($descriptions),
            'video_responsive_ad_ctas' => json_encode($ctas),
            'video_responsive_ad_videos' => json_encode($videos),
            'video_responsive_ad_companion_banners' => json_encode($companion_banners),
            'video_responsive_ad_breadcrumb1' => json_encode($breadcrumb1), 
            'video_responsive_ad_breadcrumb2' => json_encode($breadcrumb2)
        ]; 
    }

    public function formatDiscoveryVideoResponsiveAd($discovery_video_responsive_ad)
    {
        if(is_null($discovery_video_responsive_ad)) return NULL;

        $breadcrumb1 = $discovery_video_responsive_ad->getBreadcrumb1();
        $breadcrumb2 = $discovery_video_responsive_ad->getBreadcrumb2();
        $videos = $discovery_video_responsive_ad->getVideos();
        $business_name = $discovery_video_responsive_ad->getBusinessName()->getText();

        $headlines = $long_headlines = $descriptions = $videos = $logo_images = [];
        $fields = [
            'headlines' => ['getHeadlines', 'getText'],
            'long_headlines' => ['getLongHeadlines', 'getText'],
            'descriptions' => ['getDescriptions', 'getText'],
            'videos' => ['getVideos', 'getAsset'],
            'logo_images' => ['getLogoImages', 'getAsset'],
        ];


        foreach($fields as $key => $field){
            $method = $field[0];
            $value_method = $field[1];
            $data = $discovery_video_responsive_ad->$method();
            foreach($data as $row){
                $$key[] = $row->$value_method();
            }
        }

        return [
            'discovery_video_responsive_ad_headlines' => json_encode($headlines),
            'discovery_video_responsive_ad_long_headlines' => json_encode($long_headlines),
            'discovery_video_responsive_ad_descriptions' => json_encode($descriptions),
            'discovery_video_responsive_ad_videos' => json_encode($videos),
            'discovery_video_responsive_ad_logo_images' => json_encode($logo_images),
            'discovery_video_responsive_ad_business_name' => json_encode($business_name),
            'discovery_video_responsive_ad_breadcrumb1' => json_encode($breadcrumb1),
            'discovery_video_responsive_ad_breadcrumb2' => json_encode($breadcrumb1)
        ];
    }

    public function formatResponsiveDisplayAd($responsive_display_ad)
    {
        if(is_null($responsive_display_ad)) return NULL;

        $marketing_images = $square_marketing_images = $headlines = $descriptions = [];
        $fields = [
            'marketing_images' => ['getMarketingImages', 'getAsset'],
            'square_marketing_images' => ['getSquareMarketingImages', 'getAsset'],
            'headlines' => ['getHeadlines', 'getText'],
            'descriptions' => ['getDescriptions', 'getText']
        ];

        $long_headlines = $responsive_display_ad->getLongHeadline()->getText();
        foreach($fields as $key => $field){
            $method = $field[0];
            $value_method = $field[1];
            $data = $responsive_display_ad->$method();
            foreach($data as $row){
                $$key[] = $row->$value_method();
            }
        }

        $business_name = $responsive_display_ad->getBusinessName();
        $allow_flexible_color = $responsive_display_ad->getAllowFlexibleColor();
        $cta = $responsive_display_ad->getCallToActionText();
        $format_settings = $responsive_display_ad->getFormatSetting();
        $control_spec = $responsive_display_ad->getControlSpec();

        return [
            'marketing_images' => json_encode($marketing_images),
            'square_marketing_images' => json_encode($square_marketing_images),
            'headlines' => json_encode($headlines),
            'long_headlines' => $long_headlines,
            'descriptions' => json_encode($descriptions),

            'business_name' => $business_name,
            'allow_flexible_color' => $allow_flexible_color,
            'cta' => $cta,
            'format_settings' => $format_settings,
            'control_spec' => json_encode([
                'enable_asset_enhancements' => $control_spec->getEnableAssetEnhancements(),
                'enable_autogen_video' => $control_spec->getEnableAutogenVideo(),
            ])
        ];
    }

    public function formatSmartCampaignAd($smart_campaign_ad)
    {
        if(is_null($smart_campaign_ad)) return NULL;

        $headlines = $descriptions = [];
        $fields = [
            'headlines' => ['getHeadlines', 'getText'],
            'descriptions' => ['getDescriptions', 'getText']
        ];

        foreach($fields as $key => $field){
            $method = $field[0];
            $value_method = $field[1];
            $data = $smart_campaign_ad->$method();
            foreach($data as $row){
                $$key[] = $row->$value_method();
            }
        }

        return [
            'smart_campaign_headlines' => json_encode($headlines),
            'smart_campaign_descriptions' => json_encode($descriptions)
        ];
    }


    public function formatActionItems($action_items)
    {
        $action_items_arr = [];
        if(!is_null($action_items)){
            foreach($action_items as $action_item){
                $action_items_arr[] = $action_item;
            }
        }

        return empty($action_items_arr) ? NULL : json_encode($action_items_arr);
    }

    public function formatLabels($labels)
    {
        $label_arr = [];
        foreach($labels as $label){
            $label_arr[] = $label;
        }

        return empty($label_arr) ? NULL : json_encode($label_arr);
    }

    public function pullAdGroupsAd($google_ads_account)
    {
        // Get fields
        $fields = $this->formatFields('ad_group_ad');
        
        // Query campaigns.
        $query = "SELECT {$fields},campaign.id, campaign.name FROM ad_group_ad";

        // Issues a search stream request.
        $stream = $this->service_client->searchStream(
            SearchGoogleAdsStreamRequest::build($google_ads_account, $query)
        );

        $data = [];

        // Iterates over all rows in all messages and prints the requested field values for the campaign in each row.
        foreach ($stream->iterateAllElements() as $googleAdsRow) {
            $campaign = $googleAdsRow->getCampaign();
            $campaign_id = $campaign->getId();
            $campaign_name = $campaign->getName();

            $ad_group_ad = $googleAdsRow->getAdGroupAd();
            $ad = $ad_group_ad->getAd();

            $responsive_search_ad = $ad->getResponsiveSearchAd();
            $expanded_dynamic_search_ad = $ad->getExpandedDynamicSearchAd();
            $image_ad = $ad->getImageAd();
            $video_ad = $ad->getVideoAd();

            $video_responsive_ad = $ad->getVideoResponsiveAd();
            $discovery_video_responsive_ad = $ad->getDiscoveryVideoResponsiveAd();

            $responsive_display_ad = $ad->getResponsiveDisplayAd();

            $system_managed_resource_source = $ad->getSystemManagedResourceSource();            
            $tracking_url_template = $ad->getTrackingUrlTemplate();
            $shopping_product_ad = $ad->getShoppingProductAd();
            $smart_campaign_ad = $ad->getSmartCampaignAd();
            $action_items = $ad_group_ad->getActionItems();
            $primary_status_reasons =  $ad_group_ad->getPrimaryStatusReasons();

            $labels = $ad_group_ad->getLabels();

            $ad_final_urls = $ad->getFinalUrls();
            $ad_final_urls_arr = [];
            if(!is_null($ad_final_urls)){
                foreach($ad_final_urls as $url){
                    $ad_final_urls_arr[] = $url;
                }
            }
            $ad_final_urls_arr = empty($ad_final_urls_arr) ? NULL : json_encode($ad_final_urls_arr);


            $ad_group_id = explode('/', $ad_group_ad->getAdGroup())[3];
            $data[] = [
                'gads_ad_id' => $ad->getId(),
                'ad_group_id' => $ad_group_id,
                'ad_name' => $ad->getName(),

                'action_items' => $this->formatActionItems($action_items),
                'status' => $ad_group_ad->getStatus(),
                'resource_name' => $ad_group_ad->getResourceName(),
                'primary_status_reasons' => $this->formatPrimaryStatusReasons($primary_status_reasons),
                'primary_status' => $ad_group_ad->getPrimaryStatus(),
                'ad_strength' => $ad_group_ad->getAdStrength(),
                'ad_labels' => $this->formatLabels($labels),
                'ad_travel_ad' => $ad->getTravelAd(),
                'ad_type' => $ad->getType(),

                'ad_device_preference' => $ad->getDevicePreference(),
                'ad_display_url' => $ad->getDisplayUrl(),
                'ad_final_url_suffix' => $ad->getFinalUrlSuffix(),
                'ad_final_urls' => $ad_final_urls_arr,
                'ad_resource_name' => $ad->getResourceName(),
                'ad_legacy_app_install_ad' => $ad->getLegacyAppInstallAd(),

                'expanded_dynamic_search_ad' => $this->formatExpandedDynamicSearchAd($expanded_dynamic_search_ad),
                'ad_tracking_url_template' => $ad->getTrackingUrlTemplate(),


                // New Table
                'responsive_search_ad' => $this->formatResponsiveSearchAd($responsive_search_ad),
                'smart_campaign_ad' => $this->formatSmartCampaignAd($smart_campaign_ad),

                // Video data related
                'video_ad' => $this->formatVideoAd($video_ad),
                'video_responsive_ad' => $this->formatVideoResponsiveAd($video_responsive_ad),
                'discovery_video_responsive_ad' => $this->formatDiscoveryVideoResponsiveAd($discovery_video_responsive_ad),

                // Responsive display ad
                'responsive_display_ad' => $this->formatResponsiveDisplayAd($responsive_display_ad),
            ];
        }

        return $data;
    }


    public function getMetrics($google_ads_account, $date, $data_type)
    {
        // Additional fields
        $data_mapping = [
            'campaign' => 'campaign.id, campaign.name, segments.date',
            'ad_group' => 'ad_group.id, ad_group.name, segments.date',
            'ad_group_ad' => 'ad_group_ad.ad.id, ad_group_ad.ad.name, ad_group_ad.ad_group, segments.date'
        ];
        $additional_fields = $data_mapping[$data_type];

        // Get fields
        $fields = $this->formatFields('metrics', $data_type);


        // Query 
        $query = "SELECT {$fields}, ${additional_fields} FROM $data_type WHERE metrics.clicks > 0 AND segments.date = '$date'";

        // Issues a search stream request.
        /** @var GoogleAdsServerStreamDecorator $stream */
        $stream = $this->service_client->searchStream(
            SearchGoogleAdsStreamRequest::build($google_ads_account, $query)
        );

        $data = [];
        // Iterates over all rows in all messages and prints the requested field values for the campaign in each row.
        foreach ($stream->iterateAllElements() as $googleAdsRow) {
            if($data_type === 'campaign') $api_data_type = $googleAdsRow->getCampaign();
            if($data_type === 'ad_group') $api_data_type = $googleAdsRow->getAdGroup();
            if($data_type === 'ad_group_ad') $api_data_type = $googleAdsRow->getAdGroupAd();

            if($data_type === 'ad_group_ad'){
                $api_data_type_id = explode('/', $api_data_type->getAdGroup())[3] . '-' .$api_data_type->getAd()->getId();
                $api_data_type_name = $api_data_type->getAd()->getName();
            } else {
                $api_data_type_id = $api_data_type->getId();
                $api_data_type_name = $api_data_type->getName();
            }

            $metric = $googleAdsRow->getMetrics();
            $interaction_event_types = $metric->getInteractionEventTypes();

            $main_metric = [
                'gads_data_id' => $api_data_type_id,
                'name' => $api_data_type_name,
                'active_view_cpm' => $metric->getActiveViewCpm(),
                'active_view_ctr' => $metric->getActiveViewCtr(),
                'active_view_impressions' => $metric->getActiveViewImpressions(),
                'active_view_measurability' => $metric->getActiveViewMeasurability(),
                'active_view_measurable_cost_micros' => $metric->getActiveViewMeasurableCostMicros(),
                'active_view_measurable_impressions' => $metric->getActiveViewMeasurableImpressions(),
                'active_view_viewability' => $metric->getActiveViewViewability(),            
                'search_absolute_top_impression_share' => $metric->getSearchAbsoluteTopImpressionShare(),
                'search_budget_lost_absolute_top_impression_share' => $metric->getSearchBudgetLostAbsoluteTopImpressionShare(),
                'search_budget_lost_impression_share' => $metric->getSearchBudgetLostImpressionShare(),
                'search_budget_lost_top_impression_share' => $metric->getSearchBudgetLostTopImpressionShare(),
                'search_click_share' => $metric->getSearchClickShare(),
                'search_exact_match_impression_share' => $metric->getSearchExactMatchImpressionShare(),
                'search_impression_share' => $metric->getSearchImpressionShare(),
                'search_rank_lost_absolute_top_impression_share' => $metric->getSearchRankLostAbsoluteTopImpressionShare(),
                'search_rank_lost_impression_share' => $metric->getSearchRankLostImpressionShare(),
                'search_rank_lost_top_impression_share' => $metric->getSearchRankLostTopImpressionShare(),
                'search_top_impression_share' => $metric->getSearchTopImpressionShare(),
                'search_volume' => $metric->getSearchVolume(),    
                'average_cost' => $metric->getAverageCost(),
                'average_cpc' => $metric->getAverageCpc(),
                'average_cpe' => $metric->getAverageCpe(),
                'average_cpm' => $metric->getAverageCpm(),
                'average_cpv' => $metric->getAverageCpv(),
                'average_pageviews' => $metric->getAveragePageViews(),
                'average_tiime_onsite' => $metric->getAverageTimeOnSite(),   
                'model_attributed_conversions' => $metric->getCurrentModelAttributedConversions(),
                'model_attr_cvrs_from_interactions_rate' => $metric->getCurrentModelAttributedConversionsFromInteractionsRate(),
                'model_attr_cvrs_from_interactions_value_per_interaction' => $metric->getCurrentModelAttributedConversionsFromInteractionsValuePerInteraction(),
                'model_attr_cvrs_value' => $metric->getCurrentModelAttributedConversionsValue(),
                'model_attr_cvrs_value_per_cost' => $metric->getCurrentModelAttributedConversionsValuePerCost(),

                'absolute_top_impression_percentage' => $metric->getAbsoluteTopImpressionPercentage(),                 
                'interaction_event_types' => $this->formatInteractionType($interaction_event_types), 
                'benchmark_average_max_cpc' =>$metric->getBenchmarkAverageMaxCpc(),
                'bench_mark_ctr' =>$metric->getBenchmarkCtr(),
                'bounce_rate' =>$metric->getBounceRate(),
                'clicks' =>$metric->getClicks(),
                'combined_clicks' => $metric->getCombinedClicks(),
                'combined_clicks_per_query' => $metric->getCombinedClicksPerQuery(),
                'combined_queries' => $metric->getCombinedQueries(),
                'content_bud_lost_impression_share' => $metric->getContentBudgetLostImpressionShare(),
                'content_impression_share' => $metric->getContentImpressionShare(),
                'cost_micros' => $metric->getCostMicros(),
                'cost_per_all_conversions' => $metric->getCostPerAllConversions(),
                'cost_per_conversion' => $metric->getCostPerConversion(),
                'cost_per_current_model_attributed_conversion' => $metric->getCostPerCurrentModelAttributedConversion(),
                'cross_device_conversions' => $metric->getCrossDeviceConversions(),
                'cross_device_conversions_value_micros' => $metric->getCrossDeviceConversionsValueMicros(),
                'ctr' => $metric->getCtr(),
                'engagement_rate' => $metric->getEngagementRate(),
                'engagements' => $metric->getEngagements(),                
                'impressions_from_store_reach' => $metric->getImpressionsFromStoreReach(),
                'impressions' => $metric->getImpressions(),
                'interaction_rate' => $metric->getInteractionRate(),
                'interactions' => $metric->getInteractions(),
                'invalid_click_rate' => $metric->getInvalidClickRate(),
                'invalid_clicks' => $metric->getInvalidClicks(),
                'message_chats' => $metric->getMessageChats(),
                'message_impressions' => $metric->getMessageImpressions(),
                'message_chat_rate' => $metric->getMessageChatRate(),
                'mobile_friendly_clicks_percentage' => $metric->getMobileFriendlyClicksPercentage(),
                'optimizations_core_uplift' => $metric->getOptimizationScoreUplift(),
                'optimizations_core_url' => $metric->getOptimizationScoreUrl(),
                'organic_clicks' => $metric->getOrganicClicks(),
                'organic_clicks_per_query' => $metric->getOrganicClicksPerQuery(),
                'organic_impressions' => $metric->getOrganicImpressions(),
                'organic_impressions_per_query' => $metric->getOrganicImpressionsPerQuery(),
                'organic_queries' => $metric->getOrganicQueries(),
                'percent_new_visitors' => $metric->getPercentNewVisitors(),
                'phone_calls' => $metric->getPhoneCalls(),
                'phone_impressions' => $metric->getPhoneImpressions(),
                'phone_through_rate' => $metric->getPhoneThroughRate(),
                'relative_ctr' => $metric->getRelativeCtr(),
                'speed_score' => $metric->getSpeedScore(),
                'average_target_cpa_micros' => $metric->getAverageTargetCpaMicros(),
                'average_target_roas' => $metric->getAverageTargetRoas(),
                'top_impression_percentage' => $metric->getTopImpressionPercentage(),
                'valid_accelerated_mobile_pages_clicks_percentage' => $metric->getValidAcceleratedMobilePagesClicksPercentage(),
                'value_per_all_conversions' => $metric->getValuePerAllConversions(),
                'value_per_all_conversions_by_conversion_date' => $metric->getValuePerAllConversionsByConversionDate(),
                'value_per_conversion' => $metric->getValuePerConversion(),
                'value_per_conversions_by_conversion_date' => $metric->getValuePerConversionsByConversionDate(),
                'value_per_current_model_attributed_conversion' => $metric->getValuePerCurrentModelAttributedConversion(),
                'sk_ad_network_installs' => $metric->getSkAdNetworkInstalls(),
                'sk_ad_network_total_conversions' => $metric->getSkAdNetworkTotalConversions(),
                'publisher_purchased_clicks' => $metric->getPublisherPurchasedClicks(),
                'publisher_organic_clicks' => $metric->getPublisherOrganicClicks(),
                'publisher_unknown_clicks' => $metric->getPublisherUnknownClicks(),
                'eligible_impressions_from_location_asset_store_reach' => $metric->getEligibleImpressionsFromLocationAssetStoreReach(),
                'orders' => $metric->getOrders(),
                'average_order_value_micros' => $metric->getAverageOrderValueMicros(),
                'average_cart_size' => $metric->getAverageCartSize(),
                'cost_of_goods_sold_micros' => $metric->getCostOfGoodsSoldMicros(),
                'gross_profit_micros' => $metric->getGrossProfitMicros(),
                'gross_profit_margin' => $metric->getGrossProfitMargin(),
                'revenue_micros' => $metric->getRevenueMicros(),
                'units_sold' => $metric->getUnitsSold(),
                'cross_sell_cost_of_goods_sold_micros' => $metric->getCrossSellCostOfGoodsSoldMicros(),
                'cross_sell_gross_profit_micros' => $metric->getCrossSellGrossProfitMicros(),
                'cross_sell_revenue_micros' => $metric->getCrossSellRevenueMicros(),
                'cross_sell_units_sold' => $metric->getCrossSellUnitsSold(),
                'lead_cost_of_goods_sold_micros' => $metric->getLeadCostOfGoodsSoldMicros(),
                'lead_gross_profit_micros' => $metric->getLeadGrossProfitMicros(),
                'lead_revenue_micros' => $metric->getLeadRevenueMicros(),
                'lead_units_sold' => $metric->getLeadUnitsSold(),
                'unique_users' => $metric->getUniqueUsers(),
                'average_impression_frequency_per_user' => $metric->getAverageImpressionFrequencyPerUser()
            ];

            // Video metrics
            $metric_video = [
                'video_quartile_p100_rate' => $metric->getVideoQuartileP100Rate(),
                'video_quartile_p25_rate' => $metric->getVideoQuartileP25Rate(),
                'video_quartile_p50_rate' => $metric->getVideoQuartileP50Rate(),
                'video_quartile_p75_rate' => $metric->getVideoQuartileP75Rate(),
                'video_view_rate' => $metric->getVideoViewRate(),
                'video_views' => $metric->getVideoViews(),
            ];

            // Conversion metrics
            $metric_conversion = [                
                'all_conversions_from_interactions_rate' => $metric->getAllConversionsFromInteractionsRate(),
                'all_conversions_value' => $metric->getAllConversionsValue(),
                'all_conversions_value_by_conversion_date' => $metric->getAllConversionsValueByConversionDate(),
                'all_new_customer_lifetime_Value' => $metric->getAllNewCustomerLifetimeValue(),
                'all_conversions' => $metric->getAllConversions(),
                'all_conversions_by_conversion_date' => $metric->getAllConversionsByConversionDate(),
                'all_conversions_value_per_cost' => $metric->getAllConversionsValuePerCost(),
                'all_conversions_from_click_to_call' => $metric->getAllConversionsFromClickToCall(),
                'all_conversions_from_directions' => $metric->getAllConversionsFromDirections(),
                'all_conversions_from_interactions_value_per_interaction' => $metric->getAllConversionsFromInteractionsValuePerInteraction(),
                'all_conversions_from_menu' => $metric->getAllConversionsFromMenu(),
                'all_conversions_from_order' => $metric->getAllConversionsFromOrder(),
                'all_conversions_from_other_engagement' => $metric->getAllConversionsFromOtherEngagement(),
                'all_conversions_from_store_visit' => $metric->getAllConversionsFromStoreVisit(),
                'all_conversions_from_store_website' => $metric->getAllConversionsFromStoreWebsite(),
                'conversion_last_received_request_datetime' =>$metric->getConversionLastReceivedRequestDateTime(),
                'conversion_last_conversion_date' =>$metric->getConversionLastConversionDate(),
                'content_rank_lost_impression_share' =>$metric->getContentRankLostImpressionShare(),
                'conversions_from_interactions_rate' =>$metric->getConversionsFromInteractionsRate(),
                'conversions_value' =>$metric->getConversionsValue(),
                'conversions_value_by_conversion_date' =>$metric->getConversionsValueByConversionDate(),
                'newcustomer_lifetime_value' =>$metric->getNewCustomerLifetimeValue(),
                'conversions_value_per_cost' =>$metric->getConversionsValuePerCost(),
                'conversions_from_interactions_value_perinteraction' =>$metric->getConversionsFromInteractionsValuePerInteraction(),
                'conversions' =>$metric->getConversions(),
                'conversions_by_conversion_date' =>$metric->getConversionsByConversionDate(),
                'all_conversions_from_location_asset_click_to_call' => $metric->getAllConversionsFromLocationAssetClickToCall(),
                'all_conversions_from_location_asset_directions' => $metric->getAllConversionsFromLocationAssetDirections(),
                'all_conversions_from_location_asset_menu' => $metric->getAllConversionsFromLocationAssetMenu(),
                'all_conversions_from_location_asset_order' => $metric->getAllConversionsFromLocationAssetOrder(),
                'all_conversions_from_location_asset_other_engagement' => $metric->getAllConversionsFromLocationAssetOtherEngagement(),
                'all_conversions_from_location_asset_store_visits' => $metric->getAllConversionsFromLocationAssetStoreVisits(),
                'all_conversions_from_location_asset_website' => $metric->getAllConversionsFromLocationAssetWebsite(),
            ];

            // Viewthrough metrics
            $metric_viewthrough = [
                'view_through_conversions_from_location_asset_clicktocall' => $metric->getViewThroughConversionsFromLocationAssetClickToCall(),
                'view_through_conversions_from_location_asset_directions' => $metric->getViewThroughConversionsFromLocationAssetDirections(),
                'view_through_conversions_from_location_asset_menu' => $metric->getViewThroughConversionsFromLocationAssetMenu(),
                'view_through_conversions_from_location_asset_order' => $metric->getViewThroughConversionsFromLocationAssetOrder(),
                'view_through_conversions_from_location_asset_other_engagement' => $metric->getViewThroughConversionsFromLocationAssetOtherEngagement(),
                'view_through_conversions_from_location_asset_store_visits' => $metric->getViewThroughConversionsFromLocationAssetStoreVisits(),
                'view_through_conversions_from_location_asset_website' => $metric->getViewThroughConversionsFromLocationAssetWebsite(),
                'view_through_conversions' => $metric->getViewThroughConversions(),
            ];

            // Auction insight metric
            $metric_auction_insight = [
                'auction_insight_search_absolute_top_impression_percentage' => $metric->getAuctionInsightSearchAbsoluteTopImpressionPercentage(),
                'auction_insight_search_impression_share' => $metric->getAuctionInsightSearchImpressionShare(),
                'auction_insight_search_outranking_share' => $metric->getAuctionInsightSearchOutrankingShare(),
                'auction_insight_search_overlap_rate' => $metric->getAuctionInsightSearchOverlapRate(),
                'auction_insight_search_position_above_rate' => $metric->getAuctionInsightSearchPositionAboveRate(),
                'auction_insight_search_top_impression_percentage' => $metric->getAuctionInsightSearchTopImpressionPercentage(),
            ];


            $data[] = [
                'metric' => $main_metric,
                'metric_video' => $metric_video,
                'metric_conversion' => $metric_conversion,
                'metric_viewthrough' => $metric_viewthrough,
                'metric_auction_insight' => $metric_auction_insight,
            ];
        }

        return $data;
    }

    public function getCampaigns($google_ads_account)
    {   
        // Get fields
        $fields = $this->formatFields('campaign');
        
        // Query campaigns.
        $query = "SELECT {$fields}  FROM campaign";
        
        // Issues a search stream request - GoogleAdsServerStreamDecorator $stream */
        $stream = $this->service_client->searchStream(
            SearchGoogleAdsStreamRequest::build($google_ads_account, $query)
        );

        // Iterates over all rows in all messages and prints the requested field values for
        // the campaign in each row.
        $campaigns_data = [];
        foreach ($stream->iterateAllElements() as $googleAdsRow) {
            /** @var GoogleAdsRow $googleAdsRow */
            $campaign = $googleAdsRow->getCampaign();

            $network_settings = $campaign->getNetworkSettings();
            $asset_automation_settings = $campaign->getAssetAutomationSettings();
            $campaign_target_cpa = $campaign->getTargetCpa();
            $frequency_caps = $campaign->getFrequencyCaps();
            $primary_status_reasons = $campaign->getPrimaryStatusReasons();
            $geo_target_type_setting = $campaign->getGeoTargetTypeSetting();
            $audience_setting = $campaign->getAudienceSetting();
            $shopping_setting = $campaign->getShoppingSetting();
            $targeting_setting = $campaign->getTargetingSetting();
            $maximize_conversions = $campaign->getMaximizeConversions();
            $bidding_strategy = $campaign->getCampaignBiddingStrategy();

            $campaigns_data[] = [
                'gads_campaign_id' => $campaign->getId(),
                'name' => $campaign->getName(),
                'start_date' => $campaign->getStartDate(), 
                'end_date' => $campaign->getEndDate(), 
                'bidding_strategy' => $bidding_strategy,
                'bidding_strategy_system_status' => $campaign->getBiddingStrategySystemStatus(),
                'bidding_strategy_type' => $campaign->getBiddingStrategyType(),
                'advertising_channel_type' => $campaign->getAdvertisingChannelType(),
                'advertising_channel_sub_type' => $campaign->getAdvertisingChannelSubType(),

                'maximize_conversions' => $this->formatMaximizeConversions($maximize_conversions),
                'url_expansion_opt_out' => $campaign->getUrlExpansionOptOut(),
                'video_brand_safety_suitability' => $campaign->getVideoBrandSafetySuitability(),
                'primary_status_reasons' => $this->formatPrimaryStatusReasons($primary_status_reasons),
                'experiment_type' => $campaign->getExperimentType(),
                'serving_status' => $campaign->getServingStatus(),
                'ad_serving_optimization_status' => $campaign->getAdServingOptimizationStatus(),
                'base_campaign' => $campaign->getBaseCampaign(),
                'status' => $campaign->getStatus(),
                'resource_name' => $campaign->getResourceName(),
                'primary_status' => $campaign->getPrimaryStatus(),
                'campaign_budget' => $campaign->getCampaignBudget(),
                'final_url_suffix' => $campaign->getFinalUrlSuffix(),
                'frequency_caps' => $this->formatFrequencyCap($frequency_caps),
                'payment_mode' => $campaign->getPaymentMode(),
                'optimization_score' => $campaign->getOptimizationScore(),
                'target_cpa' => $this->formatTargetCPA($campaign_target_cpa),

                'targeting_setting' => $this->formatTargetingSetting($targeting_setting),
                'shopping_setting' => $this->formatShoppingSetting($shopping_setting),
                'audience_setting' => is_null($audience_setting) ? NULL : json_encode(['use_audience_grouped' => $audience_setting->getUseAudienceGrouped()]),
                'geo_target_type_setting' => json_encode([
                    'positive_geo_target_type' => $geo_target_type_setting->getPositiveGeoTargetType(),
                    'negative_geo_target_type' => $geo_target_type_setting->getNegativeGeoTargetType()
                ]),                
                'asset_automation_settings' => $this->formatAssetAutomationSettings($asset_automation_settings),
                'network_settings' => $this->formatNetworkSettings($network_settings),
            ];
        }

        return $campaigns_data;
    }

    public function getAdGroups($google_ads_account)
    {
        // Get fields
        $fields = $this->formatFields('ad_group');
        
        // Query campaigns.
        $query = "SELECT {$fields}, campaign.id, campaign.name FROM ad_group";
        
        // Issues a search stream request - GoogleAdsServerStreamDecorator $stream */
        $stream = $this->service_client->searchStream(
            SearchGoogleAdsStreamRequest::build($google_ads_account, $query)
        );


        $data = [];
        foreach ($stream->iterateAllElements() as $googleAdsRow) {
            $campaign = $googleAdsRow->getCampaign();
            $ad_group = $googleAdsRow->getAdGroup();


            $primary_status_reasons = $ad_group->getPrimaryStatusReasons();
            $targeting_setting = $ad_group->getTargetingSetting();
            $audience_setting = $ad_group->getAudienceSetting();

            $data[] = [
                'gads_ad_group_id' => $ad_group->getId(),
                'gads_campaign_id' => $campaign->getId(),
                'name' => $ad_group->getName(),
                'campaign_name' => $campaign->getName(),

                'status' => $ad_group->getStatus(),
                'resource_name' => $ad_group->getResourceName(),
                'type' => $ad_group->getType(),
                'tracking_url_template' => $ad_group->getTrackingUrlTemplate(),
                'targeting_setting' => $this->formatTargetingSetting($targeting_setting),
                'target_roas' => $ad_group->getTargetRoas(),
                'target_cpm_micros' => $ad_group->getTargetcpmMicros(),
                'target_cpa_micros' => $ad_group->getTargetCpaMicros(),
                'primary_status_reasons' => $this->formatPrimaryStatusReasons($primary_status_reasons),
                'primary_status' => $ad_group->getPrimaryStatus(),
                'percent_cpc_bid_micros' => $ad_group->getPercentCpcBidMicros(),
                'optimized_targeting_enabled' => $ad_group->getOptimizedTargetingEnabled(),
                'final_url_suffix' => $ad_group->getFinalUrlSuffix(),
                'effective_target_roas_source' => $ad_group->getEffectiveTargetRoasSource(),
                'effective_target_roas' => $ad_group->getEffectiveTargetRoas(),
                'effective_target_cpa_source' => $ad_group->getEffectiveTargetCpaSource(),
                'effective_target_cpa_micros' => $ad_group->getEffectiveTargetCpaMicros(),
                'effective_cpc_bid_micros' => $ad_group->getEffectiveCpcBidMicros(),
                'display_custom_bid_dimension' => $ad_group->getDisplayCustomBidDimension(),
                'cpv_bid_micros' => $ad_group->getCpvBidMicros(),
                'cpm_bid_micros' => $ad_group->getCpmBidMicros(),
                'cpc_bid_micros' => $ad_group->getCpcBidMicros(),
                'base_ad_group' => $ad_group->getBaseAdGroup(),
                'audience_setting' => is_null($audience_setting) ? NULL : json_encode(['use_audience_grouped' => $audience_setting->getUseAudienceGrouped()]),
                'ad_rotation_mode' => $ad_group->getAdRotationMode()
            ];
        }

        return $data;
    }

    public function uploadConversion($data)
    {
        // Google Ads account id (brand)
        $customer_id = $data['gads_account'];
        
        // Define conversion action resource name
        $conversion_action_resource_name = ResourceNames::forConversionAction(
            $customer_id, $data['conversion_action_id']
        );

        // User data
        $email = hash('sha256', $data['user_email']);
        $phone_number = hash('sha256', $data['user_phone_number']);

        // Set the conversion datetime to central time zone
        $conversion_date_time = new \DateTime($data['order_datetime'], new \DateTimeZone('America/New_York'));
        $target_time_zone = $customer_id == 3156301088 ?  new \DateTimeZone('America/Chicago') : new \DateTimeZone('America/Denver'); // Chicago -5 || Denver -6
        $conversion_date_time->setTimezone($target_time_zone);
        $conversion_date_time = $conversion_date_time->format('Y-m-d H:i:sP');        

        $click_conversion = new ClickConversion([
            'conversion_action' => $conversion_action_resource_name,
            'conversion_date_time' => $conversion_date_time,
            'conversion_value' => $data['order_value'], // Set the conversion value
            'currency_code' => 'USD',
            'gclid' => $data['gclid'],
            'user_identifiers' => [
                new UserIdentifier(['hashed_email' => $email]),
                new UserIdentifier(['hashed_phone_number' => $phone_number]),
            ]
        ]);

        // Create a request to upload the click conversion
        $conversionRequest = new UploadClickConversionsRequest([
            'customer_id' => $customer_id,
            'conversions' => [$click_conversion],
            'partial_failure' => true
        ]);

        // Execute the request
        $response = $this->googleAdsClient->getConversionUploadServiceClient()->uploadClickConversions($conversionRequest);

        // Check for errors in the response
        if ($response->hasPartialFailureError()) {
            return [
                'success' => false,
                'message' => $response->getPartialFailureError()->getMessage()
            ];
        } else {
            /** @var ClickConversionResult $result */
            foreach ($response->getResults() as $result) {
                return [
                    'success' => true,
                    'message' => "Uploaded click conversion that occurred at ". $result->getConversionDateTime() ." for Google Click ID:" . $result->getGclid(),
                ];
            }
        }
    }
}
