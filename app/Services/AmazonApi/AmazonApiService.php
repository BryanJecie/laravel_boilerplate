<?php
namespace App\Services\AmazonApi;

use GuzzleHttp\Client;
use SellingPartnerApi\SellingPartnerApi;
use SellingPartnerApi\Enums\Endpoint;

class AmazonApiService
{
    private $connector;
    protected $marketplace_ids = ['ATVPDKIKX0DER'];

    public function __construct($account)
    {
        $services = config('services');

        $amazon_creds = isset($services[$account]) ? $services[$account] : NULL;
        if(is_null($amazon_creds))  die ('Configuration not found');

        $this->connector = SellingPartnerApi::make(
            $amazon_creds['AMAZON_LWA_CLIENT_ID'],
            $amazon_creds['AMAZON_LWA_CLIENTSECRET'],
            $amazon_creds['AMAZON_LWA_REFRESHTOKEN'],
            Endpoint::NA,  // Or Endpoint::EU, Endpoint::FE, Endpoint::NA_SANDBOX, etc.
        )->seller();
    }


    public function getOrders($start_date, $end_date)
    {
        $order_token = false;
        $orders_arr = [];

        do {
            try {
                $ordersApi = $this->connector->orders();
                $response = $ordersApi->getOrders(
                    lastUpdatedAfter: $start_date,
                    lastUpdatedBefore: $end_date,
                    nextToken: $order_token,
                    marketplaceIds: $this->marketplace_ids
                );
                $dto = $response->dto();
                $order_token = $dto->payload->nextToken;
                $orders = $dto->payload->orders;

                $counter = count($orders);
                foreach($orders as $order){
                    $oitem_next_token = false;
                    $order_item_arr = [];

                    do {
                        try {
                            $amz_order_id = $order->amazonOrderId;
                            $oitems = $ordersApi->getOrderItems(
                                orderId: $amz_order_id,
                                nextToken: $oitem_next_token
                            );
                            $dto = $oitems->dto();
                            $order_items = $dto->payload->orderItems;
                            $oitem_next_token = $dto->payload->nextToken;

                            foreach($order_items as $order_item){
                                $order_item_arr[] = $order_item;
                            }        
                        } catch (\Exception $e) {
                            echo "Retrying Order Item API: $oitem_next_token \n";
                            sleep(5);
                        }
                    } while (!is_null($oitem_next_token));

                    $orders_arr[] = [
                        'order' => $order,
                        'order_item' => $order_item_arr
                    ];

                    $counter--;
                    echo "Amazon Order Pulling: $counter \n";
                }
            } catch (\Exception $e) {
                echo "Retrying Order API: $order_token " . $e->getMessage() . "\n";
                sleep(5);
            }
        } while (!is_null($order_token));

        return $orders_arr;
    }
    
    public function financialEventById($order_id)
    {
        $apiInstance = new FinancesV0Api($this->CONFIG);

        $posted_date = NULL;
        $has_error = false;
        $loop_counter = 500;

        do {
            try {               
                $events = $apiInstance->listFinancialEventsByOrderId($order_id);
                foreach($events as $event){
                    if($event && !is_array($event)){
                        $finance_events = $event->getFinancialEvents();
                        foreach($finance_events as $evs){
                            foreach($evs as $ev){
                                if(is_object($ev)){
                                    if(get_class($ev) === "SellingPartnerApi\Model\FinancesV0\ShipmentEvent"){
                                        if($ev->getPostedDate() != null){
                                            $posted_date = $ev->getPostedDate();
                                            $has_error = false;
                                        }
                                    }       
                                }
                            }
                        }
                    }
                }
            } catch (\Exception $e) {
                $loop_counter--;
                $has_error = true;
                Logger('SetAmazonOrderShipmentPostedDate ' . $order_id . ' | FAILED | RETRYING'  . $loop_counter);
            }
        } while ($has_error && $loop_counter);

        return $posted_date;
    }

    public function getPricingByASINs($asins)
    {
        $apiInstance = new ProductPricingV0Api($this->CONFIG);
        $marketplace_id = 'ATVPDKIKX0DER'; // string | A marketplace identifier. Specifies the marketplace for which prices are returned.
        $item_type = 'Asin'; // string | Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter.
        $skus = []; // string[] | A list of up to twenty seller SKU values used to identify items in the given marketplace.
        $item_condition = ''; // string | Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
        $offer_type = ''; // string | Indicates whether to request pricing information for the seller's B2C or B2B offers. Default is B2C.

        try {
            $data = [];
            $result = $apiInstance->getPricing($marketplace_id, $item_type, $asins, $skus, $item_condition, $offer_type);

            foreach($result->payload as $row){
                $products = $row->getProduct();
                $asin = $products->getIdentifiers()->getMarketplaceAsin()->getAsin();
                $offers = $products->getOffers();

                if($offers){                    
                    foreach($offers as $offer){
                        $sku = $offer->getSellerSku();
                        $buying_price = $offer->getBuyingPrice();

                        $amt = 0.00;
                        if($buying_price) $amt = $buying_price->getListingPrice()->getAmount();
                        $data[$asin][$sku] = $amt;
                    }
                }
            }

            return $data;
        } catch (Exception $e) {}
    }

    public function getFulfilmentORders($date)
    {
        $apiInstance = new FbaOutboundV20200701Api($this->CONFIG);
        $query_start_date = '2023-12-05T00:00:00'; // string | A date used to select fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order. Must be in ISO 8601 format.
        $next_token = ''; // string | A string token returned in the response to your previous request.

        try {
            $result = $apiInstance->listAllFulfillmentOrders($query_start_date, $next_token);
            print_r($result->payload->getFulfillmentOrders());
        } catch (Exception $e) {
            echo 'Exception when calling FbaOutboundV20200701Api->listAllFulfillmentOrders: ', $e->getMessage(), PHP_EOL;
        }
    }
}
