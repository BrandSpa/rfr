<?php require 'render-pdf.php'; ?>
<?php get_header() ?>

<div class="report">

  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <?php

    // WP_Query arguments
$args = array(
    'meta_key'       => 'report_year_key',
    'meta_value'     => '2016',
    'post_type'        => 'reports',
    'numberposts' => => -1
  );

// The Query
$query = get_posts( $args );

    function addMeta($obj) {
      $obj->meta_year = get_post_meta($obj->ID, 'report_year_key', true);
      $obj->meta_country = get_post_meta($obj->ID, 'report_country_key', true);
      $obj->meta_situation = get_post_meta($obj->ID, 'report_situation_key', true);
      return $obj;
    }

    $posts = array_map('addMeta', $query);

     ?>

    <div class="report__header" style="background: url(<?php echo get_post_meta($post->ID, 'report_background_key', true)  ?>) no-repeat; background-size:cover ">
      <div class="row">
        <div class="col-md-6">
          <a href="#map" class="report__header__back-map">BACK TO MAP</a>

          <div class="report__header__slider_year">
            <?php $year = get_post_meta($post->ID, 'report_year_key', true); ?>
            <a href="?report_year=<?php echo $year - 1 ?>"> < </a>

            <?php echo get_post_meta($post->ID, 'report_year_key', true) ?>

            <a href="?report_year=<?php echo $year + 1 ?>"> > </a>
          </div>

          <h1 class="title">
            <?php echo get_post_meta($post->ID, 'report_country_key', true) ?>
            <script type="text/javascript">
            jQuery(function() {
              var $ = jQuery;
              $('.open-select-countries').on('click', function(e) {
                e.preventDefault();
                console.log();
                var se = $('#select-countries');
                  se.show();
                  se[0].size=2;
              });
            })

            </script>
            <a href="#" class="open-select-countries">

              <svg width="47px" height="29px" viewBox="587 231 47 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Group-8-Copy-3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(591.000000, 236.000000)" stroke-linecap="square">
                      <g id="Group-7" transform="translate(0.000000, 0.279059)" stroke="#FC3938" stroke-width="6">
                          <path d="M39.582907,9.4088894 L17.00223,9.4088894" id="Line-Copy-3" transform="translate(28.292568, 9.408889) rotate(-45.000000) translate(-28.292568, -9.408889) "></path>
                          <path d="M20.8516408,7.5613294 L-1.72903621,7.5613294" id="Line-Copy-5" transform="translate(9.561302, 9.408889) scale(-1, 1) rotate(-45.000000) translate(-9.561302, -9.408889) "></path>
                      </g>
                  </g>
              </svg>
            </a>
            <select name="" id="select-countries" style="display: none">
            <?php foreach(getCountries() as $country): ?>
              <option value=" /report/<?php echo strtolower(str_replace(' ', '-', $country)) ?> "><?php echo $country ?></option>
            <?php endforeach; ?>
            </select>
          </h1>
        </div>

        <div class="col-md-6">
            <img src="<?php echo get_post_meta($post->ID, 'report_map_key', true) ?>" class="img-responsive report__header__map">
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
                  <p><?php echo get_post_meta($post->ID, 'report_nature_persecution_key', true) ?></p>
              <?php else: ?>
                <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/Stable.svg" alt="">
                <p><?php echo gett('Stable') ?></p>
              <?php  endif; ?>

              </div>

              <div class="col-md-6 report__header_pdf__item">
                <h5 class="color-red pull-left"><?php echo gett('SITUATION') ?></h5>
                <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/<?php echo get_post_meta($post->ID, 'report_situation_key', true) ?>.svg" alt="">
                <p><?php echo get_post_meta($post->ID, 'report_situation_key', true) ?></p>
              </div>

          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="row">

            <div class="col-xs-6">
              <div class="report__icon-info">
                <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/area.svg" alt="">
                <h5 class="title-uppercase color-red"><?php echo gett('Area') ?></h5>
                <p> <?php echo get_post_meta($post->ID, 'report_area_key', true) ?></p>
              </div>
            </div>

            <div class="col-xs-6">
              <div class="report__icon-info">
                <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/population.svg" alt="">
                <h5 class="title-uppercase color-red"><?php echo gett('Population') ?></h5>
                <p> <?php echo get_post_meta($post->ID, 'report_population_key', true) ?></p>
              </div>
            </div>

            <div class="col-xs-6">
              <div class="report__icon-info">
                <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/political_system.svg" alt="">
                  <h5 class="title-uppercase color-red"><?php echo gett('Political') ?></h5>
                <p><?php echo get_post_meta($post->ID, 'report_political_system_key', true) ?></p>
              </div>
            </div>

            <div class="col-xs-6">
              <div class="report__icon-info">
              <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/major_languages.svg" alt="">
                <h5 class="title-uppercase color-red"><?php echo gett('Major Languages') ?></h5>

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
        <div class="report__content-header" style="background: url(<?php echo get_post_meta($post->ID, 'report_background_key', true)  ?>)">

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
    <h1><?php _e( 'Sorry, no posts matched your criteria.' ); ?></h1>
  <?php endif; ?>


<?php include_once 'shortcodes/mp.php' ?>
<?php include_once 'shortcodes/download_report.php' ?>
<?php include_once 'shortcodes/about_us.php' ?>
<?php include_once 'shortcodes/press.php' ?>

</div>

<?php get_footer() ?>
