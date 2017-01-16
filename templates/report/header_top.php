<?php $country_en = get_post_meta($post->ID, 'report_country_key', true) ?>
<div class="col-md-8">
  <a href="#map" class="report__header__back-map"><?php echo gett('BACK TO MAP') ?></a>

  <h1 class="title">
    <?php echo gett($country_en); ?>
    <a href="#" class="open-select-countries">
      <img src="<?php echo get_template_directory_uri() . '/public/img/icons/down.svg' ?>" alt="">
    </a>
  </h1>
</div>

<div class="col-md-4">


    <img
      src="<?php echo get_template_directory_uri() . '/public/img/maps/' . str_replace(' ', '-',  $country_en) . '.png'  ?>"
      class="img-responsive report__header__map"
    >

</div>
