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
        <div class="col-md-6">
          <a href="#map" class="report__header__back-map"><?php echo gett('BACK TO MAP') ?></a>

          <div class="report__header__slider_year">
            <?php $year = get_post_meta($post->ID, 'report_year_key', true); ?>
            <a href="?report_year=<?php echo $year - 1 ?>"> < </a>

            <?php echo get_post_meta($post->ID, 'report_year_key', true) ?>

            <a href="?report_year=<?php echo $year + 1 ?>"> > </a>
          </div>

          <h1 class="title">
            <?php echo get_post_meta($post->ID, 'report_country_key', true) ?>

            <a href="#" class="open-select-countries">
              <img src="<?php echo get_template_directory_uri() . '/public/img/icons/down.svg' ?>" alt="">
            </a>
          </h1>
        </div>

        <div class="col-md-6">
            <img src="<?php echo get_template_directory_uri() . '/public/img/maps/' . str_replace(' ', '-',  get_post_meta($post->ID, 'report_country_key', true)) . '.png'  ?>" class="img-responsive report__header__map">
        </div>
      </div>

      <div class="row">
        <div class="report__header_pdf">
          <div class="col-md-6 report__header_pdf__download">
            <a href="?pdf=true" class="center_horizontal">
                <h5>
                  <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/pdf.svg"> <?php echo gett('DOWNLOAD REPORT') ?>
                </h5>
            </a>
          </div>

          <div class="col-md-6">

              <div class="col-md-6 report__header_pdf__item">
                <h5 class="color-red pull-left"><?php echo gett('NATURE OF PERSECUTION') ?></h5>

                <?php if(get_post_meta($post->ID, 'report_nature_persecution_key', true)): ?>
                <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/<?php echo get_post_meta($post->ID, 'report_nature_persecution_key', true) ?>.svg" alt="">
                  <p>
                    <?php echo gett( get_post_meta($post->ID, 'report_nature_persecution_key', true) ) ?>
                  </p>
              <?php else: ?>
                <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/Stable.svg" alt="">
                <p><?php echo gett('Stable') ?></p>
              <?php  endif; ?>

              </div>

              <div class="col-md-6 report__header_pdf__item">
                <h5 class="color-red pull-left"><?php echo gett('SITUATION') ?></h5>
                <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/<?php echo get_post_meta($post->ID, 'report_situation_key', true) ?>.svg" alt="">
                <p>
                  <?php echo gett(get_post_meta($post->ID, 'report_situation_key', true)) ?>
                </p>
              </div>

          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="row">

            <div class="col-xs-6">
              <div class="report__icon-info">
                <span class="icon-area" style="font-size: 51px"></span>
                <h5 class="title-uppercase color-red">
                  <?php echo gett('Area') ?><sup><?php echo get_post_meta($post->ID, 'report_area_sup_key', true) ?></sup>
                </h5>
                <p> <?php echo get_post_meta($post->ID, 'report_area_key', true) ?></p>
              </div>
            </div>

            <div class="col-xs-6">
              <div class="report__icon-info">
                <span class="icon-population" style="font-size: 73px"></span>

                <h5 class="title-uppercase color-red">
                  <?php echo gett('Population') ?> <sup><?php echo get_post_meta($post->ID, 'report_population_sup_key', true) ?></sup>
                </h5>
                <p> <?php echo get_post_meta($post->ID, 'report_population_key', true) ?></p>
              </div>
            </div>

            <div class="col-xs-6">
              <div class="report__icon-info">
                <span class="icon-political_system" style="font-size: 59px"></span>
                  <h5 class="title-uppercase color-red"><?php echo gett('Political') ?> <sup><?php echo get_post_meta($post->ID, 'report_political_system_sup_key', true) ?></sup></h5>
                <p><?php echo get_post_meta($post->ID, 'report_political_system_key', true) ?></p>
              </div>
            </div>

            <div class="col-xs-6">
              <div class="report__icon-info">
              <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/major_languages.svg" alt="">
              <span class="icon-search" style="font-size: 50px"></span>
                <h5 class="title-uppercase color-red"><?php echo gett('Major Languages') ?> <sup><?php echo get_post_meta($post->ID, 'report_languages_sup_key', true) ?></sup></h5>

                <?php
                  $report_languages = get_post_meta($post->ID, 'report_languages_key', true);
                  //if languages is array traverse all array and show each one.
                  if(is_array($report_languages)):
                    $languages_count = count($report_languages);
                    foreach ($report_languages as $key => $language):
                      echo $language;
                      if(($languages_count - 1) != $key):
                        echo ', ';
                      endif;
                    endforeach;
                  endif;
                ?>

            </div>
            </div>
          </div>
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
