<?php get_header() ?>
<div class="hidden">
  <?php echo get_post_meta($post->ID,'page_redirect_url_key', true) ?>
  <?php echo get_post_meta($post->ID, 'page_redirect_country_key', true) ?>
</div>

<div >

  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <?php the_content() ?>
    
   

  <?php endwhile; else : ?>
    <h1>
      <?php echo gett('404') ?>
    </h1>
  <?php endif; ?>
</div>

<?php include_once 'shortcodes/about_us.php' ?>
<?php include_once 'shortcodes/press.php' ?>

<?php get_footer() ?>
