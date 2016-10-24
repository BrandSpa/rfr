<?php
include_once(get_template_directory() . '/options/offices_countries.php');

// create custom plugin settings menu
add_action('admin_menu', 'bs_admin_options_menu');

function bs_admin_options_menu() {
		add_menu_page(
    'Brandspa theme options',
    'BS Options', //menu name
    'manage_options', //allow it options
    'bs-logos', //slug
    'logos_settings_page',
    get_template_directory_uri() . '/public/img/bs_options.png', //icon on menu
    110 //position on menu
  );

	add_submenu_page(
		'bs-logos',
		'Categories options',
		'BS Categories',
		'manage_options',
		'bs-categories'
	);

	//call register settings function on init admin page
	add_action( 'admin_init', 'bs_add_country_info_settings' );
}

function bs_add_country_info_settings() {
	$options = getCountries();

  foreach ($options as $value) {
		$value = str_replace(' ', '_', $value);
    register_setting( 'bs_country_info_group', 'logo_' . $value );
    register_setting( 'bs_country_info_group', 'donate_url_' . $value );
    register_setting( 'bs_country_info_group', 'contact_info_' . $value );
  }

}

function logos_settings_page() {
?>
  <?php
  $countries = getCountries();
   ?>

  <div style="background: #f1f1f1; background-size: contain; padding: 15px">
		<div style="text-align: center; text-shadow: 1px 1px 3px rgba(0,0,0, .1)">
			<h1>RFR Options</h1>
		</div>

  <form method="post" action="options.php" style="position: relative; width: 80%; margin: 0 auto">
      <?php settings_fields( 'bs_country_info_group' ); ?>
      <?php do_settings_sections( 'bs_country_info_group' ); ?>

        <?php foreach ($countries as $value): ?>
					<?php $value = str_replace(' ', '_', $value); ?>

          <section style="padding: 15px; margin: 15px auto;background: #fff; box-shadow: 1px 1px 5px rgba(0,0,0, .1); width: 100%">
						<h3><?php echo str_replace('_', ' ', $value) ?></h3>
						<hr>

						<h4>Logo url</h4>
						<p>
							<input
								style="background: rgba(255,255,255,.4); width: 60%; height: 35px"
								type="text"
								class="uploader"
								placeholder="logo url"
								name="logo_<?php echo $value ?>"
								value="<?php echo esc_attr( get_option('logo_' . $value ) ); ?>"
							/>
						</p>
						
						<select name="langs_<?php echo $value ?>[]" style="background: rgba(255,255,255,.4); width: 60%; height: 35px">
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

						<div id="langs-container"></div>

						<template id="template_<?php echo $value ?>">
							<select name="langs_<?php echo $value ?>[]" style="background: rgba(255,255,255,.4); width: 60%; height: 35px">
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
						</template>

						<script>
							
						</script>

							<?php submit_button(); ?>

          </section>


        <?php endforeach; ?>


  </form>
  </div>
<?php } ?>
