<?php

include_once str_replace('metaboxes', '', __DIR__) . '/lib/update_field.php';
include_once str_replace('metaboxes', '', __DIR__) . '/lib/languages.php';
include_once str_replace('metaboxes', '', __DIR__) . '/lib/countries.php';

include_once __DIR__ . '/report/country.php';
include_once __DIR__ . '/report/year.php';
include_once __DIR__ . '/report/area.php';
include_once __DIR__ . '/report/population.php';
include_once __DIR__ . '/report/political_system.php';
include_once __DIR__ . '/report/nature_persecution.php';
include_once __DIR__ . '/report/situation.php';
include_once __DIR__ . '/report/background.php';
include_once __DIR__ . '/report/graph.php';
include_once __DIR__ . '/report/map.php';
include_once __DIR__ . '/report/languages.php';
include_once __DIR__ . '/report/religion.php';
include_once __DIR__ . '/report/religion_subcategories.php';
include_once __DIR__ . '/report/content.php';

  function bs_report_metabox() {

    $post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;

    add_meta_box('report', 'Report info', 'bs_report_cb', 'reports', 'normal', 'high', null);
  }

  add_action('add_meta_boxes', 'bs_report_metabox');

  function bs_report_cb($post) {
    wp_nonce_field('bs_post_description_meta', 'bs_video_nonce');

    $report_content =  get_post_meta($post->ID, 'report_content_key', true);
    $report_content_count = count($report_content);
?>
<div id="metaboxes-report">
<?php
    report_country($post);
    report_year($post);
    report_area($post);
    report_population($post);
    report_political_system($post);
    report_nature_persecution($post);
    report_situation($post);
    report_background($post);
    report_graph($post);
    report_map($post);
    report_languages($post);
    report_religion_subcategories($post);
    report_content($post);
  ?>
</div>
  <script type="text/javascript">
    var $ = jQuery;

    // var lastContent = <?php echo $report_content_count ?>;
    // console.log(lastContent);
    // for (var i = lastContent; i < 9; i++) {
    //   var el = $('#wp-report_content_' + i + '-wrap');
    //   $('#wp-report_content_' + i + '-wrap').hide();
    // }

    function addContent() {
      var $btnAdd = $('.btn-add-content');
      $btnAdd.on('click', function(e) {
        e.preventDefault();
        lastContent = (lastContent + 1);
        $('#wp-report_content_' + lastContent + '-wrap').show();
      });
    }

    addContent();

    function addAndRemove(sectionName, templateId, cb) {
      var $btnAdd = $('.btn-add-' + sectionName);

      $btnAdd.on('click', function(e) {
        e.preventDefault();
        var template = $('#' + templateId).html();
        $(document).find('.append-' + sectionName).append(template);

        if(typeof cb === 'function') return cb();
      });

    }

    function listenRemove(evt, el) {
      evt.preventDefault();
      $(el).off();
      $(el).parent().remove();
    }

    addAndRemove('religion', 'template-religion', function(c) {
      console.log(c);
    });

    addAndRemove('language', 'template-language');

  </script>

  <?php
  }

  function bs_save_post_report_meta($post_id) {

    update_field(array(
      'field_key' => 'report_year_key',
      'field_name' => 'report_year',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_country_key',
      'field_name' => 'report_country',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_area_key',
      'field_name' => 'report_area',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_area_sup_key',
      'field_name' => 'report_area_sup',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_population_key',
      'field_name' => 'report_population',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_population_sup_key',
      'field_name' => 'report_population_sup',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_nature_persecution_key',
      'field_name' => 'report_nature_persecution',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_situation_key',
      'field_name' => 'report_situation',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_political_system_key',
      'field_name' => 'report_political_system',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_political_system_sup_key',
      'field_name' => 'report_political_system_sup',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_background_key',
      'field_name' => 'report_background',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_graph_key',
      'field_name' => 'report_graph',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_map_key',
      'field_name' => 'report_map',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_religion_key',
      'field_name' => 'report_religion',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_religion_sup_key',
      'field_name' => 'report_religion_sup',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_religion_name_key',
      'field_name' => 'report_religion_name',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_religion_percent_key',
      'field_name' => 'report_religion_percent',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_languages_key',
      'field_name' => 'report_languages',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_languages_sup_key',
      'field_name' => 'report_languages_sup',
      'post_id' => $post_id
    ));

    update_field(array(
      'field_key' => 'report_content_key',
      'field_name' => 'report_content',
      'post_id' => $post_id
    ));
  }

  add_action( 'save_post', 'bs_save_post_report_meta');
 ?>
