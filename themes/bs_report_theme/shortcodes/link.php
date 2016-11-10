<?php
function link_sc($atts, $content = null) {
  $at = shortcode_atts( array(
    "link_text" => 'COUNTRY REPORTS',
    "link_href" => '#',
    "link_icon" => '',
  ), $atts );
  
  ob_start();
  ?>

    <a href="<?php echo $at['link_href'] ?>" class="link-bs">
        
        <svg width="7px" height="7px" viewBox="129 71 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

            <defs></defs>
            <polyline id="Path-2" stroke="#FFFFFF" stroke-width="1" fill="none" points="130 77 130 72 135 72"></polyline>
        </svg>

                
        <svg width="7px" height="7px" viewBox="330 71 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->

            <polyline id="Path-2-Copy-2" stroke="#FFFFFF" stroke-width="1" fill="none" transform="translate(333.500000, 74.500000) scale(-1, 1) translate(-333.500000, -74.500000) " points="331 77 331 72 336 72"></polyline>
        </svg>


        <?php echo gett($at['link_text']) ?> <i class="<?php echo $at['link_icon'] ?>"></i>

        
            <svg width="7px" height="7px" viewBox="330 118 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <polyline id="Path-2-Copy-3" stroke="#FFFFFF" stroke-width="1" fill="none" transform="translate(333.500000, 121.500000) scale(-1, -1) translate(-333.500000, -121.500000) " points="331 124 331 119 336 119"></polyline>
            </svg>
                    
            <svg width="7px" height="7px" viewBox="129 118 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <polyline id="Path-2-Copy" stroke="#FFFFFF" stroke-width="1" fill="none" transform="translate(132.500000, 121.500000) scale(1, -1) translate(-132.500000, -121.500000) " points="130 124 130 119 135 119"></polyline>
            </svg>


        
    </a>

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
