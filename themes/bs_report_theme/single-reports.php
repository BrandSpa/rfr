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

    <div
      class="report__header"
      style="background: url(<?php echo get_template_directory_uri() ."/public/img/bg/" . str_replace(' ', '-',  get_post_meta($post->ID, 'report_country_key', true))  . ".jpg" ?>) no-repeat; background-size:cover "
    >

      <div class="row">
        <?php include 'templates/report/header_top.php' ?>
      </div>

      <div class="row">
        <?php include 'templates/report/header_pdf.php' ?>
      </div>

      <div class="row">
        <div class="col-md-4">
          <?php include 'templates/report/info.php' ?>
        </div>

        <div class="col-md-8">

          <h5 class="title-uppercase color-red" style="text-align: center">
            <?php echo gett('Religions') ?> <sup><?php echo get_post_meta($post->ID, 'report_religion_sup_key', true) ?></sup>
          </h5>

          <religions-chart
            :religions='<?php echo json_encode(getArrayTranslated(get_post_meta($post->ID, 'report_religion_key', true))) ?>'
            :colors='<?php echo json_encode(getReligionsColors()) ?>'
          >
          </religions-chart>

        </div>
      </div>

    </div>

    <div class="report__content">
    <?php if(is_array(get_post_meta($post->ID, 'report_content_key', true))): ?>
      <?php foreach (get_post_meta($post->ID, 'report_content_key', true) as $key => $content): ?>
        <?php if( !empty($content['title']) ): ?>
        <div class="report__content-header" style="background: url(<?php echo get_template_directory_uri() . '/public/img/bg_report_content_1.jpg' ?>) no-repeat;background-size:cover">

          <h1 class="title-line title-uppercase"><?php echo $content['title'] ?></h1>

        </div>
        <?php endif; ?>
        <?php if( !empty($content['text']) ): ?>
        <div class="report__content-content">

          <p>
            <?php echo $content['text'] ?>
          </p>

        </div>
        <?php endif; ?>
      <?php endforeach; ?>
      <?php endif; ?>
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

<?php get_footer() ?>
