<?php require 'render-pdf.php'; ?>

<?php get_header() ?>

<div class="report">

 <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<?php

  $args = array(
    'meta_key'       => 'report_year_key',
    'meta_value'     => '2016',
    'post_type'        => 'reports',
    'numberposts' => -1
  );

  $query = get_posts( $args );

  function addMetaToPost($obj) {
    $obj->meta_year = get_post_meta($obj->ID, 'report_year_key', true);
    $obj->meta_country = get_post_meta($obj->ID, 'report_country_key', true);
    $obj->meta_situation = get_post_meta($obj->ID, 'report_situation_key', true);
    return $obj;
  }

  $posts = array_map('addMetaToPost', $query);
?>

  <?php include 'shortcodes/select_country.php' ?>

  <div class="report__header" 
    style="background: url(<?php echo get_template_directory_uri() ."/public/img/bg/" . str_replace(' ', '-',  get_post_meta($post->ID, 'report_country_key', true))  . ".jpg " ?>) no-repeat; background-size:cover ">

  <?php foreach(getReports() as $report): ?>
    <?php echo $report->guid ?>
  <?php endforeach; ?>

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
