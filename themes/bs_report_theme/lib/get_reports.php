<?php

  function getReports($params) {
    $args = array(
      'meta_key'       => 'report_year_key',
      'meta_value'     => '2016',
      'post_type'        => 'reports',
      'numberposts' => -1,
      'orderby' => 'title',
      'post_status' => 'publish'
    );

    $args = array_merge($args, $params);

    return get_posts( $args );
  }

?>