<?php
namespace App\Services\Quickbox3plApi;

use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
class Quickbox3plApiService
{
    private $accessToken, $baseAddress; 
    protected $endPoint = [
        'tokenAuth' => '/AuthServer/api/Token',
        'getStockSummaries' => '/inventory/stocksummaries', 
        'getItemAliases' => '/customers/373/itemaliases', 
        'getOrders' => '/orders', 
        'getReceivers' => '/inventory/receivers', 
        'getItems' => '/customers/373/items', 
        'getCustomers' => '/customers', 
        'getAdjustments' => '/inventory/adjustments', 
    
        // 'suppliers'=> 'customers/373/suppliers', 
        // 'customers'=> 'customers', 
        'inventory' => '/inventory/stocksummaries', 
        // 'orders' => '/orders/' 
    ];

    public function __construct()
    {
        $this->accessToken = config('services.quickbox3pl')['access_token'];
        $this->baseAddress = config('services.quickbox3pl')['base_url'];
        $this->accessToken = $this->authToken();

    }

    function customers($pgnum, $pgsiz){
      return $this->fetchData('getCustomers', $pgnum, $pgsiz);
    }
    
    function items($pgnum, $pgsiz){
      return $this->fetchData('getItems', $pgnum, $pgsiz);
    }

    function receivers($pgnum, $pgsiz){
      return $this->fetchData('getReceivers', $pgnum, $pgsiz);
    }

    function orders($pgnum, $pgsiz){
      return $this->fetchData('getOrders', $pgnum, $pgsiz);
    }

    function item_aliases($pgnum, $pgsiz){
      return $this->fetchData('getItemAliases', $pgnum, $pgsiz);
    }

    function stock_summaries($pgnum, $pgsiz)
    {
      return $this->fetchData('getStockSummaries', $pgnum, $pgsiz);
    }

    function inventory_adjustments($pgnum, $pgsiz)
    {
      return $this->fetchData('getAdjustments', $pgnum, $pgsiz);
    }

    function fetchData($key, $pgnum, $pgsiz){
      $url = $this->baseAddress . $this->endPoint[$key];
      $headers = $this->_header('bearer');

      try {
          $response = Http::withHeaders($headers)->get($url, [
            'pgsiz' => $pgsiz,
            'pgnum' => $pgnum,
          ]);
          
          if ($response->successful()) {
              return $response;
          } else {
              Log::error('Failed to fetch records: ' . $response->status());
              return null;
          }
      } catch (\Exception $e) {
          Log::error('Exception occurred while fetching records: ' . $e->getMessage());
          return null;
      }
    }

    function authToken(){
      $lastRefresh = Cache::get('quickbox3pl_token_last_refresh', Carbon::now()->subHours(1)); // default to 1 hour ago
      $currentTime = Carbon::now();
      if ($currentTime->diffInMinutes($lastRefresh) >= 45) {
          $this->generateToken();
      }
      return Cache::get('quickbox3pl_access_token');
    }

    function generateToken(){
      $url = $this->baseAddress . $this->endPoint['tokenAuth'];
      $username = config('services.quickbox3pl')['client_id'];
      $password = config('services.quickbox3pl')['secret_key'];
      $rawData = [
          'grant_type' => config('services.quickbox3pl')['grant_type'],
          'user_login_id' => config('services.quickbox3pl')['client_id'] 
      ];

      $headers = $this->_header('basic');

      try {
          $response = Http::withBasicAuth($username,$password)->withHeaders($headers)->post($url, $rawData);
          $responseData = $response->json();
          $newToken = $responseData['access_token'];
          Cache::put('quickbox3pl_access_token', $newToken);
          Cache::put('quickbox3pl_token_last_refresh', Carbon::now());
          return $newToken;
      } catch (\Exception $e) {
          // Handle exception (log, throw, etc.)
          Log::error('Token generation failed: ' . $e->getMessage());
          throw $e; // or handle it accordingly
      }
  }

    function generateToken2(){
      $url = $this->baseAddress . $this->endPoint['tokenAuth'];
      $rawData = [
          'grant_type' => config('services.quickbox3pl')['grant_type'],
          'user_login_id' => config('services.quickbox3pl')['client_id'] 
      ];
      
      // Basic Auth credentials
      $username = config('services.quickbox3pl')['client_id'];
      $password = config('services.quickbox3pl')['secret_key'];
      $basicAuth = base64_encode("{$username}:{$password}");

      $headers = array_merge($this->_header('basic'), [
        'Authorization' => 'Basic ' . $basicAuth
      ]);

      try {
          $response = Http::withHeaders($headers)->post($url, $rawData);
          $responseData = $response->json();
          $newToken = $responseData['access_token'];
          Cache::put('quickbox3pl_access_token', $newToken);
          Cache::put('quickbox3pl_token_last_refresh', Carbon::now());
          return $newToken;
      } catch (\Exception $e) {
          // Handle exception (log, throw, etc.)
          Log::error('Token generation failed: ' . $e->getMessage());
          throw $e; // or handle it accordingly
      }
  }

    function _header($type ="basic"){
        $content_type = $type =="basic"?'application/json':'application/hal+json';
        return [
          'Host' => 'secure-wms.com',
          'Content-Type' => $content_type,
          'Accept: application/hal+json',
          'Accept-Language: en-US,en;q=0.8',
          'Authorization' => $type." ". $this->accessToken, 
        ];
      }
  
}
