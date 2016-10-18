<?php 
  include_once str_replace('metaboxes', '', __DIR__) . '/lib/update_field.php';
  include_once str_replace('metaboxes', '', __DIR__) . '/lib/languages.php';
  include_once str_replace('metaboxes', '', __DIR__) . '/lib/countries.php';

  function bs_page_multi_regional_metabox() {

    $post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;

    add_meta_box('page_multi_regional', 'Multi-regional info', 'bs_page_multi_regional_cb', 'page', 'normal', 'high', null);
  }

  add_action('add_meta_boxes', 'bs_page_multi_regional_metabox');

  function bs_page_multi_regional_cb($post) {
    wp_nonce_field();
?>

<p>
  <select name="multiregional[][country]" >
    <option value="Canada">Canada</option>
  </select>
</p>

<p>
  <select name="multiregional[][lang]" placeholder="country langs" >
    <option value="fr_ca">fr_ca</option>
    <option value="en_ca">en_ca</option>
  </select>
</p>

<?php
var_dump(pll_the_languages());    
}
?>