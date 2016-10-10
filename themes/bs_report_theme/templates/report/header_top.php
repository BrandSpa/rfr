
<div class="col-md-6">
  <a href="#map" class="report__header__back-map"><?php echo gett('BACK TO MAP') ?></a>

  <div class="report__header__slider_year">
    <?php $year = get_post_meta($post->ID, 'report_year_key', true); ?>
    <a href="?report_year=<?php echo $year - 1 ?>"> < </a>

    <?php echo get_post_meta($post->ID, 'report_year_key', true) ?>

    <a href="?report_year=<?php echo $year + 1 ?>"> > </a>
  </div>

  <h1 class="title">
    <?php echo gett(get_post_meta($post->ID, 'report_country_key', true)) ?>

    <a href="#" class="open-select-countries">
      <img src="<?php echo get_template_directory_uri() . '/public/img/icons/down.svg' ?>" alt="">
    </a>
  </h1>
</div>

<div class="col-md-6">
<?php $country_en = get_post_meta($post->ID, 'report_country_key', true) ?>

    <img
      src="<?php echo get_template_directory_uri() . '/public/img/maps/' . str_replace(' ', '-',  $country_en) . '.png'  ?>"
      class="img-responsive report__header__map"
    >

</div>
