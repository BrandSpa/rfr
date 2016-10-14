<template id="search-country-template">
  <div class="map__search_input-container">
    <input type="text" v-model="country" v-on:keyup="search" class="map__search_input" />
  </div>

  <ul class="map__search_results">
    <li v-for="item in items">
      <a href="{{item.guid}}">{{item.meta_country}} {{$index}}</a>
      <span>
        <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/Stable.svg" alt="">
      </span>
    </li>
  </ul>
</template>
