<?php

function bs_home_header_sc($atts, $content = null) {
  $at = shortcode_atts( array(
      "backgrounds" => ""
    ), $atts );
  ob_start();
?>

<div class="home_header">
  <?php if(is_array( explode(',', $at['backgrounds']) )): ?>
    <?php  foreach(explode(',', $at['backgrounds']) as $key => $imageId):  ?>
    <img class="home_header__background <?php if($key == 1) echo 'home_header__background--active' ?>" src="<?php echo wp_get_attachment_image_src($imageId, 'full')[0] ?>" alt="">
    <?php endforeach; ?>
  <?php endif; ?>

  <div class="col-md-6">
    <h1 class="title">
      Religious freedom has declined in <span class="color-red">11 Countries</span>
    </h1>
  </div>
  <div class="col-md-6">
  
  </div>
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