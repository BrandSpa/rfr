<?php

function report_map($post) {
  $report_map = get_post_meta($post->ID, 'report_map_key', true);
  ?>
  <p>
    <label for="report_map"><b>Map</b></label>
  </p>
  <p>
    <input
      type="text"
      placeholder="Map"
      name="report_map" class="uploader"
      value="<?php echo $report_map ?>">
  </p>

  <?php
}

 ?>
