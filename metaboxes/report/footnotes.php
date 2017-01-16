<?php

  function report_footnotes() {
      $report_footnotes = get_post_meta($post->ID, 'report_footnotes_key', true);
    ?>
      <h3>Footnotes</h3>
      <hr>
      <p>
        <?php wp_editor($report_footnotes, 'report_footnotes'); ?>
      </p>
    <?php
  }

 ?>
