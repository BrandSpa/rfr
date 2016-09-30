<?php

function report_population($post) {
    $report_population = get_post_meta($post->ID, 'report_population_key', true);
  ?>
  <p>
    <input
      type="text"
      placeholder="Population"
      name="report_population"
      value="<?php echo $report_population ?>">
  </p>

  <?php
}

 ?>
