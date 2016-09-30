<?php
  include_once 'religions.php';
  include_once 'countries.php';
  include_once 'political_system.php';
  include_once 'languages.php';

  function setTranslations() {
    $group = 'acn';
    if(function_exists('pll_register_string')) {

      foreach (getReligions() as $religion) {
        pll_register_string($religion, $religion, $group. '-religions', false);
      }

      foreach (getCountries() as $country) {
        pll_register_string($country, $country, $group. '-countries', false);
      }

      foreach (getPoliticalSystem() as $political) {
        pll_register_string($political, $political, $group. '-political_system', false);
      }

      foreach (getLanguages() as $language) {
        pll_register_string($language, $language, $group. '-languages', false);
      }
    } else {
      return;
    }
  }
 ?>
