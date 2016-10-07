<?php

function report_population($post) {
    $report_population = get_post_meta($post->ID, 'report_population_key', true);
    $report_population_sup = get_post_meta($post->ID, 'report_population_sup_key', true);
  ?>
  
  <p>
    <input
      type="text"
      placeholder="Population"
      name="report_population"
      value="<?php echo $report_population ?>">

      <input
        type="text"
        placeholder="Population sup"
        name="report_population_sup"
        value="<?php echo $report_population_sup ?>">

  </p>

  <?php
}

 ?>
