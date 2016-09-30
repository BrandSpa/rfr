<?php

function report_content($post) {
  $report_content =  get_post_meta($post->ID, 'report_content_key', true);
  $report_content_count = count($report_content);
  ?>

  <h3>Contents</h3>
  <hr/>

  <?php if(is_array($report_content) && count($report_content) > 0): ?>

    <?php foreach ($report_content as $key => $content): ?>
      <div class="<?php echo 'content-' . $key ?>">
        <p>
          <input type="text" name="report_content[<?php echo $key ?>][title]" placeholder="title" value="<?php echo $content['title'] ?>" style="width: 100%">
        </p>
        <p>
          <?php if(wp_editor($content['text'], 'report_content_' . $key, array('textarea_name' => 'report_content['. $key .'][text]'))): ?>
        <?php wp_editor($content['text'], 'report_content_' . $key, array('textarea_name' => 'report_content['. $key .'][text]')); ?>
      <?php endif; ?>
        </p>

      </div>
    <?php endforeach; ?>

    <?php for($i = $report_content_count + 1; $i < 9; $i++): ?>
      <div class="<?php echo 'content-' . $i ?>">
      <p>
        <input type="text" name="report_content[<?php echo $i ?>][title]" placeholder="title" value="" style="width: 100%">
      </p>
      <p>
      <?php wp_editor('', 'report_content_' . $i, array('textarea_name' => 'report_content['. $i .'][text]')); ?>
      </p>
    </div >
    <?php endfor; ?>

  <?php else: ?>

    <?php for($i = 0; $i <= 9; $i++): ?>
      <div class="<?php echo 'content-' . $i ?>">
        <p>
          <input type="text" name="report_content[<?php echo $i ?>][title]" placeholder="title" value="" style="width: 100%">
          <?php wp_editor('', 'report_content_' . $i, array('textarea_name' => 'report_content['. $i .'][text]')); ?>
        </p>
      </div>
    <?php endfor; ?>

  <?php endif; ?>


  <button class="button btn-add-content">Add new content</button>

  <div class="append-content"></div>

  <?php
}

 ?>
