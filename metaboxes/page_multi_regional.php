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

<div id="metaboxes-report">

<p>
  <select name="multiregional[country]" >
      <?php if ($mr && !empty($mr['country'])): ?>
        <option value="<?php echo $mr['country'] ?>"><?php echo $mr['country'] ?></option>
        <?php else: ?>
          <option value="">Select Country</option>
      <?php endif; ?>

      <?php foreach (getCountries() as $country): ?>
        <option value="<?php echo $country; ?>"><?php echo $country; ?></option>
      <?php endforeach; ?>

  </select>
</p>

<?php if($mr['lang'] && is_array($mr['lang'])): ?>
<?php foreach($mr['lang'] as $mrlang): ?>
<?php
$neededObject = array_filter( $langs, function ($e) use (&$mrlang) { 
  return $e->slug == $mrlang; 
  });
?>

  <p>
    <select name="multiregional[lang][]" placeholder="country langs" >
      <option value="<?php echo $mrlang ?>"><?php echo $neededObject[key($neededObject)]->name ?></option>
    <?php 
      $langs = get_terms( array( 'taxonomy' => 'language', 'hide_empty' => false, ));
			foreach($langs as $lang) {
		?>
		  <option value="<?php echo $lang->slug ?>"><?php echo $lang->name ?></option>
		<?php
		  }
		?>
  </select>
  <button onClick="removeEl(event, this)">Remove</button>
</p>

<?php endforeach; ?>
<?php else: ?>
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
<?php endif; ?>
 <div class="append-langs"></div>
<script type="text" id="multiregional-template">
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
    <button onClick="removeEl(event, this)">Remove</button>
  </p>
</script>

<button class="add-lang">Add lang</button>

<script>
  var $template = jQuery('#multiregional-template').html();
 
  jQuery('.add-lang').on('click', function(e) {
    e.preventDefault();
     jQuery('.append-langs').append($template);
  });

  function removeEl(evt, el) {
     evt.preventDefault();
    jQuery(el).parent().remove();
  }
</script>


</div>
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