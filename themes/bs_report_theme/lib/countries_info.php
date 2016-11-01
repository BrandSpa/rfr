<?php

  function getCountriesInfo() {
    $json = file_get_contents('countries_info.json');
    return json_decode($json, true);
  }

?>
