<?php
  
  
  function getCountriesInfo() {
    $name = 'Colombia';
    $json = file_get_contents(__DIR__ . '/countries_info.json');
    return array_filter(json_decode($json, true), function($arr)  use($name) {
      return $arr['name'] == $name;
    }
  )

  }

?>
