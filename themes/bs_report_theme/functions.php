<?php
/*
 * BrandSpa (http://brandspa.com)
 * Alejandro Sanabria <alejandro@brandspa.com>
 * Copyright 2016 BrandSpa
 */

//folders names
$base = __DIR__;
$lib = 'lib';
$options = 'options';
$shortcodes = 'shortcodes';
$metaboxes = 'metaboxes';

//include all libs from composer
//is necessary first check if the folder exists
require 'vendor/autoload.php';

//include lib functions
include_once $lib . '/geo_info.php';
include_once $lib . '/get_meta.php';
include_once $lib . '/get_lang.php';
include_once $lib . '/religions_colors.php';
include_once $lib . '/translations.php';
include_once $lib . '/get_translation.php';
include_once $lib . '/translate_array.php';
include_once $lib . '/translate_list.php';
include_once $lib . '/countries.php';
include_once $lib . '/continents.php';
include_once $lib . '/get_reports.php';
include_once $lib . '/get_user_country.php';
include_once $lib . '/get_office_country.php';
include_once $lib . '/countries_info.php';

include_once $options . '/info.php';

setTranslations();

//include metaboxes
include_once $metaboxes . '/report.php';
include_once $metaboxes . '/page_multi_regional.php';

//include shortcodes
include_once $shortcodes . '/map.php';
include_once $shortcodes . '/download_report_sc.php';
include_once $shortcodes . '/subscribe_sc.php';
include_once $shortcodes . '/link.php';
include_once $shortcodes . '/home_header.php';

//add navigation menus
register_nav_menus(
  array(
    'main' => 'Main nav',
    'footer' => 'Footer nav',
  )
);

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
//fix remove paragraphs from editor
remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );

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

function getLangList() {
  if( function_exists('pll_the_languages') ) {
    return pll_the_languages();
  }  else {
    return _e('install polylang plugin');
  }
}


// function setNewLang() {
//   $uri = $_SERVER['REQUEST_URI'];
//   $iso = getUserCountry()->isoCode;
//   $lang = getCountriesInfo($iso)->languages[0];
  
//   unset($_COOKIE["pll_language"]);

//   print_r($_COOKIE["pll_language"]);

//   setcookie("pll_language", $lang);
  
//   print_r(isset(pll_the_languages( array( 'raw' => 1 ) )[$lang]) && is_array(pll_the_languages( array( 'raw' => 1 ) )[$lang]));

// }

// setNewLang();

?>