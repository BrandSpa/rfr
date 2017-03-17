<?php
function subscribe_form_sc($atts, $content = null) {
  $at = shortcode_atts( array(), $atts );
    $props = [
		"texts" => [
			"country" => gett('Country'),
			"email" => gett('Email'),
			"name" => gett('Name'),
			"subscribe" => gett('Subscribe'),
			"invalid" => gett('Invalid')
		],
		"lang"=> getLang(), 
  	"country" => getCountry(),
  	"countries" => getCountries(),
  	"thanks" => gett('http://religious-freedom-report.org/thank-you/')
	];
	
  
  ob_start();
 ?>
<div class="bs-subscribe" data-props='<?php echo cleanQuote(json_encode($props)) ?>'></div>
 <?php
  // include 'subscribe_form.php';

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
