<?php

function getLang() {
  $default = 'en';
  
  if( function_exists('pll_current_language') ) {
    $default = pll_current_language();
  }

  return $default;
}


