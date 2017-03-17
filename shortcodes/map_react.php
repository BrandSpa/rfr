	<?php

/**
 * 	<?php  ?>
 * <?php echo  ?>
 * <?php echo ); ?>
 * 
 */
/**

 * <?php echo gett('SITUATION') ?>
 * 	<?php echo gett('Improved') ?> 
 * 	<?php echo gett('Unchanged') ?>
 * 		<?php echo gett('Worsened') ?>

 */
function bs_map_react_sc($atts, $content = null) {
	$attributes = [];
  $at = shortcode_atts( $attributes, $atts );
 
 $props = [
	"texts" => [
		"by_country" => gett('BY COUNTRY'),
		"header_subtitle" => gett('Click on any country to see its report.'),
		"list" => gett('LIST'),
		"nature_of_persecution" => gett('NATURE OF PERSECUTION'),
		"search_by_country" =>  gett('SEARCH BY COUNTRY'),
		"nature_of_persecution" =>  gett('NATURE OF PERSECUTION'),
		"persecution" => gett('Persecution'),
		"discrimination" => gett('Discrimination'),
		"stable" => gett('Stable'),
		"situation" => gett('SITUATION'),
		"improved" => gett('Improved'),
		"unchanged" => gett('Unchanged'),
		"worsened" => gett('Worsened'),
		"africa" => gett('Africa'),
		"search_by_list" => gett('SEARCH BY LIST'),
		'afrika' =>  gett('Africa'),
		'asia' => gett('Asia'),
		'easterEurope' => gett('Eastern Europe'),
		'latinAmerica' => gett('Latin America'),
		'middleEast' => gett('Middle East'),
		'northAmerica' => gett('North America'),
		'ocenia' => gett('Oceania'),
		'russiaCentralAsia' => gett('Russia & Central Asia'),
		'westernEurope' => gett('Western Europe')
	],
	"templateUrl" => get_template_directory_uri(),
	"lang" => getLang(),
	"continents" => getContinents()
 ];

 ob_start();
?>

	<div class="bs-map" data-props='<?php echo json_encode($props) ?>'></div>

<?php
  return ob_get_clean();
  }

  add_shortcode( 'bs_map_react', 'bs_map_react_sc' );
	add_action( 'vc_before_init', 'bs_map_react_vc' );

  function bs_map_react_vc() {
		$params = [];
    vc_map( 
      array(
        "name" =>  "BS Map React",
        "base" => "bs_map_react",
        "category" =>  "BS",
        "params" => $params
      ) 
    );
  }



?>
