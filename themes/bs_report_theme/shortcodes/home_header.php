<?php

function bs_home_header_sc($atts, $content = null) {
  $at = shortcode_atts( array(
      "backgrounds" => "",
      "title_1" => "",
      "content_1" => "",
       "title_2" => "",
      "content_2" => "",
       "title_3" => "",
      "content_3" => "",
      "content" => "",
      "interval" => "8000"
    ), $atts );

  ob_start();
?>

<div class="home_header" data-interval="<?php echo $at['interval'] ?>" data-autoplay="true" >
  <?php if(is_array( explode(',', $at['backgrounds']) )): ?>
    <?php  foreach(explode(',', $at['backgrounds']) as $key => $imageId):  ?>
      <div
        class="home_header__background <?php if($key == 0) echo 'home_header__background--active' ?>"   
        data-index="<?php echo $key ?>"
        style="background: url(<?php echo wp_get_attachment_image_src($imageId, 'full')[0] ?>);  background-size: cover; background-position: center"
        ></div>
    <?php endforeach; ?>
  <?php endif; ?>

  <div class="col-md-6">
    <div class="home_header__contents" >
      <ul>
        <li data-index="0" class="active">
          <h1 class="home_header__title">
            <?php echo $at['title_1']?>
          </h1>
          <p class="home_header__content">
            <?php echo $at['content_1']?>
          </p>
        </li>
        
        <li>
          <h1 class="home_header__title">
            <?php echo $at['title_2']?>
          </h1>
          <p class="home_header__content">
            <?php echo $at['content_2']?>
          </p>
        </li>

        <li>
          <h1 class="home_header__title">
            <?php echo $at['title_3']?>
          </h1>
          <p class="home_header__content">
            <?php echo $at['content_3']?>
          </p>
        </li>
      </ul>
    </div>

    <div class="home_header__paginate">
      <a href="#" class="active" data-index="0"></a>
      <a href="#" data-index="1"></a>
      <a href="#" data-index="2"></a>
    </div>
 
  </div>
  
  <div class="col-md-2"></div>

  <div class="col-md-2">
    <div class="home_header__content_right">
      <?php echo apply_filters('the_content', $content); ?>
    </div>
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
          ),
          array(
            "type" => "textfield",
            "heading" => "Title",
            "param_name" => "title_1"
          ),
          array(
            "type" => "textarea",
            "heading" => "content",
            "param_name" => "content_1"
          ),
          array(
            "type" => "textfield",
            "heading" => "Title",
            "param_name" => "title_2"
          ),
          array(
            "type" => "textarea",
            "heading" => "content",
            "param_name" => "content_2"
          ),
          array(
            "type" => "textfield",
            "heading" => "Title",
            "param_name" => "title_3"
          ),
          array(
            "type" => "textarea",
            "heading" => "content",
            "param_name" => "content_3"
          ),
          array(
            "type" => "textarea_html",
            "heading" => "content right",
            "param_name" => "content"
          ),
           array(
            "type" => "textfield",
            "heading" => "Interval slides",
            "param_name" => "interval",
            "value" => "8000"
          )
        )
      ) 
    );
  }

add_action( 'vc_before_init', 'bs_home_header_vc' );

?>