<?php
$dir_base =  str_replace('apis', '', __DIR__);
include_once 'mailchimp.php';
include_once 'stripe.php';
include_once $dir_base . '/lib/get_reports.php';
include_once $dir_base . '/lib/translate_list.php';
include_once $dir_base . '/lib/countries.php';

add_action( 'wp_ajax_nopriv_mailchimp_subscribe', 'mailchimp_subscribe' );
add_action( 'wp_ajax_mailchimp_subscribe', 'mailchimp_subscribe' );

function mailchimp_subscribe() {
  $data = json_encode($_POST['data']);
  $listId = $_POST['lang'];
  $res = mc_subscribe($data, $listId);
  header('Content-type: application/json');
  echo $res;
  die();
}

add_action( 'wp_ajax_nopriv_stripe_token', 'stripe_token' );
add_action( 'wp_ajax_stripe_token', 'stripe_token' );

function stripe_token() {
  $card = $_POST['data'];
  $apiKey =  get_option('stripe_key_private');
  $res = stripe_create_token( $apiKey, $card);
  header('Content-type: application/json');
  echo json_encode($res);
  die();
}

add_action( 'wp_ajax_nopriv_stripe_charge', 'stripe_charge' );
add_action( 'wp_ajax_stripe_charge', 'stripe_charge' );

function stripe_charge() {
  $data = $_POST['data'];
  $apiKey =  get_option('stripe_key_private');
  $res = stripe_monthly($apiKey, $data);
  header('Content-type: application/json');
  echo json_encode($res);
  die();
}

add_action( 'wp_ajax_nopriv_reports', 'reports' );
add_action( 'wp_ajax_reports', 'reports' );

function reports() {
  $data = $_POST['data'];
  $res = getReports($data);
  header('Content-type: application/json');
  echo wp_json_encode($res);
  die();
}

add_action( 'wp_ajax_nopriv_countries_translations', 'countries_translations' );
add_action( 'wp_ajax_countries_translations', 'countries_translations' );

function countries_translations() {
  $data = $_POST['data'];
  $res = array_combine( getCountries(), trans_list(getCountries()) );
  header('Content-type: application/json');
  echo json_encode($res);
  die();
}
