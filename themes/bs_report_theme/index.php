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

<?php include_once 'shortcodes/about_us.php' ?>
<?php include_once 'shortcodes/press.php' ?>

<?php get_footer() ?>
