<?php

  function getGeoInfo(){
    $geo;

    if(function_exists('geoip_detect2_get_info_from_current_ip()')) {
      $geo = geoip_detect2_get_info_from_current_ip();
    }

    if(isset($_GET['type']) && $_GET['type'] == 'json') {
      return json_encode($geo);
    }

    return 'nea';
  }


 ?>
