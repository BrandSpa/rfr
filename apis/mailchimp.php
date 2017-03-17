<?php
$dir_base =  str_replace('apis', '', __DIR__);

if( file_exists($dir_base . '/vendor/autoload.php') ) {

  require $dir_base . 'vendor/autoload.php';
  
  function getList($key) {

    $lists = array(
      "default" => "21bcce46c6",
      "en" => "21bcce46c6",
      "es" => "43548c4f98",
      "fr" => "1bc8958e31",
      "pt" => "b5f7376421",
      "ptb" => "b5f7376421",
      "de" => "2593bd300f",
      "it" => "e41dae5ed7",
      "nl" => "d0860a70f5",
    );

    if(empty($key)) $key = "default";

    if(!array_key_exists($key, $lists)) $key = "default";

    return $lists[$key];
  }

  function mc_subscribe($data, $lang, $apiKey) {
    $listId = getList($lang);

    $options = array(
      'auth' => array('user', $apiKey)
    );

    $headers = array('Accept' => 'application/json', 'content-type' => 'application/json');
    $urlBase = 'http://us13.api.mailchimp.com/3.0/';
    $req = Requests::post($urlBase . 'lists/' . $listId . '/members', $headers, $data, $options);
    return $req->body;
  }
 
}

?>