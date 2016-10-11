<div class="select_country">
  <a href="#" class="select_country__close">X </a>
  <ul>
  
    <?php 
      $getReportLang = 'en';

       if( function_exists('pll_current_language') ) $getReportLang = pll_current_language();

      foreach(getReports(array('language' => $getReportLang)) as $country): 
    ?>
      <li>
        <a href="<?php echo $report->guid ?>"><?php echo $report->post_title ?></a>
      </li>
    <?php endforeach; ?>
  </ul>
</div>

<script>
  var $ = jQuery;

  $(function() {

    $(document).on('keyup', function(e) {
      if(e.keyCode === 27 && $('.select_country').hasClass('select_country-show')) {
        $('.select_country').removeClass('select_country-show');
      }
    });

    $('.open-select-countries').on('click', function(e) {
      e.preventDefault();
      $('.select_country').addClass('select_country-show');
    });

    $('.select_country__close').on('click', function(e) {
      e.preventDefault();
      $('.select_country').removeClass('select_country-show');
    });
  })

</script>
