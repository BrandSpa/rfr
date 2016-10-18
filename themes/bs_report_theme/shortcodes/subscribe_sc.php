<?php
function subscribe_form_sc($atts, $content = null) {
  $at = shortcode_atts( array(), $atts );
  
  ob_start();
 
  include 'subscribe_form.php';

  return ob_get_clean();
}

add_shortcode( 'bs_subscribe_form', 'subscribe_form_sc' );

function bs_subscribe_form_vc() {
    vc_map( 
      array(
        "name" =>  "Subscribe form",
        "base" => "bs_subscribe_form",
        "category" =>  "BS",
        "params" => array()
      ) 
    );
}

add_action( 'vc_before_init', 'bs_subscribe_form_vc' );
?>
