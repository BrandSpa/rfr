<?php
  include_once str_replace('metaboxes/report', '', __DIR__) . '/lib/political_system.php';

function report_political_system($post) {
  $report_political_system = get_post_meta($post->ID, 'report_political_system_key', true);
  $report_political_system_sup = get_post_meta($post->ID, 'report_political_system_sup_key', true);

  ?>
  <p>
    <select name="report_political_system">
      <?php if($report_political_system): ?>
      <option value="<?php echo $report_political_system ?>"><?php echo $report_political_system ?></option>
      <?php else: ?>
        <option value="">Select political system</option>
      <?php endif; ?>

      <?php foreach (getPoliticalSystem() as $nature): ?>
        <option value="<?php echo $nature ?>"><?php echo $nature ?></option>
      <?php endforeach; ?>

    </select>

    <input
      type="text"
      name="report_political_system_sup"
      placeholder="Political System Sup"
      value="<?php echo $report_political_system_sup ?>"
      />

  </p>
  <?php
}

 ?>
