<?php

function bs_map_sc($atts, $content = null) {
  $at = shortcode_atts( array(
       
    ), $atts );
  ob_start();
 
 include 'mp.php';

  return ob_get_clean();
  }

  add_shortcode( 'bs_map', 'bs_map_sc' );

  function bs_map_vc() {
    vc_map( 
      array(
        "name" =>  "BS Map",
        "base" => "bs_map",
        "category" =>  "BS",
        "params" => array()
      ) 
    );
  }

add_action( 'vc_before_init', 'bs_map_vc' );

?>