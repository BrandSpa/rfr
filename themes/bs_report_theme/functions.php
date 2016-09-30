<?php
/*
 * BrandSpa (http://brandspa.com)
 * Alejandro Sanabria <alejandro@brandspa.com>
 * Copyright 2016 BrandSpa
 */
require 'vendor/autoload.php';
//folders names
$base = __DIR__;
$lib = 'lib';
$shortcodes = 'shortcodes';
$metaboxes = 'metaboxes';

//include lib functions
include_once $lib . '/geo_info.php';
include_once $lib . '/get_meta.php';
include_once $lib . '/religions_colors.php';
include_once $lib . '/translations.php';
include_once $lib . '/get_translation.php';
include_once $lib . '/translate_array.php';
setTranslations();
//include metaboxes
include_once $metaboxes . '/report.php';

// JS on admin
function enqueue_scripts()
{
  wp_enqueue_media();
  wp_enqueue_script( 'highcharts', '//code.highcharts.com/highcharts.js', array(), '3', true );
  wp_enqueue_script( 'highcharts_exporting', '//code.highcharts.com/modules/exporting.js', array(), '3', true );
  wp_enqueue_script( 'vue', '//cdnjs.cloudflare.com/ajax/libs/vue/1.0.27/vue.min.js', array(), '2', true );
  wp_enqueue_script( 'app_script', get_template_directory_uri() . '/public/js/admin.js',array(), '4', true  );
}

add_action('admin_enqueue_scripts', 'enqueue_scripts');

function my_mce_buttons_2( $buttons ) {
	/**
	 * Add in a core button that's disabled by default
	 */
	$buttons[] = 'superscript';
	$buttons[] = 'subscript';

	return $buttons;
}


add_filter( 'mce_buttons_2', 'my_mce_buttons_2' );

function bs_add_report_type() {
  register_post_type( 'reports',

    array(
      'labels' => array(
        'name' => 'Reports',
        'singular_name' => 'report',
        'add_new' => "New report",
        'edit_item' => "Edit report",
        'add_new_item' => "Add report",
        'new_item' => "Add report"
      ),
      'taxonomies' => array('category'),
      'supports' => array( 'title', 'editor', 'thumbnail' ),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'report'),
    )
  );
}

add_action( 'init', 'bs_add_report_type' );

if(function_exists('set_pdf_print_support')) {
  set_pdf_print_support(['reports']);
}
?>
