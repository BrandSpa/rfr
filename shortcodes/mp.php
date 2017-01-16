<?php
  $map_svg_url = get_template_directory_uri() . '/public/img/map.svg';
  $getReportLang = getLang();
?>

<?php include('search_country.php') ?>
<?php include('search_list.php') ?>

<map
  report-lang=<?php echo $getReportLang ?> 
  countries-translation='<?php echo json_encode( array_combine( getCountries(), trans_list(getCountries()) ) ) ?>'
  map-url='<?php echo $map_svg_url ?>'
  url='<?php echo get_template_directory_uri() ?>'
  lang='<?php echo $getReportLang ?>'
  lang-trans="<?php echo json_encode(trans_list(getCountries())) ?>"
>
</map>

<script type="text/template" id="map-template">
  <div id="map" class="map">
  
    <div class="row map__header">
      <div class="col-md-8">
        <h1 class="title title-line color-red">
          <?php echo gett('BY COUNTRY'); ?>
        </h1>
        <p style="color: #fff"><?php echo gett('Click on any country to see its report.') ?></p>
      </div>
      
      <div class="col-md-4 map__header__btns">
        <div class="col-xs-6">
          <button class="button button--fill" v-on:click="showSearchList"><?php echo gett('LIST'); ?></button>
        </div>

        <div class="col-xs-6">
          <div class="map__search_input-container">
            <button class="button button--fill map__search_click" v-on:click="showSearch"></button>
          </div>
        </div>
      </div>

    </div>

  <div id="map-container">
    <div class="map__zoom_btns">
      <button class="zoom_btn zoom_reset">
        <svg width="27px" height="26px" viewBox="7 7 27 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch -->
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <circle id="Oval-3" stroke="#FFFFFF" stroke-width="2" fill="none" cx="20.5" cy="19.5" r="7.5"></circle>
            <g id="Group-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(8.500000, 19.000000)" stroke-linecap="square">
                <path d="M20,1 L24,1" id="Line" stroke="#FFFFFF" stroke-width="2"></path>
                <path d="M0,1 L4,1" id="Line" stroke="#FFFFFF" stroke-width="2"></path>
            </g>
            <g id="Group-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(20.500000, 20.000000) rotate(90.000000) translate(-20.500000, -20.000000) translate(8.500000, 19.000000)" stroke-linecap="square">
                <path d="M20,1 L24,1" id="Line" stroke="#FFFFFF" stroke-width="2"></path>
                <path d="M0,1 L4,1" id="Line" stroke="#FFFFFF" stroke-width="2"></path>
            </g>
        </svg>
      </button>
      <button class="zoom_btn zoom_more">+</button>
      <button class="zoom_btn zoom_less">-</button>
    </div>
  </div>

  <div class="row map__footer">
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
</script>

