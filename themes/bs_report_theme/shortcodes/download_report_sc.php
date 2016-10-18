<?php
function donwload_report_sc($atts, $content = null) {
  $at = shortcode_atts( array(), $atts );
  
  ob_start();
 
  include 'donwload_report.php';

  return ob_get_clean();
}

add_shortcode( 'bs_donwload_report', 'donwload_report_sc' );

function bs_donwload_report_vc() {
    vc_map( 
      array(
        "name" =>  "Download Report",
        "base" => "bs_donwload_report",
        "category" =>  "BS",
        "params" => array()
      ) 
    );
}

add_action( 'vc_before_init', 'bs_donwload_report_vc' );
?>
