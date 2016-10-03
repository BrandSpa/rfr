<?php
  function gett($string, $html = false) {
    if(function_exists('pll__')) {
      if(pll__($string)) {
        if($html) return strip_tags(apply_filters('the_content', pll__($string)), '<br>');
        return pll__($string);
      }
    }
    return $string;
  }

 ?>
