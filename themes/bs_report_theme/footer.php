
<div id="footer">
  <div class="col-md-9 footer__top">
  <div class="col-md-1"></div>
  <div class="footer__menu col-md-11">
    <?php
      $args = array(
        'theme_location' => 'main',
        'container' => false,
        'echo' => true
      );
      
      $menu = wp_nav_menu( $args);
     ?>
   </div>

  </div>
  

  <div class="col-md-3 footer__bottom">
    <div class="footer__bottom-left col-md-12">
      <h3 style="text-transform: uppercase" class="color-red"><?php echo gett('Contact') ?></h3>
      <?php echo get_option('contact_info_' . str_replace(' ', '_', getOfficeCountry()) ) ?>
    </div>
    
    <div class="footer__bottom-middle col-md-12">
      <a href="#"><?php echo gett('PRIVACY POLICY') ?></a>
      <a href="#”"><?php echo gett('TERMS & CONDITIONS') ?></a>
    </div>
  </div>
  
  <div class="col-md-12 bs-logo">
    <img src="<?php echo get_template_directory_uri() .'/public/img/bs.png' ?>" class="pull-right">
  </div>

</div>

  <script src="http://code.highcharts.com/highcharts.js"></script>
  <script src="http://code.highcharts.com/modules/exporting.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/flexibility/2.0.1/flexibility.js"></script>
  <script src="<?php echo get_template_directory_uri() . '/public/js/app.js' ?>"></script>
  <script>
    flexibility(document.getElementsByClassName('report__header_pdf'));
  </script>

<?php wp_footer() ?>

</body>
</html>
