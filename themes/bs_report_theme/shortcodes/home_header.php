<?php

function bs_home_header_sc($atts, $content = null) {
  $at = shortcode_atts( array(
      "backgrounds" => ""
    ), $atts );
  ob_start();
?>

<div>
  <?php var_dump($at['backgrounds']) ?>
</div>

<?php

  return ob_get_clean();
  }

  add_shortcode( 'bs_home_header', 'bs_home_header_sc' );

  function bs_home_header_vc() {
    vc_map( 
      array(
        "name" =>  "BS Map",
        "base" => "bs_home_header",
        "category" =>  "BS",
        "params" => array(
          array(
            "type" => "attach_images",
            "param_name" => "backgrounds"
          )
        )
      ) 
    );
  }

add_action( 'vc_before_init', 'bs_home_header_vc' );

?>