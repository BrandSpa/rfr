<?php
add_shortcode( 'bs_slider', 'bs_slider_sc' );

function bs_slider_sc($atts, $content = null) {
  $at = shortcode_atts( array(
      "images" => "",
      "links" => "",
      "interval" => "8000"
    ), $atts );

    $imagesArr = explode(',', $at['images']);
    $linksArr = explode(',', $at['links']);
    $imagesCount = $images.length;

  ob_start();
?>

<div class="flexslider" id="slider-<?php echo UUID::v4(); ?>">
  <ul class="slides">
    <?php foreach($imagesArr as $key => $imageId): ?>
    <a href="<?php echo $linksArr[$key] ?>">
      <img src=" <?php echo wp_get_attachment_image_src($imageId, 'full')[0] ?>" alt="">
    </a>
    <?php endforeach; ?>
  </ul>
</div>

<script>
  $(window).load(function() {
    $('#slider-<?php echo UUID::v4(); ?>').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 100,
      itemMargin: 5
    });
  });
</script>

<?php

  return ob_get_clean();
  } //close bs_slider_sc

  

  function bs_slider_vc() {
    vc_map(
      array(
        "name" =>  "BS slider",
        "base" => "bs_slider",
        "category" =>  "BS",
        "params" => array(
          array(
            "type" => "attach_images",
            "param_name" => "images"
          ),
          array(
            "type" => "exploded_textarea",
            "param_name" => "links"
          )
        )
      ) 
    );
  }

add_action( 'vc_before_init', 'bs_slider_vc' );

?>