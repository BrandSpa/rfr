<?php
include_once str_replace('metaboxes/report', '', __DIR__) . '/lib/persecution.php';
function report_nature_persecution($post) {
  $report_nature_persecution = get_post_meta($post->ID, 'report_nature_persecution_key', true);

  ?>
  <p>
    <select name="report_nature_persecution">
      <?php if($report_nature_persecution): ?>
      <option value="<?php echo $report_nature_persecution ?>"><?php echo $report_nature_persecution ?></option>
      <?php else: ?>
        <option value="">Select natural persecution</option>
      <?php endif; ?>

      <?php foreach (getPersecution() as $nature): ?>
        <option value="<?php echo $nature ?>"><?php echo $nature ?></option>
      <?php endforeach; ?>

    </select>

  </p>
  <?php
}

 ?>
