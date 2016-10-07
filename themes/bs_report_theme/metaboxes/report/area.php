<?php

function report_area($post) {
  $report_area = get_post_meta($post->ID, 'report_area_key', true);
  $report_area_sup = get_post_meta($post->ID, 'report_area_sup_key', true);

  ?>
    <p>
      <input
        type="text"
        placeholder="Area"
        name="report_area"
        value="<?php echo $report_area ?>">

        <input
          type="text"
          placeholder="Area Sup"
          name="report_area_sup"
          value="<?php echo $report_area_sup ?>">
    </p>

  <?php
}

 ?>
