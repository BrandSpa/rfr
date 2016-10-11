<?php
  $map_svg_url = get_template_directory_uri() . '/public/img/map.svg';
   $getReportLang = 'en';
  if( function_exists('pll_current_language') ) $getReportLang = pll_current_language();
?>

<map
  posts='<?php echo json_encode( getReports(array('lang' => $getReportLang) )); ?>' 
  :countries-translation='<?php echo json_encode( array_combine( getCountries(), trans_list(getCountries()) ) ) ?>'
  map-url='<?php echo $map_svg_url ?>'
  lang='<?php echo $getReportLang ?>'
>
</map>

<template id="map-template">
  <div class="map__info">
    <span class="map__info_country"></span>
    <span class="map__info_situation">
      <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/unchanged.svg" alt="">
    </span>
  </div>

  <div id="map" class="map">
    <div class="row">
      <div class="col-md-9">
        <h1 class="title title-line color-red">
          <?php echo gett('RELIGIOUS FREEDOM <br> IN THE WORLD', true); ?>
        </h1>
      </div>

      <div class="col-md-3">
        <input type="text" v-model="country"  v-on:keyup="search" style="background: #1A2127">
        <ul class="map__search_results">
          <li v-for="item in items">
            <a href="/report/{{item.meta_country.toLowerCase().replace(' ', '-')}}">{{item.meta_country}}</a>
            <span>
              <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/{{item.meta_situation}}.svg" alt="">
            </span>
          </li>
        </ul>

      </div>
    </div>

    <div id="map-container"></div>

  <div class="col-md-6 map_list">
    <h5 class="color-red pull-left"><?php echo gett('NATURE OF PERSECUTION') ?></h5>
    <ul class="map_list_exp">
      <li>
        <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/Persecution.svg" alt="">
        <?php echo gett('Persecution') ?>
      </li>
      <li>
          <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/Discrimination.svg" alt="">
          <?php echo gett('Discrimination') ?>
      </li>
      <li>
        <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/Stable.svg" alt="">
        <?php echo gett('Stable') ?>
      </li>
    </ul>

  </div>

  <div class="col-md-6 map_list">
    <h5 class="color-red pull-left"><?php echo gett('SITUATION') ?></h5>
    <ul class="map_list_exp">
      <li>
        <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/improved.svg" alt=""> <?php echo gett('Persecution') ?>
      </li>
      <li>
        <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/unchanged.svg" alt=""> <?php echo gett('Unchanged') ?>
      </li>
      <li>
          <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/worsened.svg" alt=""> <?php echo gett('Worsened') ?>
      </li>

    </ul>
  </div>

  </div>
</template>
