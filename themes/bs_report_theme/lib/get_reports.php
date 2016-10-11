<?php

  function getReports() {
    $args = array(
      'meta_key'       => 'report_year_key',
      'meta_value'     => '2016',
      'post_type'        => 'reports',
      'numberposts' => -1
    );

    $params = array(
      'post_type' => 'reports',
      'language' => 'es',
      'post_status' => 'publish'
    );


    $args = array_merge($args, $params);

    return get_posts( $args );
  }

?>