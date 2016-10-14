<?php

function bs_map_sc($atts, $content = null) {
  $at = shortcode_atts( array(
       
    ), $atts );
  ob_start();
 
 include 'mp.php';

  return ob_get_clean();
  }

  add_shortcode( 'bs_map', 'bs_map_sc' );
?>