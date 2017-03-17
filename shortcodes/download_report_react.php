<?php
/**
 * "title" =>  gett('DOWNLOAD REPORT'),
 * "name" => gett('Name'),
 * "email" =>  gett('Email'),
 * "required" => gett('Required'),
 * "invalid" => gett('Invalid'),
 * "language" => gett('Language'),
 * "country" => gett('Country'),
 * "btn" => gett('Download Executive Summary'),
 * "languages" => pll_the_languages(array('raw'=>1))
 */

function donwload_report_sc($atts, $content = null) {
  $at = shortcode_atts( array(), $atts );
  
  ob_start();
 
?>

<div class="bs-download-report"></div>

<?php

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
