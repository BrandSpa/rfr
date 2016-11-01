<?php
  
  
  function getCountriesInfo() {
    $name = 'Colombia';
    $json = file_get_contents(__DIR__ . '/countries_info.json');
    $countries = json_decode($json, true);
    return array_filter($countrie, function($arr)  use($name) {
      return $arr['name'] == $name;
    }
  );

  }

?>
