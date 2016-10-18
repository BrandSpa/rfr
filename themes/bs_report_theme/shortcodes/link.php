<?php
function link_sc($atts, $content = null) {
  $at = shortcode_atts( array(
    "link_text" => 'COUNTRY REPORTS',
    "link_href" => '#',
    "link_icon" => '',
  ), $atts );
  
  ob_start();
  ?>

  
<div class="link-bs">

    <a href="<?php echo $at['link_href'] ?>">
      <svg width="14px" height="29px" viewBox="0 0 14 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <text id="+" stroke="none" fill="none" font-family="Roboto-Light, Roboto" font-size="24" font-weight="300">
          <tspan x="0.214687083" y="22.2741321" fill="#FFFFFF">+</tspan>
      </text>
  </svg>

  <svg width="14px" height="29px" viewBox="0 0 14 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <text id="+" stroke="none" fill="none" font-family="Roboto-Light, Roboto" font-size="24" font-weight="300">
          <tspan x="0.214687083" y="22.2741321" fill="#FFFFFF">+</tspan>
      </text>
  </svg>

   <i class="icon ion-document-text"></i> <?php echo gett($at['link_text']) ?>
       <svg width="14px" height="29px" viewBox="0 0 14 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <text id="+" stroke="none" fill="none" font-family="Roboto-Light, Roboto" font-size="24" font-weight="300">
        <tspan x="0.214687083" y="22.2741321" fill="#FFFFFF">+</tspan>
    </text>
  </svg>

  <svg width="14px" height="29px" viewBox="0 0 14 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <text id="+" stroke="none" fill="none" font-family="Roboto-Light, Roboto" font-size="24" font-weight="300">
          <tspan x="0.214687083" y="22.2741321" fill="#FFFFFF">+</tspan>
      </text>
  </svg>
    </a>

 

</div>

 <?php
  return ob_get_clean();
}

add_shortcode( 'bs_link', 'link_sc' );

function bs_link_vc() {
    vc_map( 
      array(
        "name" =>  "Link",
        "base" => "bs_link",
        "category" =>  "BS",
        "params" => array(

          array(
            "type" => "textfield",
            "heading" => "Link text",
            "param_name" => "link_text",
            "value" => ""
          ),

           array(
            "type" => "textfield",
            "heading" => "Link",
            "param_name" => "link_href",
            "value" => ""
          ),

           array(
            "type" => "textfield",
            "heading" => "Link icon",
            "param_name" => "link_icon",
            "value" => ""
          )
        
        )
      ) 
    );
}

add_action( 'vc_before_init', 'bs_link_vc' );
?>
