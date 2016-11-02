<?php
    
  function getCountriesInfo($name = 'US') {
    $json = file_get_contents(__DIR__ . '/countries_info.json');
    
    $countries = json_decode($json);

    $country = array_filter($countries, function($arr) use($name) {
      return $arr->iso_code == $name;
    });

    return $country[array_keys($country)[0]];
  }

?>
