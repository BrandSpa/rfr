<?php

 function addMetaToPost($obj) {
    $obj->meta_year = get_post_meta($obj->ID, 'report_year_key', true);
    $obj->meta_country = get_post_meta($obj->ID, 'report_country_key', true);
    $obj->meta_situation = get_post_meta($obj->ID, 'report_situation_key', true);
    $obj->meta_nature_persecution = get_post_meta($obj->ID, 'report_nature_persecution_key', true);
    return $obj;
  }

  function getReports($params) {
    $args = array(
      'meta_key'  => 'report_year_key',
      'meta_value' => '2016',
      'post_type' => 'reports',
      'numberposts' => -1,
      'orderby' => 'title',
      'order' => 'ASC',
      'post_status' => 'publish'
    );

    $args = array_merge($args, $params);
    $posts = get_posts( $args );

    return array_map('addMetaToPost', $posts);
  }

?>