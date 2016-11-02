<?php
  $uri = $_SERVER['REQUEST_URI'];
  $iso = getUserCountry()->isoCode;
  $lang = getCountriesInfo($iso)->languages[0];
  unset($_COOKIE["pll_language"]);
  setcookie("pll_language", $lang);
  print_r(isset(pll_the_languages( array( 'raw' => 1 ) )[$lang]) && is_array(pll_the_languages( array( 'raw' => 1 ) )[$lang]));
?>

<?php get_header() ?>

<div >

  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <?php the_content() ?>
    
    <?php // this is for the footer ?>
    <div style="padding-top: 100px"></div>

  <?php endwhile; else : ?>
    <h1>
    <?php
      
     ?>
    </h1>
  <?php endif; ?>
</div>

<script type="text/javascript">
  var userGeoData = JSON.parse(JSON.stringify(<?php echo json_encode(geoip_detect2_get_info_from_current_ip()) ?>));
</script>

<?php get_footer() ?>
