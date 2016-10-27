<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta content="IE=edge" http-equiv=X-UA-Compatible> 
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <title>RELIGIOUS FREEDOM REPORT - <?php wp_title(); ?></title>
    <?php wp_head(); ?>

  <!-- Latest compiled and minified CSS -->
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/public/css/main.css" media="screen" title="no title">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
</head>

<body id="acn_reports">

  <div class="map__info">
    <span class="map__info_country"></span>
    <span class="map__info_situation">
      <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/unchanged.svg" alt="">
    </span>

 
  </div>



<div class="nav_mobile">
  <a href="<?php echo $home ?>" class="nav_mobile__logo">
      <?php if( !empty( get_option("logo_" . str_replace(' ', '_', getOfficeCountry())  )) ): ?>
        <img src='<?php echo get_option("logo_" . str_replace(' ', '_', getOfficeCountry())  ) ?>'  alt="acn logo" class="img-responsive" />
      <?php else: ?>
         <img src="<?php echo get_template_directory_uri(); ?>/public/img/logo.png" alt="acn logo">
      <?php endif; ?>
  </a>

  <h4 class="nav_mobile__subtitle">
    RELIGIOUS <span class="color-red">FREEDOM</span><br>
    REPORT 2016
  </h4>

</div>

<div class="nav">
  <div class="nav__logo" style="height: 120px;background: #fff">
    <?php
    $home = '/';
      if(function_exists('pll_home_url')) {
        $home = pll_home_url();
      }
     ?>

    <a href="<?php echo $home ?>">
     
      <?php if( !empty( get_option("logo_" . str_replace(' ', '_', getOfficeCountry())  )) ): ?>
        <img src='<?php echo get_option("logo_" . str_replace(' ', '_', getOfficeCountry())  ) ?>'  alt="acn logo" class="img-responsive" />
      <?php else: ?>
         <img src="<?php echo get_template_directory_uri(); ?>/public/img/logo.png" alt="acn logo">
      <?php endif; ?>
    </a>

  </div>

  <h4 class="nav__subtitle">
    RELIGIOUS<br>
    <span class="color-red">FREEDOM</span><br>
    REPORT<br>
    2016
  </h4>

  <?php
      $args = array(
        'theme_location' => 'main',
        'container' => false,
        'echo' => true
      );

      $menu = wp_nav_menu( $args);

   ?>
</div>

<?php include 'shortcodes/select_country.php' ?>