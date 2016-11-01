<button class="show-modal">test modal</button>


<div id="footer">
  <div class="col-md-12 footer__top">
    <?php
        $args = array(
          'theme_location' => 'footer',
          'container' => false,
          'echo' => true
        );

        $menu = wp_nav_menu( $args);

     ?>
  </div>
  
  <div class="col-md-3 footer__bottom">
    <div class="footer__bottom-left">
        <img src="<?php echo get_template_directory_uri() .'/public/img/pontificial_logo.png' ?>" alt="">
    </div>
    
    <div class="footer__bottom-right">
        <img src="<?php echo get_template_directory_uri() .'/public/img/bs.png' ?>" alt="">
    </div>
  </div>
</div>


<modal-lang 
  :info='<?php echo json_encode(get_post_meta($post->ID, 'multiregional_key', true)) ?>'
  polylang='<?php if(function_exists('pll_the_languages')) { echo json_encode(pll_the_languages(array( 'raw' => 1 ))); } ?>'
>

</modal-lang>
<template id="modal-lang-template">
  <div class="bs-modal">
    <div class="bs-modal__content">
    <a href="#" class="bs-modal__close"><i class="ion-android-close color-red"></i></a> 
    <h4>Choose language</h4>
      <ul>
          <li v-for="lng in info.lang">
            <a href="/{{lng}}/report/canada">{{lng}}</a>
          </li>
      </ul>
    </div>
  </div>

  <div class="bs-modal__overlay"></div>
</template>

  <script src="http://code.highcharts.com/highcharts.js"></script>
  <script src="http://code.highcharts.com/modules/exporting.js"></script>
  <script src="<?php echo get_template_directory_uri() . '/public/js/app.js' ?>"></script>

<?php wp_footer() ?>

 
</body>
</html>
