<template id="search-country-template">
<div class="map__search">

  <a href="#" class="map__search__close" v-on:click="close"><i class="ion-close"></i></a>
  
  <div class="col-md-6 col-sm-10" style="float: none; margin: 0 auto">
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
        v-bind:class="{'bg-discrimination': isDiscrimination(item.meta_nature_persecution), 'bg-red': isPersecution(item.meta_nature_persecution),'selected': isSelected($index) }">
          <a v-bind:href="item.guid">{{item.meta_country}}</a>
        <span>
          <img v-bind:src="getIcon(item.meta_situation)" alt="">
        </span>
      </li>
    </ul>

    </div>
      <div class="col-md-6">
      <div class="row">
        <h5 class="color-red pull-left"><?php echo gett('NATURE OF PERSECUTION') ?></h5>
         <ul class="map__search__list">
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
    
    <div class="row">
      <h5 class="color-red pull-left"><?php echo gett('SITUATION') ?></h5>
      <ul class="map__search__list">
        <li>
          <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/improved.svg" alt=""> <?php echo gett('Improved') ?>
        </li>
        <li>
          <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/unchanged.svg" alt=""> <?php echo gett('Unchanged') ?>
        </li>
        <li>
            <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/Worsened.svg" alt=""> <?php echo gett('Worsened') ?>
        </li>

      </ul>
     </div>
      </div>
    </div>
 
   
  </div>
  </div>

</template>

<search-country dir="<?php echo get_template_directory_uri(); ?>" reports='<?php echo json_encode( getReports(array('lang' => $getReportLang) )); ?>'></search-country>
