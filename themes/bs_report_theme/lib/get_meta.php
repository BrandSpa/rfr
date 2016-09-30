<?php

function getMeta($post, $key) {

  if($post && $key) {
    $meta = get_post_meta($post->ID, $key, true);

    if($meta) {
      return $meta;
    }

  }

}

 ?>
