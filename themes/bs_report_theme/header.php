<?php
//redirect to office
$url = get_option('office_redirect_' . str_replace(' ', '_', getOfficeCountry()) );

if(!empty($url)) {
  header ("Location:" . $url);
  exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta content="IE=edge" http-equiv=X-UA-Compatible> 
    <meta name="viewport" content="initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <meta property="og:image" content="<?php echo the_post_thumbnail_url( 'full' ) ?>" />
    <meta property="og:title" content="RELIGIOUS FREEDOM REPORT - <?php wp_title(); ?>" />

    <title>RELIGIOUS FREEDOM REPORT - <?php wp_title(); ?></title>
    <?php wp_head(); ?>

  <!-- Latest compiled and minified CSS -->
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/public/css/main.css" media="screen" title="no title">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.3/flexslider.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  
  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K7HJH5');</script>
<!-- End Google Tag Manager -->

</head>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7HJH5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<body id="acn_reports">

  <div class="map__info">
    <span class="map__info_country"></span>
    <span class="map__info_situation">
      <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/unchanged.svg" alt="">
    </span> 
  </div>

<?php
  $home = '/';
  if(function_exists('pll_home_url')) {
    $home = pll_home_url();
  }
?>

<div class="nav_mobile">
  <a href="<?php echo $home ?>" class="nav_mobile__logo">
      <?php if( !empty( get_option("logo_" . str_replace(' ', '_', getOfficeCountry())  )) ): ?>
        <img src='<?php echo get_option("logo_" . str_replace(' ', '_', getOfficeCountry())  ) ?>'  alt="acn logo" class="img-responsive" />
      <?php else: ?>
         <img src="<?php echo get_template_directory_uri(); ?>/public/img/logo.png" alt="acn logo" class="img-responsive" />
      <?php endif; ?>
  </a>

  <h4 class="nav_mobile__subtitle">
    <?php echo gett('RELIGIOUS <span class="color-red">FREEDOM</span><br> REPORT', true) ?> <?php echo date('Y') ?>
  </h4>

     <a href="#" id="open-nav">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </a>

</div>

<div class="nav">
  <div class="nav__logo" style="height: 120px;background: #fff">
    
    <a href="<?php echo $home ?>">
     
      <?php if( !empty( get_option("logo_" . str_replace(' ', '_', getOfficeCountry())  )) ): ?>
        <img src='<?php echo get_option("logo_" . str_replace(' ', '_', getOfficeCountry())  ) ?>'  alt="acn logo" class="img-responsive" width="200"  />
      <?php else: ?>
         <img src="<?php echo get_template_directory_uri(); ?>/public/img/logo.png" alt="acn logo" width="200" >
      <?php endif; ?>
    </a>

  </div>
  
  <a href="<?php echo $home ?>">
    <h4 class="nav__subtitle">
      <?php echo gett('RELIGIOUS <span class="color-red">FREEDOM</span><br>REPORT', true) ?> <?php echo date('Y') ?>
    </h4>
  </a>

  <?php
      $args = array(
        'theme_location' => 'main',
        'container' => false,
        'echo' => true
      );

      $menu = wp_nav_menu( $args);

   ?>
</div>
