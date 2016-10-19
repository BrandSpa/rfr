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
    wp_nonce_field('bs_page_mr_meta', 'bs_multiregional_nonce');
    $langs = get_terms( array( 'taxonomy' => 'language', 'hide_empty' => false, )); 
    $mr = get_post_meta($post->ID, 'multiregional_key', true);
?>

<?php var_dump($mr) ?>


<p>
  <select name="multiregional[country][]" >
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



<?php if(is_array($mr['lang'])): ?>
<?php foreach($mr['lang'] as $mrlang): ?>
<?php
$neededObject = array_filter(
    $langs,
    function ($e) use (&$mrlang) {
        return $e->slug == $mrlang;
    }
);
?>
<?php var_dump($neededObject); ?>
  <p>
  <select name="multiregional[country]" placeholder="country langs" >
  <option value="<?php echo $mrlang ?>"><?php echo $neededObject[0]->name ?></option>
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

<?php endforeach; ?>
<?php endif; ?>

<p>
  <select name="multiregional[lang][]" placeholder="country langs" >
  <option value="">Select lang</option>
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
  <select name="multiregional[lang][]" placeholder="country langs" >
  <option value="">Select lang</option>
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
  <select name="multiregional[lang][]" placeholder="country langs" >
  <option value="">Select lang</option>
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

<template id="mr-lang-template">
<p>
  <select name="multiregional[lang][]" placeholder="country langs" >
  <option value="">Select lang</option>
    <?php 
      
									foreach($langs as $lang) {
									?>
									<option value="<?php echo $lang->slug ?>"><?php echo $lang->name ?></option>
									<?php
									}
								?>
  </select>
</p>
</template>



<?php
 
}


  function bs_save_page_multiregional_meta($post_id) {

    update_field(array(
      'field_key' => 'multiregional_key',
      'field_name' => 'multiregional',
      'post_id' => $post_id
    ));
}


  add_action( 'save_post', 'bs_save_page_multiregional_meta');
?>