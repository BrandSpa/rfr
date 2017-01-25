
<div id="download-report" style="background: #fff; padding: 60px 40px">

  <h1 class="title-center title-line color-red">
  <?php if(geoip_detect2_get_info_from_current_ip()->country->names['en'] == 'Canada'): ?>
    <?php echo get_option('footer_title'); ?>
  <?php else: ?>
    <?php echo gett('ABOUT US'); ?>
  <?php endif; ?>
  </h1>

  <div class="row">
    <div class="col-md-1"></div>

    <div class="col-md-1">
      <img width="65px" style="margin:0 auto; text-align:center" src="<?php echo get_template_directory_uri() ?>/public/img/logo_simple.png" alt="">
    </div>

    <div class="col-md-9">
      <p>
       <?php if(geoip_detect2_get_info_from_current_ip()->country->names['en'] == 'Canada'): ?>
        <?php echo get_option('footer_text'); ?>
      <?php else: ?>
         <?php echo gett('"ACN es una fundación internacional dependiente del Vaticano nacida en 1.947 que desarrolla anualmente más de 6.000 proyectos pastorales en más de 140 países. Por medio de tres pilares - oración, información y soporte financiero - ACN ayuda a cristianos perseguidos, que sufren y pasan necesidad en el mundo."') ?>
      <?php endif; ?>
      </p>
    </div>
    <div class="col-md-1"></div>
  </div>
    <div style="padding-bottom: 60px"></div>
  <div class="row">

    <div class="col-md-2"></div>
    <div class="col-md-8">
      <a href="<?php echo get_option('redirect_url_' . getOfficeCountry())  ?>" class="button">
       <?php if(geoip_detect2_get_info_from_current_ip()->country->names['en'] == 'Canada'): ?>
        <?php echo get_option('footer_title'); ?>
      <?php else: ?>
        <?php echo gett('"ACN es una fundación internacional dependiente del Vaticano nacida en 1.947 que desarrolla anualmente más de 6.000 proyectos pastorales en más de 140 países. Por medio de tres pilares - oración, información y soporte financiero - ACN ayuda a cristianos perseguidos, que sufren y pasan necesidad en el mundo."') ?>
      <?php endif; ?>
      
      </a>
    </div>
    <div class="col-md-2"></div>
  </div>
</div>
