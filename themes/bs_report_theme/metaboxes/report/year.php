<?php
include_once str_replace('metaboxes/report', '', __DIR__) . '/lib/years.php';

  function report_year($post) {
    $report_year = get_post_meta($post->ID, 'report_year_key', true);
  ?>
  <p>
    <select name="report_year" id="">
      <?php if (!empty($report_year)): ?>
        <option value="<?php echo $report_year ?>"><?php echo $report_year ?></option>
      <?php endif; ?>

      <option value="<?php echo date("Y") ?>"><?php echo date("Y") ?></option>

      <?php foreach (getYears() as $year): ?>
        <option value="<?php echo $year; ?>"><?php echo $year; ?></option>
      <?php endforeach; ?>
    </select>
  </p>

  <?php
  }

 ?>
