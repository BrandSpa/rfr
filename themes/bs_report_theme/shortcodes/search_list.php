<script type="text/template-x" id="search-list-template">
<div class="map__search_list">

  <a href="#" class="map__search__close" v-on:click="close"><i class="ion-close"></i></a>
  
  <div class="col-md-6 col-sm-10" style="float: none; margin: 0 auto">
       <h1 class="title-center title-line color-red"><?php echo gett('SEARCH BY LIST') ?></h1>
    <div class="row">

  <div class="col-md-6">

    <div v-for="continent in continents">
          {{ $key }} : {{ continent | json }}
    </div>  

    <button 
      class="bg-dark_jungle map__search__list_btn color-rolling-store" 
      v-on:click="showContinent('afrika')" ><?php echo gett('Africa') ?></button>

    <ul class="map__search_results" data-country="afrika" style="display: none">
      <li
        v-for="item in continents.afrika" 
        v-bind:class="{'bg-discrimination': isDiscrimination(item.meta_nature_persecution), 'bg-red': isPersecution(item.meta_nature_persecution),'selected': isSelected($index) }">
        <a v-bind:href="item.guid">{{item.meta_country}}</a>
        <span>
          <img v-bind:src="getIcon(item.meta_situation)" alt="">
        </span>
      </li>
    </ul>

    <button 
      class="bg-dark_jungle map__search__list_btn color-rolling-store" 
      v-on:click="showContinent('asia')" ><?php echo gett('Asia') ?></button>

    <ul class="map__search_results" data-country="asia" style="display: none">
      <li
        v-for="item in continents.asia" 
        v-bind:class="{'bg-discrimination': isDiscrimination(item.meta_nature_persecution), 'bg-red': isPersecution(item.meta_nature_persecution),'selected': isSelected($index) }">
        <a v-bind:href="item.guid">{{item.meta_country}}</a>
        <span>
          <img v-bind:src="getIcon(item.meta_situation)" alt="">
        </span>
      </li>
    </ul>

    <button 
        class="bg-dark_jungle map__search__list_btn color-rolling-store" 
        v-on:click="showContinent('easterEurope')" ><?php echo gett('Eastern Europe') ?></button>

      <ul class="map__search_results" data-country="easterEurope" style="display: none">
        <li
          v-for="item in continents.easterEurope" 
          v-bind:class="{'bg-discrimination': isDiscrimination(item.meta_nature_persecution), 'bg-red': isPersecution(item.meta_nature_persecution),'selected': isSelected($index) }">
          <a v-bind:href="item.guid">{{item.meta_country}}</a>
          <span>
            <img v-bind:src="getIcon(item.meta_situation)" alt="">
          </span>
        </li>
      </ul>

     <button 
      class="bg-dark_jungle map__search__list_btn color-rolling-store" 
      v-on:click="showContinent('Latin America')"><?php echo gett('Latin America') ?></button>

    <ul class="map__search_results" data-country="Latin America" style="display: none">
          <li 
        v-for="item in continents.latinAmerica" 
        v-bind:class="{'bg-discrimination': isDiscrimination(item.meta_nature_persecution), 'bg-red': isPersecution(item.meta_nature_persecution),'selected': isSelected($index) }">
        <a v-bind:href="item.guid">{{item.meta_country}}</a>
        <span>
          <img v-bind:src="getIcon(item.meta_situation)" alt="">
        </span>
      </li>
    </ul>

    <button 
        class="bg-dark_jungle map__search__list_btn color-rolling-store" 
        v-on:click="showContinent('middleEast')" ><?php echo gett('Middle East') ?></button>

      <ul class="map__search_results" data-country="middleEast" style="display: none">
        <li
          v-for="item in continents.middleEast" 
          v-bind:class="{'bg-discrimination': isDiscrimination(item.meta_nature_persecution), 'bg-red': isPersecution(item.meta_nature_persecution),'selected': isSelected($index) }">
          <a v-bind:href="item.guid">{{item.meta_country}}</a>
          <span>
            <img v-bind:src="getIcon(item.meta_situation)" alt="">
          </span>
        </li>
      </ul>
    
    <button 
      class="bg-dark_jungle map__search__list_btn color-rolling-store" 
      v-on:click="showContinent('North America')"><?php echo gett('North America') ?></button>

    <ul class="map__search_results" data-country="North America" style="display: none">
          <li 
        v-for="item in continents.northAmerica" 
        v-bind:class="{'bg-discrimination': isDiscrimination(item.meta_nature_persecution), 'bg-red': isPersecution(item.meta_nature_persecution),'selected': isSelected($index) }">
        <a v-bind:href="item.guid">{{item.meta_country}}</a>
        <span>
          <img v-bind:src="getIcon(item.meta_situation)" alt="">
        </span>
      </li>
    </ul>

    <button 
        class="bg-dark_jungle map__search__list_btn color-rolling-store" 
        v-on:click="showContinent('ocenia')" ><?php echo gett('Oceania') ?></button>

      <ul class="map__search_results" data-country="ocenia" style="display: none">
        <li
          v-for="item in continents.ocenia" 
          v-bind:class="{'bg-discrimination': isDiscrimination(item.meta_nature_persecution), 'bg-red': isPersecution(item.meta_nature_persecution),'selected': isSelected($index) }">
          <a v-bind:href="item.guid">{{item.meta_country}}</a>
          <span>
            <img v-bind:src="getIcon(item.meta_situation)" alt="">
          </span>
        </li>
      </ul>
      
      <button 
        class="bg-dark_jungle map__search__list_btn color-rolling-store" 
        v-on:click="showContinent('russiaCentralAsia')" ><?php echo gett('Russia & Central Asia') ?></button>

      <ul class="map__search_results" data-country="russiaCentralAsia" style="display: none">
        <li
          v-for="item in continents.russiaCentralAsia" 
          v-bind:class="{'bg-discrimination': isDiscrimination(item.meta_nature_persecution), 'bg-red': isPersecution(item.meta_nature_persecution),'selected': isSelected($index) }">
          <a v-bind:href="item.guid">{{item.meta_country}}</a>
          <span>
            <img v-bind:src="getIcon(item.meta_situation)" alt="">
          </span>
        </li>
      </ul>

      <button 
        class="bg-dark_jungle map__search__list_btn color-rolling-store" 
        v-on:click="showContinent('westernEurope')" ><?php echo gett('Western Europe') ?></button>

      <ul class="map__search_results" data-country="westernEurope" style="display: none">
        <li
          v-for="item in continents.westernEurope" 
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

</script>

<search-list
  lang='<?php echo $getReportLang ?>'
  dir="<?php echo get_template_directory_uri(); ?>" 
  continents='<?php echo json_encode( getContinents() ); ?>'
>
</search-list>

