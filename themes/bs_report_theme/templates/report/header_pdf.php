<div class="report__header_pdf">

  <div class="col-md-6 report__header_pdf__download">
    <a href="?pdf=true" class="center_horizontal">
        <h5>
          <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/pdf.svg"> <?php echo gett('DOWNLOAD REPORT') ?>
        </h5>
    </a>
  </div>

  <div class="col-md-6">
    <div class="row">
      <div class="col-md-6 report__header_pdf__item">
        <h5 class="color-red pull-left">
          <?php echo gett('NATURE OF PERSECUTION') ?>
        </h5>

        <?php if(get_post_meta($post->ID, 'report_nature_persecution_key', true)): ?>
          <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/<?php echo get_post_meta($post->ID, 'report_nature_persecution_key', true) ?>.svg" alt="">
          <p>
            <?php echo gett( get_post_meta($post->ID, 'report_nature_persecution_key', true) ) ?>
          </p>
        <?php else: ?>
          <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/Stable.svg" alt="">
          <p><?php echo gett('Stable') ?></p>
        <?php  endif; ?>
      </div>

      <div class="col-md-6 report__header_pdf__item">
        <h5 class="color-red pull-left"><?php echo gett('SITUATION') ?></h5>
        <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/<?php echo get_post_meta($post->ID, 'report_situation_key', true) ?>.svg" alt="">
        <p>
          <?php echo gett(get_post_meta($post->ID, 'report_situation_key', true)) ?>
        </p>
      </div>

    </div>
  </div>
</div>
