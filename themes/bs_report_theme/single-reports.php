<?php require 'render-pdf.php'; ?>

<?php get_header() ?>

<div class="report">

 <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

  <?php include 'shortcodes/select_country.php' ?>

  <div class="report__header" 
    style="background: url(<?php echo get_template_directory_uri() ."/public/img/bg/" . str_replace(' ', '-',  get_post_meta($post->ID, 'report_country_key', true))  . ".jpg " ?>) no-repeat; background-size:cover ">
  
    <div class="row">
      <?php include 'templates/report/header_top.php' ?>
    </div>

    <div class="row">
      <?php include 'templates/report/header_pdf.php' ?>
    </div>

    <div class="row">
      <?php include 'templates/report/header_info.php' ?>
    </div>

  </div>

  <?php include 'templates/report/content.php' ?>
  <div class="row">
  <div class="col-md-4">
  
<div class="link-bs">
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


    <a href="#">COUNTRY REPORTS</a>

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

</div>
</div>
</div>
  <?php endwhile; ?>

  <?php  else : ?>
    <h1><?php _e( "Sorry, we don't have this report..." ); ?></h1>
  <?php endif; ?>

<?php include_once 'shortcodes/mp.php' ?>
<?php include_once 'shortcodes/download_report.php' ?>
<?php include_once 'shortcodes/about_us.php' ?>
<?php include_once 'shortcodes/press.php' ?>

</div>


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

  <script src="http://code.highcharts.com/highcharts.js"></script>
  <script src="http://code.highcharts.com/modules/exporting.js"></script>
  <script src="<?php echo get_template_directory_uri() . '/public/js/app.js' ?>"></script>
</body>
</html>