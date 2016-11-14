<?php
$dir_base =  str_replace('options', '', __DIR__);
include_once $dir_base . '/lib/offices_countries.php';

// create custom plugin settings menu
add_action('admin_menu', 'bs_admin_option_redirect_menu');

function bs_admin_option_redirect_menu() {
		add_menu_page(
    'Brandspa theme options',
    'office redirect', //menu name
    'manage_options', //allow it options
    'bs-redirect', //slug
    'redirect_settings_page',
    get_template_directory_uri() . '/public/img/bs_options.png', //icon on menu
    110 //position on menu
  );

	//call register settings function on init admin page
	add_action( 'admin_init', 'bs_add_redirect_settings' );
}

function bs_add_redirect_settings() {
	$options = getOfficesCountries();

  foreach ($options as $value) {
		$value = str_replace(' ', '_', $value);
    register_setting( 'bs_country_info_group', 'logo_' . $value );
    register_setting( 'bs_country_info_group', 'redirect_url_' . $value );
    register_setting( 'bs_country_info_group', 'contact_info_' . $value );
  }

}

function redirect_settings_page() {
?>
  <?php
  $countries = getOfficesCountries();
   ?>

  <div style="background: #f1f1f1; background-size: contain; padding: 15px">
		<div style="text-align: center; text-shadow: 1px 1px 3px rgba(0,0,0, .1)">
			<h1>RFR Office redirect</h1>
		</div>

  <form method="post" action="options.php" style="position: relative; width: 80%; margin: 0 auto">
      <?php settings_fields( 'bs_country_info_group' ); ?>
      <?php do_settings_sections( 'bs_country_info_group' ); ?>
      <select name="office_redirect" id="">

        <?php foreach ($countries as $country): ?>
        <option value="<?php echo $country ?>"><?php echo $country ?></option>
        <?php endforeach; ?>

      </select>
     
	<?php submit_button(); ?>
  </form>
  </div>
<?php } ?>
