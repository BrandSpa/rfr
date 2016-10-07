<?php get_header() ?>

<div class="container-fluid">

  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <?php the_content() ?>

    <div style="padding-top: 100px"></div>


  <?php endwhile; else : ?>
    <h1><?php _e( 'Sorry, no posts matched your criteria.' ); ?></h1>
  <?php endif; ?>
</div>

<script type="text/javascript">
  var userGeoData = JSON.parse(<?php echo json_encode(geoip_detect2_get_info_from_current_ip()) ?>);
  console.log(userGeoData);
</script>

<?php get_footer() ?>
