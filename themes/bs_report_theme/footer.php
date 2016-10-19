
<div id="footer">
  <div class="col-md-9 footer__left">
    <?php
        $args = array(
          'theme_location' => 'footer',
          'container' => false,
          'echo' => true
        );

        $menu = wp_nav_menu( $args);

     ?>
  </div>
  
  <div class="col-md-3 footer__right">
    <div class="footer__right-upper">
        <img src="<?php echo get_template_directory_uri() .'/public/img/pontificial_logo.png' ?>" alt="">
    </div>
    <div class="footer__right-bottom">
        <img src="<?php echo get_template_directory_uri() .'/public/img/bs.png' ?>" alt="">
    </div>
  </div>
</div>

<button class="show-modal">open modal</button>

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
          <li v-for="lang in info.langs">
            <a href="/{{lang}}/report/canada">{{lang}}</a>
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
