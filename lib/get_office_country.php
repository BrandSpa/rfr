<?php
include_once(get_template_directory() . '/lib/offices_countries.php');

  function getOfficeCountry() {
    $countries = getOfficesCountries();
    $countryName = "default";

    if(function_exists('getCountry')) {
      //$geo = geoip_detect2_get_info_from_current_ip();
      $countryName =  getCountry();
    }

    if(empty($countryName) || !in_array($countryName, $countries)) {
      $countryName = "default";
    }

    return $countryName;
  }
?>
