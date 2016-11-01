<?php
  
  
  function getCountriesInfo($name = 'United States') {
    $json = file_get_contents(__DIR__ . '/countries_info.json');
    
    $countries = json_decode($json, true);

    array_filter($countries, function($arr) use($name) {
      return $arr['name'] == $name;
    });
    
    return $countries;
  }

?>
