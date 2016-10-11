<?php $report_content = get_post_meta($post->ID, 'report_content_key', true) ?>

<?php if(is_array($report_content)): ?>

  <?php foreach ($report_content as $key => $content): ?>
  <div class="report__content <?php echo $key ?>">

    <?php if( !empty($content['title']) ): ?>
      <div class="report__content-header">

        <h1 class="title-line title-uppercase">
          <?php echo $content['title'] ?>
        </h1>

      </div>

    <?php endif; ?>

    <?php if( !empty($content['text']) ): ?>
      <div class="report__content-content">

        <p>
          <?php echo $content['text'] ?>
        </p>

      </div>
    <?php endif; ?>

  </div>
  <?php endforeach; ?>

<?php endif; ?>
