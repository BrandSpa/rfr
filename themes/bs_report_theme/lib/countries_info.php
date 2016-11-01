<?php

  function getCountriesInfo() {
    $json = file_get_contents(__DIR__ . '/countries_info.json');
    return json_decode($json, true);
  }

?>
