<?php
function contact_info_sc($atts, $content = null) {
  $at = shortcode_atts( array(
    "style" => "color:#fff"
  ), $atts );
  
  ob_start();
  ?>
  <div style="<?php echo $at['style'] ?>">
    <?php echo get_option('contact_info_' . str_replace(' ', '_', getOfficeCountry()) ); ?>
  </div>
<?php
  return ob_get_clean();
}

add_shortcode( 'bs_contact_info', 'contact_info_sc' );

function bs_contact_info_vc() {
    vc_map( 
      array(
        "name" =>  "Contact info",
        "base" => "bs_contact_info",
        "category" =>  "BS",
        "params" => array()
      ) 
    );
}

add_action( 'vc_before_init', 'bs_contact_info_vc' );
?>
