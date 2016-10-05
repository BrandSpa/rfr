<?php
use Dompdf\Dompdf;

if($_GET['pdf']) {
  $dompdf = new Dompdf();
  ob_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title></title>

  <style type="text/css">
  /* latin */
@font-face {
font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 400;
src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url( get_template_directory() . '/public/fonts/RobotoCondensed-Regular') format('ttf');
unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}

    body {
      font-family: 'Roboto Condensed', sans-serif;
      color: #1A2127;
    }

    p {
      font-size: 13px;
    }

    span {
      font-size: 13px;
    }

    h5 {
      font-family: 'Roboto Condensed', sans-serif;
      color: #FC3938;
      margin: 5px 0;
      font-size: 13px;
    }

    .country {
      border-top: 1px solid #536D7F;
      border-bottom: 1px solid #536D7F;
      height: 80px;
    }

    .country h1 {
      font-family: 'Roboto Condensed', sans-serif;
      margin: 10px;
      font-weight: 700;
    }

    .map {
      padding: 40px 60px;
      border-bottom: 1px solid #536D7F;
    }

    .info {
      border-bottom: 1px solid #536D7F;
      height: 250px;
      padding-top: 10px;
    }

    .content {
      margin-top: 20px;
    }

    .content h5 {
      margin-bottom: 10px;
    }

    .col-6 {
      width: 50%;
      display: inline-block;
    }

    .col-5 {
      width: 40%;
      display: inline-block;
    }

    .col-6 {
      width: 50%;
      display: inline-block;
    }

    .col-7 {
      width: 60%;
      display: inline-block;
    }

    .col-3 {
      width: 33.3%;
      display: inline-block;
    }

    .col-12 {
      width: 100%;
    }

  </style>
</head>
<body>
  <div>

    <div class="header">
      <div class="col-6">
        <img src="<?php echo get_template_directory_uri(); ?>/public/img/logo.png" alt="">
      </div>
      <div class="col-6">

        <h4>RELIGIOUS FREEDOM REPORT 2016</h4>
      </div>

    </div>

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <div class="country">
        <h1 class="title"><?php echo get_post_meta($post->ID, 'report_country_key', true) ?></h1>
      </div>

      <div class="map">
        <img src="<?php echo get_template_directory_uri() . '/public/img/maps/' . str_replace(' ', '-',  get_post_meta($post->ID, 'report_country_key', true)) . '.png'  ?>" width="100%">
      </div>


      <div class="info">
        <div class="col-6">
          <div class="col-3">
            <h5>Area</h5>
              <span><?php echo get_post_meta($post->ID, 'report_area_key', true) ?></span>
          </div>

          <div class="col-3">
            <h5>Population</h5>
            <span> <?php echo get_post_meta($post->ID, 'report_population_key', true) ?></span>
          </div>

          <div class="col-3">
            <h5>Political system</h5>
            <span><?php echo get_post_meta($post->ID, 'report_political_system_key', true) ?></span>
          </div>

          <div class="col-12" style="margin-top: 50px">
            <h5>Major Languages</h5>
            <?php if(is_array(get_post_meta($post->ID, 'report_languages_key', true))): ?>
              <?php foreach (get_post_meta($post->ID, 'report_languages_key', true) as $key => $language): ?>
                <span><?php echo $language ?>,</span>
              <?php endforeach; ?>
            <?php endif; ?>
          </div>
        </div>

        <div class="col-6">
          <img src="<?php echo get_post_meta($post->ID, 'report_graph_key', true) ?>" style="width: 100%">
        </div>
      </div>

      <div class="content">
      <?php if(is_array(get_post_meta($post->ID, 'report_content_key', true))): ?>
        <?php foreach (get_post_meta($post->ID, 'report_content_key', true) as $key => $content): ?>
          <?php if( !empty($content['title']) ): ?>
          <div class="report__content-header">

            <h5 class="title-line title-uppercase"><?php echo $content['title'] ?></h5>

          </div>
          <?php endif; ?>
          <?php if( !empty($content['text']) ): ?>
          <div class="report__content-content">

            <p>
              <?php echo $content['text'] ?>
            </p>

          </div>
          <?php endif; ?>
        <?php endforeach; ?>
          <?php endif; ?>
      </div>


    <?php endwhile; else : ?>
      <h1><?php _e( 'Sorry, no posts matched your criteria.' ); ?></h1>
    <?php endif; ?>
  </div>
</body>
</html>


<?php
  $html = ob_get_clean();
  $dompdf->loadHtml($html);

  // (Optional) Setup the paper size and orientation
  $dompdf->setPaper('A4', 'portrait');

  $options = $dompdf->getOptions();

  $options->set(array(
    'fontDir' => get_template_directory() . '/public/fonts',
    'isHtml5ParserEnabled' => true,
    'isRemoteEnabled' => true
  ));

  $dompdf->setOptions($options);

  // Render the HTML as PDF
  $dompdf->render();

  // Output the generated PDF to Browser
  return $dompdf->stream('report', array("Attachment" => false));
}
 ?>
