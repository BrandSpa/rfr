<?php

function donwload_report_react_sc($atts, $content = null) {
  $at = shortcode_atts( array(), $atts );
  
  ob_start();

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
 
?>

<div class="bs-download-report" data-props='<?php echo cleanQuote(json_encode($props)) ?>'></div>

<?php

  return ob_get_clean();
}

add_shortcode( 'bs_donwload_report_react', 'donwload_report_react_sc' );

function bs_donwload_report_react_vc() {
    vc_map( 
      array(
        "name" =>  "Download Report react",
        "base" => "bs_donwload_report_react",
        "category" =>  "BS",
        "params" => array()
      ) 
    );
}

add_action( 'vc_before_init', 'bs_donwload_report_react_vc' );
?>
