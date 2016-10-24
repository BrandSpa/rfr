<div class="col-md-4">


  <div class="row">
    <div class="col-xs-6">
      <div class="report__icon-info">
          
          <img src="<?php echo get_template_directory_uri() . '/public/img/icons/area.svg' ?>" />

        <h5 class="title-uppercase color-red">
          <?php echo gett('Area') ?><sup><?php echo get_post_meta($post->ID, 'report_area_sup_key', true) ?></sup>
        </h5>
        <p>
          <?php echo get_post_meta($post->ID, 'report_area_key', true) ?>
        </p>
      </div>
    </div>

    <div class="col-xs-6">
      <div class="report__icon-info">

           <img src="<?php echo get_template_directory_uri() . '/public/img/icons/population.svg' ?>" />

        <h5 class="title-uppercase color-red">
          <?php echo gett('Population') ?> <sup><?php echo get_post_meta($post->ID, 'report_population_sup_key', true) ?></sup>
        </h5>
        <p>
          <?php echo get_post_meta($post->ID, 'report_population_key', true) ?>
        </p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-6">
      <div class="report__icon-info">

           <img src="<?php echo get_template_directory_uri() . '/public/img/icons/political_system.svg' ?>" />
        <h5 class="title-uppercase color-red">
          <?php echo gett('Political') ?> <sup><?php echo gett(get_post_meta($post->ID, 'report_political_system_sup_key', true)) ?></sup>
        </h5>
        <p>
          <?php echo get_post_meta($post->ID, 'report_political_system_key', true) ?>
        </p>
      </div>
    </div>

    <div class="col-xs-6">
      <div class="report__icon-info">
         <img src="<?php echo get_template_directory_uri() . '/public/img/icons/major_languages.svg' ?>" />

        <h5 class="title-uppercase color-red">
          <?php echo gett('Major Languages') ?> <sup><?php echo get_post_meta($post->ID, 'report_languages_sup_key', true) ?></sup>
        </h5>

        <?php
          $report_languages = get_post_meta($post->ID, 'report_languages_key', true);
          $languages_count = count($report_languages);
        ?>
        <?php if(is_array($report_languages)):  ?>
          <?php foreach ($report_languages as $key => $language): ?>
          <?php
            echo gett($language);
            if(($languages_count - 1) != $key): echo ', '; endif;
          ?>
          <?php  endforeach; ?>
        <?php endif;  ?>
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

    <a href="#report-content"><i class="ion-chevron-down"></i></a>
  </div>
