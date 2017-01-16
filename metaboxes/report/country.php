<?php

  function report_country($post) {
    $report_country = get_post_meta($post->ID, 'report_country_key', true);
  ?>

  <p>
    <select name="report_country" id="">
      <?php if (!empty($report_country)): ?>
        <option value="<?php echo $report_country ?>"><?php echo $report_country ?></option>
        <?php else: ?>
          <option value="">Select Country</option>
      <?php endif; ?>

      <?php foreach (getCountries() as $country): ?>
        <option value="<?php echo $country; ?>"><?php echo $country; ?></option>
      <?php endforeach; ?>
    </select>
  </p>

  <?php
  }

 ?>
