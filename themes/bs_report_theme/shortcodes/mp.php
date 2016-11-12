<?php
  $map_svg_url = get_template_directory_uri() . '/public/img/map.svg';
  $getReportLang = getLang();
?>

<?php include('search_country.php') ?>
<?php include('search_list.php') ?>

<map
  posts='<?php echo json_encode( getReports(array('lang' => $getReportLang) )); ?>' 
  :countries-translation='<?php echo json_encode( array_combine( getCountries(), trans_list(getCountries()) ) ) ?>'
  map-url='<?php echo $map_svg_url ?>'
  lang='<?php echo $getReportLang ?>'
  url='<?php echo get_template_directory_uri() ?>'
>
</map>

<script type="text/template" id="map-template">
  <div id="map" class="map">
  
    <div class="row" class="map__header">
      <div class="col-md-8">
        <h1 class="title title-line color-red">
          <?php echo gett('BY COUNTRY'); ?>
        </h1>
        <h4 style="color: #fff"><?php echo gett('Click on any country to see its report.') ?></h4>
      </div>
      
      <div class="col-md-4">
        <div class="col-xs-6">
          <button class="button button--fill" v-on:click="showSearchList"><?php echo gett('LIST'); ?></button>
        </div>

        <div class="col-xs-6">
          <div class="map__search_input-container">
            <button class="button button--fill map__search_click" v-on:click="showSearch"></button>
          </div>
        </div>

         <div class="col-md-12">
          <div class="map__controllers">
            <button class="map__controllers__more button"><?php echo gett('Reset'); ?></button>
          </div>
        </div>
      
      </div>

    </div>

  <div id="map-container"></div>
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

