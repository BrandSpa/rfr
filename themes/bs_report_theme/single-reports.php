<?php require 'render-pdf.php'; ?>

<?php get_header() ?>

<div class="report">

 <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<?php
  $posts = [];
?>

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


  <?php endwhile; ?>

  <?php  else : ?>
    <h1><?php _e( "Sorry, we don't have this report..." ); ?></h1>
  <?php endif; ?>


<?php include_once 'shortcodes/mp.php' ?>
<?php include_once 'shortcodes/download_report.php' ?>
<?php include_once 'shortcodes/about_us.php' ?>
<?php include_once 'shortcodes/press.php' ?>

</div>

<?php get_footer() ?>
