<template id="search-country-template">
<div class="map__search">
   <a href="#" class="map__search__close"><i class="ion-close"></i></a>
  <div class="col-md-3"></div>
  <div class="col-md-6 col-sm-10">
       <h1 class="title-center title-line color-red"><?php echo gett('SEARCH BY COUNTRY') ?></h1>
    <div class="row">
      <div class="col-md-6">
           <div class="map__search_input-container">
      <input
        type="text" 
        v-model="country"
        v-on:keydown.down="down"
        v-on:keydown.up="up"
        v-on:keyup="search"
        v-on:keyup.enter="enter"
        class="map__search_input" 
      />
    </div>

    <ul class="map__search_results">
      <li 
        v-for="item in items" 
        v-bind:class="{'selected': isSelected($index), 'bg-discrimination': natureDiscrimination(item.meta_nature_persecution), 'bg-red': naturPersecution(item.meta_nature_persecution) }">
        <a href="{{item.guid}}">{{item.meta_country}}</a>
        <span>
          <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/Stable.svg" alt="">
        </span>
      </li>
    </ul>

    </div>
      <div class="col-md-6">
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

      <ul class="map_list_exp">
      <li>
        <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/improved.svg" alt=""> <?php echo gett('Improved') ?>
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
 
   
  </div>
  </div>

</template>

<search-country reports='<?php echo json_encode( getReports(array('lang' => $getReportLang) )); ?>'></search-country>
