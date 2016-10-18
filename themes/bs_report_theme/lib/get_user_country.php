<?php

function getUserCountry() {
  if(function_exists('geoip_detect2_get_info_from_current_ip')) {
    if(geoip_detect2_get_info_from_current_ip()->country) {
      return geoip_detect2_get_info_from_current_ip()->country->names->en;
    }
  }

  return '';
}
