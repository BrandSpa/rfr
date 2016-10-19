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
    $report_country = get_post_meta($post->ID, 'page_mr_country_key', true);
    $report_country = get_post_meta($post->ID, 'page_mr_country_key', true);
?>

<p>
  <select name="multiregional[][country]" >
      <?php if (!empty($report_country)): ?>
        <option value="<?php echo $report_country ?>"><?php echo $report_country ?></option>
        <?php else: ?>
          <option value="">Select Country</option>
      <?php endif; ?>

      <?php foreach (getCountries() as $country): ?>
        <option value="<?php echo $country; ?>"><?php echo $country; ?></option>
      <?php endforeach; ?>

  </select>
</p>

<p>
  <select name="multiregional[][lang]" placeholder="country langs" >
    <?php 
      $langs = get_terms( array(
        'taxonomy' => 'language',
        'hide_empty' => false,
      )); 
									foreach($langs as $lang) {
									?>
									<option value="<?php echo $lang->slug ?>"><?php echo $lang->name ?></option>
									<?php
									}
								?>
  </select>
</p>
<p>
  <select name="multiregional[][lang]" placeholder="country langs" >
    <?php 
      $langs = get_terms( array(
        'taxonomy' => 'language',
        'hide_empty' => false,
      )); 
									foreach($langs as $lang) {
									?>
									<option value="<?php echo $lang->slug ?>"><?php echo $lang->name ?></option>
									<?php
									}
								?>
  </select>
</p>

<p>
  <select name="multiregional[][lang]" placeholder="country langs" >
    <?php 
      $langs = get_terms( array(
        'taxonomy' => 'language',
        'hide_empty' => false,
      )); 
									foreach($langs as $lang) {
									?>
									<option value="<?php echo $lang->slug ?>"><?php echo $lang->name ?></option>
									<?php
									}
								?>
  </select>
</p>


<?php
var_dump(pll_the_languages());    
}
?>