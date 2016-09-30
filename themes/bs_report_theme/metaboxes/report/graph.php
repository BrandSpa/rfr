<?php

function report_graph($post) {
  $report_graph = get_post_meta($post->ID, 'report_graph_key', true);
  ?>
  <p>
    <label for="report_graph"><b>Graph</b></label>
  </p>
    <p>
      <input
        type="text"
        placeholder="Graph"
        name="report_graph"
        class="uploader"
        value="<?php echo $report_graph ?>">
    </p>

  <?php
}

 ?>
