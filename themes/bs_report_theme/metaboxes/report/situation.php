<?php
include_once str_replace('metaboxes/report', '', __DIR__) . '/lib/situation.php';

function report_situation($post) {
  $report_situation = get_post_meta($post->ID, 'report_situation_key', true);

  ?>
  <p>
    <select class="" name="report_situation">
      <?php if ($report_situation): ?>
        <option value="<?php echo $report_situation ?>"><?php echo $report_situation ?></option>
        <?php else: ?>
          <option value="">Select situation</option>
      <?php endif; ?>
      <?php foreach (getSitutations() as $situation): ?>
        <option value="<?php echo $situation ?>"><?php echo $situation ?></option>
      <?php endforeach; ?>
    </select>
  </p>
  <?php
}

 ?>
