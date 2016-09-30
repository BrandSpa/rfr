<?php
  function gett($string) {
    if(function_exists('pll__')) {
      if(pll__($string)) {
        return pll__($string);
      }
    }
    return $string;
  }

 ?>
