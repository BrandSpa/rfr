<?php 
  include_once str_replace('metaboxes', '', __DIR__) . '/lib/update_field.php';
  include_once str_replace('metaboxes', '', __DIR__) . '/lib/countries.php';

  function bs_page_redirect_metabox() {

    $post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;

    add_meta_box('page_redirect', 'Page redirect info', 'bs_page_redirect_cb', 'page', 'normal', 'high', null);
  }

  add_action('add_meta_boxes', 'bs_page_redirect_metabox');

  function bs_page_redirect_cb($post) {
    wp_nonce_field('bs_page_mr_meta', 'bs_multiregional_nonce');
    $langs = get_terms( array( 'taxonomy' => 'language', 'hide_empty' => false, )); 
    $url = get_post_meta($post->ID, 'page_redirect_url_key', true);
    $mr = get_post_meta($post->ID, 'page_redirect_country_key', true);
?>

<div id="metaboxes-report">

<p>
  <select name="page_redirect_country" >
      <?php if ($mr && !empty($mr)): ?>
        <option value="<?php echo $mr ?>"><?php echo $mr ?></option>
        <?php else: ?>
          <option value="">Select Country</option>
      <?php endif; ?>

      <?php foreach (getCountries() as $country): ?>
        <option value="<?php echo $country; ?>"><?php echo $country; ?></option>
      <?php endforeach; ?>

  </select>
</p>

<p>
	<input type="text" name="page_redirect_url" value="<?php echo $url ?>">
</p>

<button class="button">Save</button>


</div>
<?php
 
}
  function bs_save_page_redirect_meta($post_id) {

    update_field(array(
      'field_key' => 'page_redirect_country_key',
      'field_name' => 'page_redirect_country',
      'post_id' => $post_id
    ));

		update_field(array(
      'field_key' => 'page_redirect_url_key',
      'field_name' => 'page_redirect_url',
      'post_id' => $post_id
    ));
}

  add_action( 'save_post', 'bs_save_page_redirect_meta');
?>