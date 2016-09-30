<?php

function report_background($post) {
  $report_background = get_post_meta($post->ID, 'report_background_key', true);

  ?>
  <p>
    <label for="report_background"><b>background</b></label>
  </p>
  <p>
    <input
      type="text"
      class="uploader"
      name="report_background"
      placeholder="background"
      value="<?php echo $report_background ?>"
    >
  </p>
  <?php
}

 ?>
