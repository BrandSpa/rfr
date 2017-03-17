<?php

function bs_header_slider_sc($atts, $content = null) {
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

		$images = [];
		foreach(explode(',', $at['backgrounds']) as $imageId) {
			array_push($images, wp_get_attachment_url($imageId));
		}

		$contents = [];

		foreach([1,2,3] as $num) {
			$cont = [
				"title" => $at['title_' . $num],
				"content" => $at['content_' . $num]
			];

			array_push($contents, $cont);
		}

		$props = [
			"backgrounds" => $images,
			"contents" => $contents,
			"content_html" => apply_filters('the_content', $content)
		];

  ob_start();
?>
<div class="bs-header-slider"></div>
<?php

  return ob_get_clean();
  }

  add_shortcode( 'bs_header_slider', 'bs_header_slider_sc' );

  function bs_header_slider_vc() {
    vc_map( 
      array(
        "name" =>  "BS header slider",
        "base" => "bs_header_slider",
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

add_action( 'vc_before_init', 'bs_header_slider_vc' );

?>