
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

<?php wp_footer() ?>

  <script src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.27/vue.min.js"></script>
  <script src="http://code.highcharts.com/highcharts.js"></script>
  <script src="http://code.highcharts.com/modules/exporting.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.6/d3.js"></script>
  <script src="<?php echo get_template_directory_uri() . '/public/js/app.js' ?>"></script>
</body>
</html>
