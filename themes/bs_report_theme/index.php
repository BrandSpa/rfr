<?php get_header() ?>

<div class="container-fluid">

  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <?php the_content() ?>

    <div style="padding-top: 100px"></div>
    <?php echo json_encode(geoip_detect2_get_info_from_current_ip()) ?>

  <?php endwhile; else : ?>
    <h1><?php _e( 'Sorry, no posts matched your criteria.' ); ?></h1>
  <?php endif; ?>
</div>

<?php get_footer() ?>
