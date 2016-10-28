<?php
  $map_svg_url = get_template_directory_uri() . '/public/img/map.svg';
  $getReportLang = getLang();
?>

<?php include('search_country.php') ?>

<map
  posts='<?php echo json_encode( getReports(array('lang' => $getReportLang) )); ?>' 
  :countries-translation='<?php echo json_encode( array_combine( getCountries(), trans_list(getCountries()) ) ) ?>'
  map-url='<?php echo $map_svg_url ?>'
  lang='<?php echo $getReportLang ?>'
>
</map>

<template id="map-template">


  <div id="map" class="map">
  
    <div class="row">
      <div class="col-md-9">
        <h1 class="title title-line color-red">
          <?php echo gett('RELIGIOUS FREEDOM <br> IN THE WORLD', true); ?>
        </h1>
      </div>

      <div class="col-md-3">
        <div class="col-xs-6">
          <button class="button"><?php echo gett('List'); ?></button>
        </div>
        <div class="col-xs-6">

        <div class="map__search_input-container">
          <button class="button map__search_click">Search</button>
        </div>
      </div>
      
      </div>

        <div class="col-md-12">
          <div class="map__controllers">
            <button class="map__controllers__more button"><?php echo gett('Reset'); ?></button>
          </div>
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

 <script>
  document.addEventListener("DOMContentLoaded", function(){
    var input = document.querySelector('.map__search_click');
    console.log(input);
          input.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('yeah');
            document.querySelector('.map__search').classList.add('map__search--show');
          });
  });        
</script>