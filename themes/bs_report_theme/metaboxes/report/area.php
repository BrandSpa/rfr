<?php

function report_area($post) {
  $report_area = get_post_meta($post->ID, 'report_area_key', true);
  ?>
    <p>
      <input
        type="text"
        placeholder="Area"
        name="report_area"
        value="<?php echo $report_area ?>">
    </p>

  <?php
}

 ?>
