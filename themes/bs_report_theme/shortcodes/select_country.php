<template id="country-select-template">
  <div>
    <a href="#" class="select_country__close"><i class="ion-close"></i></a>
    <ul>
      <?php 
        $getReportLang = 'en';
        if( function_exists('pll_current_language') ) $getReportLang = pll_current_language();
        foreach(getReports(array('language' => $getReportLang)) as $report): 
      ?>
        <li>
          <a href="<?php echo $report->guid ?>"><?php echo $report->post_title ?></a>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
</template>
 
<countryselect></countryselect>
