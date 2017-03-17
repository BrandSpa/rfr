<?php
function donwload_report_sc($atts, $content = null) {
  $at = shortcode_atts( array(), $atts );

  	$props = [
		"texts" => [
			"title" =>  gett('DOWNLOAD REPORT'),
			"name" => gett('Name'),
			"email" =>  gett('Email'),
			"required" => gett('Required'),
			"invalid" => gett('Invalid'),
			"language" => gett('Language'),
			"country" => gett('Country'),
			"btn" => gett('Download Executive Summary')
		],
		"country" => getCountry(),
		"countries" => getCountries(),
		"language" => function_exists('pll_the_languages') ? pll_current_language('slug') : 'en',
		"languages" => function_exists('pll_the_languages') ? pll_the_languages(array('raw'=>1)) : [],
		"thanks" => gett('http://religious-freedom-report.org/thank-you-download/')
	];
  
  ob_start();
 ?>

 <div class="bs-download-report" data-props='<?php echo cleanQuote(json_encode($props)) ?>'></div>

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
