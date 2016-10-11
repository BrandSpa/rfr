<?php $report_content = get_post_meta($post->ID, 'report_content_key', true) ?>

<?php if(is_array($report_content)): ?>

  <?php foreach ($report_content as $key => $content): ?>
  
  <div class="report__content <?php echo $key ?>">

    <?php if( !empty($content['title']) ): ?>
      <div class="col-md-6">
      
        <div class="report__content-header">

          <h1 class="title-line title-uppercase">
            <?php echo $content['title'] ?>
          </h1>

        </div>

      </div>

    <?php endif; ?>

    <?php if( !empty($content['text']) ): ?>
    <div class="row">
      <div class="col-md-3">
      </div>
      
      <div class="col-md-9">
        <div class="report__content-content">

          <p>
            <?php echo $content['text'] ?>
          </p>

        </div>
      </div>
    </div>
    <?php endif; ?>

  </div>
  <?php endforeach; ?>

<?php endif; ?>
