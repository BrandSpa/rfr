<?php
$dir_base =  str_replace('options', '', __DIR__);
include_once $dir_base . '/lib/offices_countries.php';

// create custom plugin settings menu
add_action('admin_menu', 'bs_admin_footer_country_menu');

function bs_admin_footer_country_menu() {
		add_menu_page(
    'Brandspa theme options',
    'Footer canada', //menu name
    'manage_options', //allow it options
    'bs-footer-country', //slug
    'footer_country_page',
    get_template_directory_uri() . '/public/img/bs_options.png', //icon on menu
    110 //position on menu
  );

	//call register settings function on init admin page
	add_action( 'admin_init', 'bs_footer_texts_info_settings' );
}

function bs_footer_texts_info_settings() {
  register_setting( 'bs_footer_country_group', 'footer_title');
  register_setting( 'bs_footer_country_group', 'footer_text');
  register_setting( 'bs_footer_country_group', 'footer_button');
}

function footer_country_page() {
?>

  <div style="background: #f1f1f1; background-size: contain; padding: 15px">
		<div style="text-align: center; text-shadow: 1px 1px 3px rgba(0,0,0, .1)">
			<h1>RFR footer canada</h1>
		</div>

  <form method="post" action="options.php" style="position: relative; width: 80%; margin: 0 auto; background: #ffff">
      <?php settings_fields( 'bs_footer_country_group' ); ?>
      <?php do_settings_sections( 'bs_footer_country_group' ); ?>
			
				<h4>About us title</h4>
				<input style="width: 100%; height: 35px" type="text"  name="footer_title" value="<?php echo esc_attr( get_option('footer_title') ); ?>" />
			
		
				<h4>About us text</h4>
				<textarea style="width: 100%; height: 35px" type="text" name="footer_text" cols="3" rows="3"><?php echo esc_attr( get_option('footer_text') ); ?></textarea>

			
				<h4>About us button</h4>
				<input style="width: 100%; height: 35px" type="text" name="footer_button" value="<?php echo esc_attr( get_option('footer_button') ); ?>" />

					<?php submit_button(); ?>
  </form>
  </div>
<?php } ?>
