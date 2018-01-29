<?php
/*
 * BrandSpa (http://brandspa.com)
 * Alejandro Sanabria <alejandro@brandspa.com>
 * Copyright 2016 BrandSpa
 */

//folders names
$base = __DIR__;
$lib = 'lib';
$api = 'apis';
$options = 'options';
$shortcodes = 'shortcodes';
$metaboxes = 'metaboxes';

if(file_exists('vendor/autoload.php')) {
  require 'vendor/autoload.php';
}

//include necessary functions to theme works like it has
include 'lib/index.php';
include 'apis/index.php';
include 'options/index.php';
include 'metaboxes/index.php';
include_once 'shortcodes/map.php';
include_once 'shortcodes/map_react.php';
include_once 'shortcodes/download_report_sc.php';
include_once 'shortcodes/subscribe_sc.php';
include_once 'shortcodes/subscribe_react.php';
include_once 'shortcodes/link.php';
include_once 'shortcodes/home_header.php';
include_once 'shortcodes/slider.php';
include_once 'shortcodes/contact_info.php';
include_once 'shortcodes/header_slider.php';
include_once 'shortcodes/download_report_react.php';

setTranslations();

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
function modify_jquery() {
	if (!is_admin()) {
		// comment out the next two lines to load the local copy of jQuery
		wp_deregister_script('jquery');
    wp_deregister_script( 'wp-embed');
		wp_register_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js', false, '1.12.4');
		wp_enqueue_script('jquery');
	}
}

add_action('init', 'modify_jquery');

function redirect_to_office() {
  $url = get_option('office_redirect_' . str_replace(' ', '_', getOfficeCountry()) );

  if(!empty($url)) {
    header ("Location:" . $url);
    exit;
  }

}

redirect_to_office();

function cleanQuote($val) {
	return str_replace("'", "\u0027", $val);
}

if(!function_exists('getCountry')) {
  function getCountry() {
    if(function_exists('geoip_detect2_get_info_from_current_ip')): 
      return geoip_detect2_get_info_from_current_ip()->country->names['en']; 
    endif;
    return '';
  }
}

function getCountryLang($name) {
    $json = file_get_contents(__DIR__ . '/countries_lang.json');
    $countries = json_decode($json);

    $country = array_filter($countries, function($arr) use($name) {
      return $arr->name == $name;
    });

		if(array_keys($country)) {
			return $country[array_keys($country)[0]] ? $country[array_keys($country)[0]]->languages[0] : 'en';
		} else {
			return 'en';
		}
	
}

function redirectToLang() {
	$lang = getCountryLang(getCountry());
	if(!isset($_COOKIE['bs-lang']) && empty($_COOKIE['bs-lang'])) {
		$url = pll_the_languages( array( 'raw' => 1 ) )[$lang]['url'];
		setcookie('bs-lang', $lang);
		header('Location:'. $url);
		exit;
	} 
}

/**
**	Not redirect if the call is via ajax
**/

if(function_exists('wp_doing_ajax') && !wp_doing_ajax()) {
	redirectToLang();
}


?>