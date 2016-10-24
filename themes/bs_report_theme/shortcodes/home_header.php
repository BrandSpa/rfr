<?php

function bs_home_header_sc($atts, $content = null) {
  $at = shortcode_atts( array(
      "backgrounds" => ""
    ), $atts );
  ob_start();
?>

<div>
  <?php if(is_array( explode(',', $at['backgrounds']) )): ?>
    <?php  foreach(explode(',', $at['backgrounds']) as $imageId):  ?>
    <img src="<?php echo wp_get_attachment_image_src($imageId, 'full')[0] ?>" alt="">
      <?php var_dump(wp_get_attachment_image_src($imageId, 'full')) ?>

    <?php endforeach; ?>
  <?php endif; ?>
</div>

<?php

  return ob_get_clean();
  }

  add_shortcode( 'bs_home_header', 'bs_home_header_sc' );

  function bs_home_header_vc() {
    vc_map( 
      array(
        "name" =>  "BS home header",
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